#!/usr/bin/env python3
"""
tools/make_bio004_print_pdfs.py. Nov 27 2026.

Rebuilds the BIO 004 note sheet packets and lab structure lists from their
pages, so the PDFs carry the Spring 2027 minimal style (bio004-minimal.css).
Uses make_pdf.render (the page's own print view) and writes tagged PDF/UA-1.

Run: python3 tools/make_bio004_print_pdfs.py
"""
import asyncio, sys, shutil, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import make_pdf as M
from weasyprint import HTML

R = M.ROOT
JOBS = []
for n in range(1, 6):
    JOBS.append(("BIO004-M%d-Note-Sheet-Packet.html" % n, "BIO004-M%d-Note-Sheet-Packet.pdf" % n,
                 "BIO 004 Module %d Note Sheets · Human Anatomy" % n, "One drawing sheet per Module %d competency" % n))
    JOBS.append(("module-%d-structure-list.html" % n, "BIO004-Module%d-StructureList.pdf" % n,
                 "Module %d Lab Structure List · BIO 004 Human Anatomy" % n, "Every Module %d lab structure, printable" % n))
JOBS.append(("anatomy-structure-list-systems.html", "BIO004-Anatomy-Structure-List.pdf",
             "BIO 004 Anatomy Structure List · Systems Reference", "Every lab structure by body system"))

for src, out, title, desc in JOBS:
    if len(sys.argv) > 1 and not any(k in out for k in sys.argv[1:]): continue
    html = asyncio.run(M.render(src, None))
    t = R / out
    HTML(string=html, base_url=str(R) + '/').write_pdf(t, pdf_variant='pdf/ua-1', uncompressed_pdf=False)
    M.stamp(t, title, desc)
    print("  ", out, M.audit(t), flush=True)
    for d in ("M4-print", "M5-print"):
        if (R / d / out).exists(): shutil.copy(t, R / d / out)
