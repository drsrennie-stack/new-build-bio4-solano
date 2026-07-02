import csv, os
CARDS="/sessions/zealous-peaceful-feynman/mnt/Spaced Recall Prototype BIOL 004/week-1/cards"
BACK=os.path.join(CARDS,"_original-8col")
os.makedirs(BACK,exist_ok=True)

NEWCOLS=["Card ID","Week","System","Module","Topic","Subtopic","Learning Objective",
         "Difficulty","Depth of Knowledge","Question","Answer","Explanation",
         "Common Misconception","Tags"]

# Learning objective per module, faithful summaries of the Week 1 notes' "BY THE END" lists
LO={
 "Foundations":"Use anatomical position, directional and regional terms, body planes, and the levels of structural organization precisely.",
 "Body Cavities":"Distinguish the body cavities and serous membranes, map the mediastinum, and locate abdominopelvic organs by region and quadrant.",
 "Cell Anatomy":"Identify the parts of the generalized cell and trace how materials move through the endomembrane system.",
 "Tissues":"Classify the four tissue types and their subtypes by structure, function, and location.",
}
def lo_for(mod):
    return LO.get(mod, "")

OLD_FILES=[
 "Week1_Spaced_Recall_Cards_001-100_FULL.csv",
 "Week1_Spaced_Recall_Cards_101-200_FULL.csv",
 "Week1_Spaced_Recall_Cards_201-300_FULL.csv",
 "Week1_Spaced_Recall_Cards_301-400_FULL.csv",
]
migrated_rows=[]
for fn in OLD_FILES:
    path=os.path.join(CARDS,fn)
    rows=list(csv.DictReader(open(path,encoding="utf-8")))
    # backup original
    with open(os.path.join(BACK,fn),"w",newline="",encoding="utf-8") as bf:
        w=csv.DictWriter(bf,fieldnames=rows[0].keys()); w.writeheader(); w.writerows(rows)
    out=[]
    for r in rows:
        mod=r["Module"]
        out.append({
            "Card ID":r["ID"],"Week":"Week 1","System":mod,"Module":mod,
            "Topic":r["Topic"],"Subtopic":r["Topic"],           # mirror Topic until finer tagging
            "Learning Objective":lo_for(mod),
            "Difficulty":r["Difficulty"],"Depth of Knowledge":r["DOK"],
            "Question":r["Question"],"Answer":r["Answer"],
            "Explanation":"","Common Misconception":"",           # to be authored in a teaching pass
            "Tags":r["Tags"],
        })
    os.chmod(path,0o644)
    # overwrite in place with 14-col
    with open(path,"w",newline="",encoding="utf-8") as f:
        w=csv.DictWriter(f,fieldnames=NEWCOLS); w.writeheader(); w.writerows(out)
    migrated_rows+=out
    print("migrated",fn,"->",len(out),"rows")

# add the already-14col batch 5
b5=os.path.join(CARDS,"Week1_Spaced_Recall_Cards_401-500_FULL.csv")
b5rows=list(csv.DictReader(open(b5,encoding="utf-8")))
master=migrated_rows+b5rows
# consolidated master
mpath=os.path.join(CARDS,"Week1_MASTER_001-500_14col.csv")
with open(mpath,"w",newline="",encoding="utf-8") as f:
    w=csv.DictWriter(f,fieldnames=NEWCOLS); w.writeheader(); w.writerows(master)
print("\nMASTER:",len(master),"rows ->",os.path.basename(mpath))

# validate: every file now shares the 14-col header; IDs unique
allids=[r["Card ID"] for r in master]
assert len(allids)==len(set(allids)), "duplicate IDs in master"
teach_done=sum(1 for r in master if r["Explanation"].strip())
print("unique IDs:",len(set(allids)))
print("cards with teaching fields authored:",teach_done,"of",len(master))
print("cards awaiting teaching pass (Explanation/Misconception):",len(master)-teach_done)
