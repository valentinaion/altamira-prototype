# Quick Start Guide – Altamira Regenerative Finance Prototype

## 🚀 Get Started in 30 Seconds

### Option 1: Python (Recommended – No Dependencies)
```bash
cd /home/vaion/altamira-prototype
python3 -m http.server 8000
```
Then open: **http://localhost:8000/standalone.html**

### Option 2: Node.js
```bash
cd /home/vaion/altamira-prototype
npx http-server . -p 8000
```
Then open: **http://localhost:8000/standalone.html**

### Option 3: npm (if dependencies are installed)
```bash
cd /home/vaion/altamira-prototype
npm start
```

---

## 📊 What You'll See

### **Tab 1: Discover Projects**
- Browse all 10 regenerative projects in Colombia
- Search by project name or department
- Click any card to see details
- Projects span 5 departments: Antioquia, Valle del Cauca, Cundinamarca, Meta, Bolívar

### **Tab 2: Dashboard**
- KPI cards showing: Active projects, total carbon impact, investment, avg biodiversity
- Department breakdown table
- All metrics filter in real-time based on your search

### **Tab 3: Tracking**
- Table of active projects under monitoring
- Shows carbon impact, biodiversity score, investment size per project
- Professional tabular view for investor review

---

## 💡 Key Features

✅ **Interactive Search:** Type to filter projects in real-time  
✅ **Responsive Design:** Works on mobile, tablet, desktop  
✅ **Synthetic Data Callouts:** Clear warnings that all data is demo-only  
✅ **No Build Required:** Single HTML file, runs immediately  
✅ **Fluent UI Design:** Microsoft's design tokens and styling  

---

## 📁 File Structure

```
/home/vaion/altamira-prototype/
├── standalone.html              ← Open this in browser ✅
├── src/
│   ├── App.tsx                  ← Original React component (reference)
│   ├── data.ts                  ← Synthetic project data (reference)
│   └── index.tsx                ← React entry point (reference)
├── README.md                    ← Full technical docs
├── DELIVERY_SUMMARY.md          ← Executive overview
├── BUILD_GUIDE.md               ← Build & troubleshooting
├── TESTING_RESULTS.md           ← Testing verification
└── QUICK_START.md               ← This file
```

---

## 🔍 Data Included

**10 Synthetic Colombian Regenerative Projects** across:
- **5 Departments:** Antioquia, Valle del Cauca, Cundinamarca, Meta, Bolívar
- **5 Project Types:** Agroforestry, Watershed, Cattle, Mangrove, Coffee
- **Metrics Per Project:**
  - Carbon Avoided: 220–3,200 tCO2e/year
  - Biodiversity: 61–88/100
  - Investment: $310K–$890K
  - Stage: Active, Diligence, or Discovery

**IMPORTANT:** All data is 100% synthetic for demonstration. Real investment decisions require actual project data.

---

## 🛠️ Troubleshooting

### **Port 8000 already in use?**
```bash
# Try a different port
python3 -m http.server 9000
# Then visit http://localhost:9000/standalone.html
```

### **npm start fails?**
The original React Scripts approach had dependency conflicts. Use the standalone HTML instead:
```bash
# Instead of: npm start
# Use: Python server above
```

### **No CSS styling appears?**
Refresh your browser (Ctrl+F5 or Cmd+Shift+R). All CSS is embedded in the HTML file.

---

## 📈 Next Steps for Production

1. **Deploy:** Move `standalone.html` to any web host (Azure, GitHub Pages, AWS, etc.)
2. **Live Data:** Replace synthetic data with API calls to real project database
3. **Authentication:** Add Azure AD login (MSAL)
4. **Analytics:** Add Application Insights tracking
5. **Scale:** Migrate to production React app if >1000 projects needed

---

## 📞 Support

- **Technical Questions?** See `README.md` and `BUILD_GUIDE.md`
- **Product Questions?** See `DELIVERY_SUMMARY.md` and PRD.md (in session folder)
- **Data Questions?** All 10 projects are defined in `src/data.ts` (or inline in `standalone.html`)

---

**Ready?** Open `standalone.html` in your browser and explore! 🌿
