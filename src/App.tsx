import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Target, 
  MessageSquare, 
  Stethoscope, 
  Hospital, 
  FileText, 
  Mail, 
  Zap, 
  Database, 
  Truck, 
  Share2, 
  UserCog, 
  BarChart3, 
  ShieldCheck,
  Info,
  Building2,
  CheckCircle2,
  ChevronLeft,
  Settings,
  Package,
  Globe,
  Smartphone,
  Crown,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- Types ---

interface Field {
  label: string;
  type?: string;
  required?: boolean;
}

interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

// --- Components ---

const FieldBubble = ({ label, type, required }: Field) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="field-bubble"
  >
    <span className="w-2 h-2 rounded-full bg-brand-red" />
    <span>{label}</span>
    {type && <span className="text-[10px] opacity-60 bg-brand-silver/30 px-1.5 py-0.5 rounded uppercase">{type}</span>}
    {required && <span className="text-brand-red text-xs font-bold">*</span>}
  </motion.div>
);

const StatusBubble = ({ label, color }: { label: string, color: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="status-bubble"
    style={{ backgroundColor: color }}
  >
    {label}
  </motion.div>
);

const ContentCard = ({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon?: React.ElementType }) => (
  <div className="glass-card rounded-2xl p-6 mb-6">
    <div className="flex items-center gap-3 mb-4">
      {Icon && <Icon className="w-6 h-6 text-brand-red" />}
      <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
    </div>
    <div className="text-brand-muted leading-relaxed">
      {children}
    </div>
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Timeline = () => {
  const events = [
    { date: '1.3.26', title: 'Kick-Off', desc: 'יריית הפתיחה: תיאום ציפיות והגדרת מדדי הצלחה.', pos: 'up' },
    { date: '8.3.26', title: 'שירותי פיתוח קומרס', desc: 'הכנסת צוות הפיתוח הייעודי ותחילת עבודה על תשתית האתר.', pos: 'down' },
    { date: '12.3.26', title: 'אפיון סופי', desc: 'חתימה על דרישות פונקציונליות ועיצוביות (CRM + אתר).', pos: 'up' },
    { date: '15.3.26', title: 'בחירת ספקים', desc: 'סגירת תשתיות אירוח, סליקה ומערכות משלימות.', pos: 'down' },
    { date: '15.3.26', title: 'ישיבת סטטוס #1', desc: 'סקירת התקדמות שבועית.', pos: 'dot' },
    { date: '22.3.26', title: 'ישיבת סטטוס #2', desc: 'סקירת התקדמות שבועית.', pos: 'dot' },
    { date: '29.3.26', title: 'ישיבת סטטוס #3', desc: 'סקירת התקדמות שבועית.', pos: 'dot' },
    { date: '31.3.26', title: 'פיתוח קומרס & CRM א\'', desc: 'עליית שלב א\' ב-CRM וביצוע שיפורי נראות ו-SEO בחנות.', pos: 'up' },
    { date: '5.4.26', title: 'ישיבת סטטוס #4', desc: 'סקירת התקדמות שבועית.', pos: 'dot' },
    { date: '12.4.26', title: 'ישיבת סטטוס #5', desc: 'סקירת התקדמות שבועית.', pos: 'dot' },
    { date: '15.4.26', title: 'פיתוח CRM שלב ב\'', desc: 'סיום הטמעת מודולים מורכבים ואינטגרציות מלאות.', pos: 'down' },
    { date: '19.4.26', title: 'ישיבת סטטוס #6', desc: 'סקירת התקדמות שבועית.', pos: 'dot' },
    { date: '26.4.26', title: 'ישיבת סטטוס #7', desc: 'סקירת התקדמות שבועית.', pos: 'dot' },
    { date: '30.4.26', title: 'ליווי והדרכה', desc: 'הכשרת הצוות על המערכות החדשות ומסירת מפתחות.', pos: 'up' },
    { date: '1.5.26', title: 'תמיכה שוטפת', desc: 'מעבר למודל תחזוקה, שיפורים רציפים וליווי אסטרטגי.', pos: 'down' },
  ];

  return (
    <div className="relative py-32 overflow-x-auto scrollbar-hide">
      <div className="min-w-[1400px] px-10 relative">
        {/* Central Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-brand-silver/30 -translate-y-1/2" />
        
        <div className="flex justify-between items-center relative">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col items-center relative" style={{ width: `${100 / events.length}%` }}>
              {event.pos === 'up' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full mb-6 flex flex-col items-center text-center w-40"
                >
                  <div className="bg-white p-3 rounded-xl shadow-lg border border-brand-silver/20 mb-3 hover:border-brand-red transition-colors">
                    <p className="text-[10px] font-bold text-brand-red mb-1">{event.date}</p>
                    <p className="text-xs font-black text-brand-dark leading-tight">{event.title}</p>
                    <p className="text-[10px] text-brand-muted mt-1.5 leading-relaxed">{event.desc}</p>
                  </div>
                  <div className="w-0.5 h-6 bg-brand-red/30" />
                </motion.div>
              )}
              
              {event.pos === 'down' && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-6 flex flex-col items-center text-center w-40"
                >
                  <div className="w-0.5 h-6 bg-brand-blue/30" />
                  <div className="bg-white p-3 rounded-xl shadow-lg border border-brand-silver/20 mt-3 hover:border-brand-blue transition-colors">
                    <p className="text-[10px] font-bold text-brand-blue mb-1">{event.date}</p>
                    <p className="text-xs font-black text-brand-dark leading-tight">{event.title}</p>
                    <p className="text-[10px] text-brand-muted mt-1.5 leading-relaxed">{event.desc}</p>
                  </div>
                </motion.div>
              )}

              {event.pos === 'dot' ? (
                <div className="group relative">
                  <div className="w-4 h-4 rounded-full bg-brand-red border-2 border-white shadow-md z-10 cursor-help transition-transform group-hover:scale-125" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-32 bg-brand-dark text-white text-[10px] p-2 rounded shadow-xl z-50">
                    <p className="font-bold">{event.date}</p>
                    <p>{event.title}</p>
                  </div>
                </div>
              ) : (
                <div className="w-2.5 h-2.5 rounded-full bg-brand-silver/50 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('cxo');

  const sections: Section[] = [
    {
      id: 'cxo',
      title: 'CXO | CHIEF',
      icon: Crown,
      content: (
        <div className="space-y-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.2em' }}
              className="text-4xl font-light text-brand-dark uppercase tracking-[0.2em] mb-4"
            >
              CXO CHIEF
            </motion.h2>
            <div className="h-1 w-24 bg-brand-red mx-auto mb-8" />
          </div>

          <ContentCard title="חזון ואני מאמין – טרנספורמציה דיגיטלית מקצה לקצה">
            <div className="space-y-6 text-lg italic font-serif text-brand-dark/80 leading-relaxed">
              <p>"כשותף הטכנולוגי של וט מד סולושיינס, החזון שלי הוא להפוך את הארגון למוביל דיגיטלי בעולם הווטרינריה. אנחנו לא רק בונים מערכת CRM או משפרים אתר – אנחנו מקימים 'מערכת הפעלה' עסקית."</p>
              
              <div className="not-italic font-sans space-y-4 pt-4">
                <p className="font-bold text-brand-red">האני מאמין שלי מושתת על שלושה עקרונות:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-brand-gray rounded-xl border-r-4 border-brand-red">
                    <p className="font-bold text-brand-dark mb-1">קישוריות (Connectivity)</p>
                    <p className="text-sm">אפס כפילויות נתונים. מה שהלקוח רואה באתר, המנכ"ל רואה ב-CRM.</p>
                  </div>
                  <div className="p-4 bg-brand-gray rounded-xl border-r-4 border-brand-blue">
                    <p className="font-bold text-brand-dark mb-1">חוויית לקוח (CX)</p>
                    <p className="text-sm">מסע לקוח חלק, מהיר ומרשים שבונה אמון עוד לפני המפגש עם הרופא.</p>
                  </div>
                  <div className="p-4 bg-brand-gray rounded-xl border-r-4 border-brand-muted">
                    <p className="font-bold text-brand-dark mb-1">יעילות תפעולית</p>
                    <p className="text-sm">אוטומציה שמחליפה עבודה ידנית, מונעת טעויות ומאפשרת לצוות להתמקד במה שחשוב.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-col items-end">
                <p className="text-2xl font-signature text-brand-red">Jonathan Benjamin</p>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-muted">CXO & Digital Strategist</p>
              </div>
            </div>
          </ContentCard>

          <ContentCard title="מפת דרכים אסטרטגית (Timeline)" icon={BarChart3}>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold text-brand-muted">תקופת ביצוע מרכזית: 1.3.26 – 1.5.26</p>
              <div className="flex gap-4 text-[10px] uppercase font-bold">
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-red" /> שלב פיתוח</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-silver" /> נקודת בקרה</div>
              </div>
            </div>
            <Timeline />
          </ContentCard>
        </div>
      )
    },
    {
      id: 'background',
      title: 'רקע ומטרות',
      icon: Info,
      content: (
        <div className="space-y-6">
          <ContentCard title="בית העסק" icon={Building2}>
            <p>בית העסק וט מד סולושיינס הנו בית עסק ייחודי המשלב בין שירות מתקדם בעולמות הרפואה הוטרינרית לבין עולמות הקומרס בדגש על ממכר מוצרים משלימים לחיות מחמד בתחום הרפואה - תרופות ייעודיות, טיפוח, תחזוקה וציוד משלים.</p>
          </ContentCard>
          <ContentCard title="מטרת הפרויקט" icon={Target}>
            <p>מטרת הפרוייקט הינה הקמת מערכת CRM אשר תספק פתרון בעולמות מטה המורכבים מיכולות ישירות ומיכולות אינטגרציה למערכות נוספות.</p>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
              {['ניהול לידים', 'ניהול פניות', 'ניהול לקוחות', 'ניהול וטרינרים', 'ניהול מרפאות', 'ניהול אוטומציות', 'דשבורד אינטראקטיבי', 'דוחות ומידע', 'ניהול דיוור', 'ניהול פרויקטים', 'משימות ואירועים', 'ניהול ממשקים'].map(item => (
                <div key={item} className="bg-brand-gray px-3 py-2 rounded-lg text-sm font-medium text-brand-dark flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  {item}
                </div>
              ))}
            </div>
          </ContentCard>
          <ContentCard title="ממשקים נדרשים" icon={Share2}>
            <div className="flex flex-wrap gap-3">
              {['Google Ads', 'Meta', 'WhatsApp', 'Gmail', 'Calendar', 'WooCommerce'].map(item => (
                <span key={item} className="px-4 py-2 bg-white border border-brand-silver rounded-full text-sm font-bold shadow-sm flex items-center gap-2">
                  <Globe className="w-4 h-4 text-brand-red" />
                  {item}
                </span>
              ))}
            </div>
          </ContentCard>
        </div>
      )
    },
    {
      id: 'org',
      title: 'פרטי הארגון',
      icon: Building2,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentCard title="פרטים כלליים">
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-bold">שם הארגון:</span>
                <span>וט מד סולושיינס בע״מ</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-bold">ח״פ:</span>
                <span>517128831</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-bold">אשת קשר:</span>
                <span>עדי, 0509101975</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-bold">אתר:</span>
                <a href="https://vetonline.co.il" className="text-crm-primary underline">vetonline.co.il</a>
              </div>
            </div>
          </ContentCard>
        </div>
      )
    },
    {
      id: 'functional',
      title: 'דרישות פונקציונאליות',
      icon: Settings,
      content: (
        <div className="space-y-6">
          <ContentCard title="תשתית וטכנולוגיה">
            <BulletList items={[
              'המערכת תעמוד בכ 95% מדרישות מסמך זה לכל הפחות',
              'המערכת מבוססת ענן ונגישה מכל מקום',
              'פלטפורמת Web עם אפליקציה לשימוש',
              'תמיכה מלאה בשפה העברית',
              'הגדרת אוטומציות ללא הגבלה ריאלית',
              'יכולות עצמאיות ללא תלות בתוכנות צד ג (Zapier/Make)',
              'שירותי API ללא תוספת תשלום'
            ]} />
          </ContentCard>
          <ContentCard title="מודל עסקי ושירות">
            <BulletList items={[
              'כלל היכולות במחיר המשתמש ללא עלות נוספת',
              'שירותי תחזוקה שוטפים ללא חיוב נוסף',
              'שדרוגים ושיפורים ללא עלות נוספת',
              'מערך שירות לקוחות ישיר לבית העסק',
              'איש קשר ייעודי לתהליך ההקמה (בנק שעות ללא עלות)'
            ]} />
          </ContentCard>
        </div>
      )
    },
    {
      id: 'customers',
      title: 'ניהול לקוחות',
      icon: Users,
      content: (
        <div className="space-y-6">
          <ContentCard title="ניהול לקוחות ואנשי קשר (CRM Core Entities)">
            <p className="mb-4">מודול הלקוחות משמש כמרכז המידע האחוד (Single Source of Truth) עבור כלל האינטראקציות בארגון. המערכת תומכת במבנה היררכי המאפשר קישור של מספר אנשי קשר לישות עסקית אחת, תוך שמירה על היסטוריית תקשורת ונתונים פיננסיים ברמת הכרטיס.</p>
            
            <div className="space-y-6">
              <div className="border-r-4 border-brand-red pr-4">
                <h4 className="font-bold text-brand-dark mb-2">1. מודול חברות / לקוחות (Account Management)</h4>
                <p className="text-sm mb-3">ניהול הכרטסת המרכזית של הלקוח המשלם או הישות המשפטית:</p>
                <div className="flex flex-wrap gap-3">
                  <FieldBubble label="שם החברה" required />
                  <FieldBubble label="ח.פ / ע.מ" />
                  <FieldBubble label="סטטוס לקוח" type="Dropdown" />
                  <FieldBubble label="סיווג / תעשייה" type="Dropdown" />
                  <FieldBubble label="מקור הגעה" />
                  <FieldBubble label="כתובת מלאה" />
                  <FieldBubble label="אתר אינטרנט" />
                  <FieldBubble label="טלפון מרכזייה" />
                  <FieldBubble label="מנהל לקוח (Owner)" />
                </div>
                <div className="mt-3 text-sm italic text-brand-muted">
                  * זיהוי רשמי, סיווג אסטרטגי ושיוך ניהולי (Ownership).
                </div>
              </div>

              <div className="border-r-4 border-brand-blue pr-4">
                <h4 className="font-bold text-brand-dark mb-2">2. מודול אנשי קשר (Contact Management)</h4>
                <p className="text-sm mb-3">ניהול הפרסונות הפועלות מול הארגון, עם דגש על תקשורת מותאמת אישית:</p>
                <div className="flex flex-wrap gap-3">
                  <FieldBubble label="שם מלא" required />
                  <FieldBubble label="תפקיד" />
                  <FieldBubble label="שיוך לחברה" type="Lookup" />
                  <FieldBubble label="טלפון נייד" required />
                  <FieldBubble label="אימייל" required />
                  <FieldBubble label="מקור" />
                  <FieldBubble label="סיווג ראשי" />
                  <FieldBubble label="תת סיווג" />
                  <FieldBubble label="מגדר" />
                  <FieldBubble label="תאריך יצירה" />
                </div>
                <div className="mt-3 text-sm italic text-brand-muted">
                  * פרופיל אישי, תפקיד ושיוך, סגמנטציה רב-שכבתית.
                </div>
              </div>

              <div className="border-r-4 border-brand-muted pr-4">
                <h4 className="font-bold text-brand-dark mb-2">3. חוויית משתמש וגמישות (Data Flexibility)</h4>
                <BulletList items={[
                  'ניהול כרטסת מסודר: הקמה נוחה של שדות מדידיים נוספים ללא הגבלה.',
                  'מעקב SLA: תיעוד אוטומטי של תאריך יצירת הרשומה לחישוב זמני תגובה.'
                ]} />
              </div>
            </div>
          </ContentCard>
        </div>
      )
    },
    {
      id: 'leads',
      title: 'ניהול לידים',
      icon: Target,
      content: (
        <div className="space-y-6">
          <ContentCard title="שדות לידים">
            <div className="flex flex-wrap gap-3">
              <FieldBubble label="שם הליד / חברה" />
              <FieldBubble label="סטטוס ליד" />
              <FieldBubble label="דירוג (Rating)" />
              <FieldBubble label="מוצר/שירות מבוקש" />
              <FieldBubble label="תקציב מוערך" />
              <FieldBubble label="סיבת פסילה" />
              <FieldBubble label="ערוץ פנייה" />
              <FieldBubble label="סוג הקמפיין" />
              <FieldBubble label="שם טופס הקמפיין" />
            </div>
          </ContentCard>
        </div>
      )
    },
    {
      id: 'inquiries',
      title: 'ניהול פניות',
      icon: MessageSquare,
      content: (
        <div className="space-y-6">
          <ContentCard title="ניהול פניות (Leads & Inquiries Management)">
            <p className="mb-6">מסך זה מהווה את ה-"Control Tower" של הארגון. המטרה היא ריכוז כל ערוצי התקשורת הנכנסים לישות אחת מנוהלת, תוך הבטחת SLA (זמן תגובה) מהיר ומניעת "נפילת פניות בין הכיסאות".</p>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-brand-gray/50 p-5 rounded-xl border border-brand-silver/30">
                <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-brand-red" />
                  סטטוסים במערכת
                </h4>
                <div className="flex flex-wrap gap-3">
                  <StatusBubble label="חדש (New)" color="#d42a35" />
                  <StatusBubble label="בטיפול (In Progress)" color="#324e70" />
                  <StatusBubble label="ממתין ללקוח (Pending)" color="#607690" />
                  <StatusBubble label="הומר ללקוח (Converted)" color="#052d59" />
                  <StatusBubble label="לא רלוונטי (Lost)" color="#a9b2be" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-r-4 border-brand-red pr-4">
                  <h4 className="font-bold text-brand-dark mb-2">1. ריכוז ומקורות פנייה (Omnichannel Ingestion)</h4>
                  <p className="text-sm mb-2">המערכת תבצע קליטה אוטומטית (Automated Capture) של פניות מהערוצים הבאים:</p>
                  <BulletList items={[
                    'ערוצי דיגיטל: לידים מקמפיינים (Meta, Google), וטפסי צור קשר מהאתר.',
                    'ערוצי שיח ישיר: פניות מוואטסאפ עסקי ופניות מבוססות בוטים אוטומטיים.',
                    'לוגיקה מוספת: המערכת תבצע "צביעת ליד" – זיהוי אוטומטי של מקור ההגעה לצורך ניתוח ROI שיווקי עתידי.'
                  ]} />
                </div>

                <div className="border-r-4 border-brand-blue pr-4">
                  <h4 className="font-bold text-brand-dark mb-2">2. ניהול סטטוסים וסבב טיפול (Lifecycle & Routing)</h4>
                  <p className="text-sm mb-3">המערכת תנהל את הפנייה דרך הסטטוסים המוגדרים, תוך שמירה על רצף טיפולי:</p>
                  <BulletList items={[
                    'חדש (New) – פנייה שטרם טופלה.',
                    'בטיפול (In Progress) – פנייה המשויכת לנציג.',
                    'ממתין ללקוח (Pending Customer) – לאחר יצירת קשר ראשוני.',
                    'הומר ללקוח (Converted) – פנייה שהפכה לרכישת טיפול/מוצר.',
                    'לא רלוונטי (Nurturing/Lost) – פנייה שנסגרה ללא עסקה.'
                  ]} />
                </div>

                <div className="border-r-4 border-brand-muted pr-4">
                  <h4 className="font-bold text-brand-dark mb-2">3. אוטומציות ו-SLA</h4>
                  <BulletList items={[
                    'הודעת ברוכים הבאים: שליחת וואטסאפ אוטומטי מיידי עם קבלת הליד.',
                    'הקצאה חכמה (Round Robin): חלוקת פניות בין נציגים/רופאים לפי עומס או התמחות.',
                    'התראות SLA: במידה ופנייה בסטטוס "חדש" לא טופלה תוך X דקות, תישלח התראה למנהל.'
                  ]} />
                </div>

                <div className="border-r-4 border-brand-pink pr-4">
                  <h4 className="font-bold text-brand-dark mb-2">4. היבטי רכישת טיפול (Conversion Logic)</h4>
                  <p className="text-sm mb-3">כאשר פנייה מוגדרת כ-"רכישת טיפול", המערכת תפעיל פרוטוקול נתונים ייעודי:</p>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <FieldBubble label="תשלום עבור הרכישה" />
                    <FieldBubble label="פרטי לקוח" />
                    <FieldBubble label="פרטי חיית המחמד" />
                    <FieldBubble label="פרטי המקרה" />
                    <FieldBubble label="תאריך טיפול רצוי" />
                    <FieldBubble label="שעת טיפול רצוי" />
                    <FieldBubble label="שפת אם מדוברת" />
                  </div>
                </div>
              </div>
            </div>
          </ContentCard>
        </div>
      )
    },
    {
      id: 'medical',
      title: 'טיפול וטרינרי',
      icon: Stethoscope,
      content: (
        <div className="space-y-6">
          <ContentCard title="ניהול טיפול וטרינרי (Clinical Case Management)">
            <p className="mb-4">מודול זה משמש כתיק הרפואי הדיגיטלי (EMR) של המטופל. הוא מאפשר לווטרינר לתעד את המפגש בצורה מובנית, להפיק מרשמים ולבצע הפניות להמשך טיפול, תוך סנכרון מלא עם נתוני הרכישה המקוריים מ-Woocommerce.</p>
            
            <div className="space-y-6">
              <div className="border-r-4 border-brand-red pr-4">
                <h4 className="font-bold text-brand-dark mb-2">1. פרופיל המטופל (Pet Profile Context)</h4>
                <div className="flex flex-wrap gap-3 mb-3">
                  <FieldBubble label="שם חיית מחמד" />
                  <FieldBubble label="סוג בעל חיים" />
                  <FieldBubble label="מין" />
                  <FieldBubble label="גזע" />
                  <FieldBubble label="צבע" />
                  <FieldBubble label="סירוס / עיקור" />
                </div>
                <BulletList items={[
                  'מטרה: מניעת טעויות זיהוי ויצירת רצף טיפולי בין ביקורים.',
                  'תיעוד היסטורי: גישה מהירה להיסטוריית האבחנות הקודמת בלחיצת כפתור.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-blue pr-4">
                <h4 className="font-bold text-brand-dark mb-2">2. פרוטוקול אבחנה וטיפול (Diagnosis & Treatment Workflow)</h4>
                <div className="flex flex-wrap gap-3 mb-3">
                  <FieldBubble label="אבחון" type="Text" />
                  <FieldBubble label="שם התרופה" />
                  <FieldBubble label="תצורת הטיפול" type="Dropdown" />
                  <FieldBubble label="מינון" />
                  <FieldBubble label="מינון יומי" />
                  <FieldBubble label="כמות כללית" />
                  <FieldBubble label="לכמה ימים" />
                </div>
                <BulletList items={[
                  'אבחון (Clinical Notes): שדה טקסט חופשי לתיאור המצב הקליני והסימפטומים.',
                  'ניהול מרשמים דיגיטלי (E-Prescribing): בחירת תרופה, הגדרת מינון ותצורה.',
                  'אוטומציה: הפקת "סיכום טיפול" מעוצב הכולל מרשם חתום דיגיטלית שנשלח למייל/וואטסאפ.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-muted pr-4">
                <h4 className="font-bold text-brand-dark mb-2">3. הפניות ורשת מומחים (Referral Management)</h4>
                <BulletList items={[
                  'ניתוב חכם: בחירת מרפאה מתוך רשימה סגורה מעבירה את כל פרטי המקרה אוטומטית.',
                  'בקשת משוב: מלל מובנה המבקש מהמרפאה המופנית לשלוח את הממצאים בחזרה.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-pink pr-4">
                <h4 className="font-bold text-brand-dark mb-2">4. היבטי רגולציה וחתימה (Compliance)</h4>
                <BulletList items={[
                  'חתימה דיגיטלית: הטמעת חותמת הרופא המטפל על גבי המסמך המופק.',
                  'ארכיון קבצים: יכולת העלאת מסמכים (תוצאות מעבדה, רנטגן) ישירות לכרטיס המטופל.'
                ]} />
              </div>
            </div>
          </ContentCard>
        </div>
      )
    },
    {
      id: 'clinics',
      title: 'ניהול מרפאות',
      icon: Hospital,
      content: (
        <div className="space-y-6">
          <ContentCard title="ניהול מרפאות (Partner Clinic Management)">
            <p className="mb-4">מודול זה מנהל את רשת "מרפאות המפתח" והשותפים העסקיים של וט מד סולושיינס. המטרה היא יצירת סינרגיה תפעולית המאפשרת שליחת מידע רפואי וניהול התקשרות אוטומטי, תוך בקרה על הביצועים המשותפים.</p>
            
            <div className="space-y-6">
              <div className="border-r-4 border-brand-red pr-4">
                <h4 className="font-bold text-brand-dark mb-2">1. כרטיס ישות: מרפאת מפתח (Partner Profile)</h4>
                <BulletList items={[
                  'פרטי התקשרות: הגדרת איש קשר ייעודי במרפאה לקבלת הפניות רפואיות.',
                  'סיווג גיאוגרפי/מקצועי: שיוך המרפאה לפי יכולות (מעבדה, צילומים, מומחים) לניתוב חכם.',
                  'היסטוריית קבצים: תיעוד מסמכים וממצאים שהתקבלו מהמרפאה חזרה למערכת.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-blue pr-4">
                <h4 className="font-bold text-brand-dark mb-2">2. ניהול הפניות אוטומטי (Automated Referral Flow)</h4>
                <BulletList items={[
                  'שליחה בדחיפה (Push): בעת בחירת מרפאה, המערכת תשלח אוטומטית את פרטי המקרה למייל/וואטסאפ.',
                  'מלל קבוע ומובנה: בקשה מובנית לשליחת ממצאי הבדיקה בחזרה למייל הרשמי של וט מד.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-muted pr-4">
                <h4 className="font-bold text-brand-dark mb-2">3. מדידה, דוחות ויחסי גומלין (Partner Analytics)</h4>
                <BulletList items={[
                  'ניתוח כמותי: מדידת כמות הפניות שנשלחו לכל מרפאה בחתכי זמן.',
                  'ניתוח איכותי: פילוח סוגי הטיפולים המבוצעים בכל מרפאה.',
                  'מדד זמינות: מעקב אחר מהירות קבלת הממצאים חזרה מהמרפאה.'
                ]} />
              </div>
            </div>
          </ContentCard>
        </div>
      )
    },
    {
      id: 'forms',
      title: 'טפסים ודיוור',
      icon: FileText,
      content: (
        <div className="space-y-6">
          <ContentCard title="ניהול טפסים">
            <p>המערכת תתמוך בייצור, עיצוב וחיבור טפסים אינטרנטיים עם עורך HTML/CSS מובנה.</p>
          </ContentCard>
          <ContentCard title="ניהול דיוור" icon={Mail}>
            <BulletList items={[
              'דיוור מבוסס וואטסאפ ודוא״ל',
              'פעולות דיוור מדידיות',
              'שימוש בשדות ייחודיים לדיוק הפנייה',
              'שליחת קבצים ולינקים'
            ]} />
          </ContentCard>
        </div>
      )
    },
    {
      id: 'automations',
      title: 'אוטומציות',
      icon: Zap,
      content: (
        <div className="space-y-6">
          <ContentCard title="אוטומציות פנים ארגוניות">
            <BulletList items={[
              'התראות על עמידה בביצועים או נתונים חריגים',
              'שינוי שדות אוטומטי (סטטוס, הקצאה)',
              'התראות על אי ביצוע משימה'
            ]} />
          </ContentCard>
          <ContentCard title="אוטומציות חוץ ארגוניות">
            <BulletList items={[
              'שליחת מידע מעוצב ללקוח',
              'מענה אוטומטי לפנייה מליד',
              'שליחת מידע למרפאות ושותפים',
              'תזכורות רכישה (מבוסס שדה חישובי ותוקף מוצר)'
            ]} />
          </ContentCard>
        </div>
      )
    },
    {
      id: 'entities',
      title: 'יישויות ושדות',
      icon: Database,
      content: (
        <div className="space-y-6">
          <ContentCard title="סוגי יישויות">
            <div className="flex flex-wrap gap-3">
              {['מודול', 'תת מודול', 'שדה טקסט', 'שדה סגור', 'בחירה מרובה', 'מספר', 'תאריך', 'זמן', 'תת תפריט'].map(item => (
                <span key={item} className="px-3 py-1 bg-slate-100 rounded-md text-sm font-medium">{item}</span>
              ))}
            </div>
          </ContentCard>
          <ContentCard title="התאמות">
            <BulletList items={[
              'שינוי מלל לשדות',
              'הוספת שדות ללא הגבלה',
              'הגדרת שדות רשות וחובה',
              'שינוי מלל למודולים ותפריטים'
            ]} />
          </ContentCard>
        </div>
      )
    },
    {
      id: 'suppliers',
      title: 'ספקים ומוצרים',
      icon: Truck,
      content: (
        <div className="space-y-6">
          <ContentCard title="ניהול ספקים, מוצרים ומלאי (Supply Chain & Inventory)">
            <p className="mb-4">מודול זה מהווה את התשתית הלוגיסטית של הארגון. הוא מאפשר ניהול הדוק של רכש מול ספקים, מעקב מלאי בזמן אמת וסנכרון מלא מול מערך הקומרס, תוך הבטחת רציפות עסקית ומניעת חוסרים.</p>
            
            <div className="space-y-6">
              <div className="border-r-4 border-brand-red pr-4">
                <h4 className="font-bold text-brand-dark mb-2">1. ניהול ישויות ספקים (Vendor Management)</h4>
                <div className="flex flex-wrap gap-3 mb-3">
                  <FieldBubble label="מספר הזמנה" type="Auto-number" />
                  <FieldBubble label="ספק" type="Lookup" />
                  <FieldBubble label="סטטוס הזמנה" />
                  <FieldBubble label="תאריך אספקה מבוקש" />
                </div>
                <BulletList items={[
                  'כרטיס ספק: פרטי התקשרות, סיווג מוצרים וזמני אספקה ממוצעים (Lead Time).',
                  'הזמנות רכש (Purchase Orders): יצירת הזמנה מובנית הכוללת מספר רץ אוטומטי.',
                  'אוטומציית רכש: שליחה אוטומטית של ההזמנה המעוצבת לספק ישירות מה-CRM.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-blue pr-4">
                <h4 className="font-bold text-brand-dark mb-2">2. קטלוג מוצרים וניהול מלאי (Product Catalog & Stock)</h4>
                <div className="flex flex-wrap gap-3 mb-3">
                  <FieldBubble label="שם הפריט" required />
                  <FieldBubble label="מק״ט (SKU)" />
                  <FieldBubble label="ברקוד" />
                  <FieldBubble label="קטגוריה" />
                  <FieldBubble label="כמות במלאי" />
                  <FieldBubble label="מלאי מינימום" />
                </div>
                <BulletList items={[
                  'זיהוי ומעקב: שימוש במק"טים (SKU) וברקודים לטובת סריקה וניהול במחסן.',
                  'מנגנון מלאי חכם: התראה אוטומטית להזמנת רכש חדשה כשהמלאי יורד מתחת לסף.',
                  'קליטה וגריעה: עדכון אוטומטי בעת קליטת הזמנה ובעת ביצוע מכירה ב-Woocommerce.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-muted pr-4">
                <h4 className="font-bold text-brand-dark mb-2">3. היבטים פיננסיים ותמחור (Pricing Logic)</h4>
                <div className="flex flex-wrap gap-3 mb-3">
                  <FieldBubble label="מחיר עלות" />
                  <FieldBubble label="מחיר מחירון" />
                  <FieldBubble label="מחיר מינימום" />
                  <FieldBubble label="סוג מס (מע״מ)" />
                </div>
                <BulletList items={[
                  'מעקב עלויות: תיעוד מחיר עלות מול מחיר מחירון לצרכן.',
                  'מדיניות הנחות: הגדרת מחיר מינימום המונע הנחות חריגות ללא אישור.',
                  'ניהול מטבעות ומסים: תמיכה בריבוי מטבעות (₪, $, €) וסיווג מע"מ.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-pink pr-4">
                <h4 className="font-bold text-brand-dark mb-2">4. סנכרון עם Woocommerce (E-commerce Integration)</h4>
                <BulletList items={[
                  'משיכת קטלוג: עדכון שוטף של פריטים, מחירים וזמינות מלאי.',
                  'משיכת הזמנות: תיעוד היסטוריית רכישות וסלי קנייה ברמת כרטיס הלקוח.'
                ]} />
              </div>
            </div>
          </ContentCard>
        </div>
      )
    },
    {
      id: 'interfaces',
      title: 'ניהול ממשקים',
      icon: Share2,
      content: (
        <div className="space-y-6">
          <ContentCard title="ניהול ממשקים (API & Ecosystem Integration)">
            <p className="mb-4">המערכת מתוכננת כפלטפורמה פתוחה (Open Architecture) המאפשרת סנכרון נתונים דו-כיווני בזמן אמת מול מערכות הליבה של הארגון. הממשקים מבוססים על אינטגרציות ישירות (Native Integrations).</p>
            
            <div className="space-y-6">
              <div className="border-r-4 border-brand-red pr-4">
                <h4 className="font-bold text-brand-dark mb-2">1. ממשק מסחר (WooCommerce Integration)</h4>
                <BulletList items={[
                  'סנכרון קטלוג ופריטים: משיכה אוטומטית של מוצרים חדשים ועדכון מחירים.',
                  'ניהול לקוחות (Sync): יצירת רשומת לקוח ב-CRM עם כל רכישה חדשה באתר.',
                  'ניהול הזמנות ופיננסים: משיכת הזמנות בזמן אמת וניתוח "ערך לקוח" (LTV).'
                ]} />
              </div>

              <div className="border-r-4 border-brand-blue pr-4">
                <h4 className="font-bold text-brand-dark mb-2">2. ממשקי שיווק ולידים (Marketing & Ad-Tech)</h4>
                <BulletList items={[
                  'ניהול מערך הלידים: קליטה ישירה של לידים מקמפיינים לתוך מסך ניהול פניות.',
                  'התממשקות לטפסים: חיבור טפסי נחיתה וטפסים אוטומטיים ישירות לשדות ה-CRM.',
                  'סגמנטציה חכמה: ייצוא רשימות לקוחות למערכות הפרסום ליצירת קהלים דומים.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-muted pr-4">
                <h4 className="font-bold text-brand-dark mb-2">3. ממשקי תקשורת (Unified Communication)</h4>
                <BulletList items={[
                  'WhatsApp Business: ממשק ישיר לשליחת הודעות אוטומטיות ותזכורות.',
                  'Google Ecosystem: סנכרון מלא מול Gmail ו-Google Calendar.'
                ]} />
              </div>
            </div>
          </ContentCard>
        </div>
      )
    },
    {
      id: 'users',
      title: 'ניהול משתמשים',
      icon: UserCog,
      content: (
        <div className="space-y-6">
          <ContentCard title="הרשאות">
            <div className="grid grid-cols-2 gap-4">
              {['ניהול מלא (אדמין)', 'ניהול חלקי', 'צפייה בלבד', 'ניהול חלקי מגוון'].map(role => (
                <div key={role} className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-center">
                  {role}
                </div>
              ))}
            </div>
          </ContentCard>
          <ContentCard title="מבנה ארגוני">
            <BulletList items={[
              'הגדרת תפקידים מותאמת',
              'הגדרת עץ ארגוני וכפיפות',
              'הצבת תמונה לכל משתמש'
            ]} />
          </ContentCard>
        </div>
      )
    },
    {
      id: 'reports',
      title: 'דוחות ונתונים',
      icon: BarChart3,
      content: (
        <div className="space-y-6">
          <ContentCard title="ניתוח נתונים">
            <BulletList items={[
              'טעינת מידע מקובץ',
              'דשבורד נתונים אינטראקטיבי בשליטת המשתמש',
              'מחולל דוחות ללא הגבלה',
              'מידע בדחיפה (דוח, וואטסאפ)'
            ]} />
          </ContentCard>
        </div>
      )
    },
    {
      id: 'security',
      title: 'אבטחה ותחזוקה',
      icon: ShieldCheck,
      content: (
        <div className="space-y-6">
          <ContentCard title="אבטחת מידע">
            <BulletList items={[
              'אחסון בסביבה שאינה משותפת (מחיצה נפרדת)',
              'איסור שימוש במידע העסקי ע״י הספק',
              'שליפת מידע קלה לפי דרישה'
            ]} />
          </ContentCard>
          <ContentCard title="תחזוקה ושירות">
            <BulletList items={[
              'אחריות תחזוקה שוטפת ע״י הספק',
              'מערך שירות לקוחות אנושי'
            ]} />
          </ContentCard>
        </div>
      )
    },
    {
      id: 'full_spec',
      title: 'אפיון מלא',
      icon: FileText,
      content: (
        <div className="space-y-6">
          <ContentCard title="אפיון מערכת מלא - וט מד סולושיינס">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="p-3 border">קטגוריה</th>
                    <th className="p-3 border">פירוט דרישות</th>
                  </tr>
                </thead>
                <tbody className="text-brand-dark">
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">הגדרת רקע ומטרות</td>
                    <td className="p-3 border">בית העסק וט מד סולושיינס הנו בית עסק ייחודי המשלב בין שירות מתקדם בעולמות הרפואה הוטרינרית לבין עולמות הקומרס. מטרת הפרוייקט הינה הקמת מערכת CRM אשר תספק פתרון בעולמות מטה המורכבים מיכולות ישירות ומיכולות אינטגרציה למערכות נוספות.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">פרטי הארגון</td>
                    <td className="p-3 border">
                      שם: וט מד סולושיינס בע״מ | ח״פ: 517128831<br/>
                      אשת קשר: עדי, 0509101975 | אתר: vetonline.co.il
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">דרישות פונקציונאליות</td>
                    <td className="p-3 border">עמידה ב-95% מהדרישות, מבוססת ענן, תמיכה מלאה בעברית, אוטומציות ללא הגבלה, יכולות עצמאיות ללא תלות ב-Zapier/Make, שירותי API ללא תוספת תשלום.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">ניהול לקוחות</td>
                    <td className="p-3 border">ניהול חברות (Account) ואנשי קשר (Contact), מבנה היררכי, סגמנטציה רב-שכבתית, מעקב SLA ותיעוד היסטוריית תקשורת מלאה.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">ניהול לידים</td>
                    <td className="p-3 border">ניהול כרטסת לידים, דירוג (Rating), מוצר מבוקש, תקציב מוערך, סיבת פסילה, ערוץ פנייה וסוג קמפיין.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">ניהול פניות</td>
                    <td className="p-3 border">ריכוז ערוצים (Omnichannel), קליטה אוטומטית מ-Meta/Google/WhatsApp, ניהול סטטוסים (חדש, בטיפול, הומר, לא רלוונטי) ואוטומציות SLA.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">ניהול טיפול וטרינרי</td>
                    <td className="p-3 border">תיק רפואי דיגיטלי (EMR), פרופיל חיית מחמד, פרוטוקול אבחנה וטיפול, ניהול מרשמים, הפניות למרפאות מפתח וחתימה דיגיטלית.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">ניהול מרפאות</td>
                    <td className="p-3 border">ניהול רשת שותפים, כרטיס מרפאת מפתח, ניהול הפניות אוטומטי (Push), מדידה ודוחות ביצועים של מרפאות שותפות.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">טפסים ודיוור</td>
                    <td className="p-3 border">ייצור ועיצוב טפסים (HTML/CSS), דיוור מבוסס וואטסאפ ודוא״ל, פעולות דיוור מדידיות ושימוש בשדות ייחודיים לדיוק הפנייה.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">אוטומציות</td>
                    <td className="p-3 border">התראות על עמידה בביצועים, שינוי שדות אוטומטי, מענה אוטומטי ללידים, תזכורות רכישה מבוססות תוקף מוצר.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">יישויות ושדות</td>
                    <td className="p-3 border">התאמה מלאה של מודולים ושדות (טקסט, סגור, בחירה מרובה, מספר, תאריך), הגדרת שדות רשות וחובה ללא הגבלה.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">ספקים ומוצרים</td>
                    <td className="p-3 border">ניהול רכש (PO), קטלוג מוצרים (SKU/ברקוד), ניהול מלאי חכם (התראות חוסר), סנכרון מלא מול WooCommerce.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">ניהול ממשקים</td>
                    <td className="p-3 border">WooCommerce (דו-כיווני), ממשקי שיווק (Google/Meta), ממשקי תקשורת (WhatsApp/Gmail/Calendar).</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">ניהול משתמשים</td>
                    <td className="p-3 border">ניהול הרשאות (אדמין, חלקי, צפייה), הגדרת מבנה ארגוני וכפיפות, פרופיל משתמש עם תמונה.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">דוחות ונתונים</td>
                    <td className="p-3 border">דשבורד אינטראקטיבי, מחולל דוחות ללא הגבלה, טעינת מידע מקבצים, מידע בדחיפה למנהלים.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold bg-brand-gray">אבטחה ותחזוקה</td>
                    <td className="p-3 border">אחסון בסביבה מופרדת, איסור שימוש במידע ע״י הספק, אחריות תחזוקה שוטפת ושירות לקוחות אנושי.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ContentCard>
        </div>
      )
    },
    {
      id: 'web_services',
      title: 'מסגרת שירותי אתר (מאקרו )',
      icon: Globe,
      content: (
        <div className="space-y-6">
          <ContentCard title="סיכום אפיון אתר ומערך קומרס - וט מד סולושיינס">
            <div className="space-y-8">
              <div className="border-r-4 border-brand-red pr-4">
                <h4 className="font-bold text-brand-dark mb-2">1. חזון מיתוגי ושפה חזותית (Brand Consistency)</h4>
                <BulletList items={[
                  'יישור קו עיצובי: יצירת זהות ויזואלית אחידה לכל אורך האתר המבוססת על פלטת צבעים מוגדרת (כחול עמוק, אדום וטרינרי ולבן נקי).',
                  'אופטימיזציית Header: הפיכת התפריט העליון לדינמי (Sticky) בעת גלילה, שיפור נראות כפתור הוואטסאפ ליצירת קשר מהיר ודיוק הלוגו.',
                  'חוויית משתמש (UX): הסרת כפילויות תוכן (כמו סעיף "אודות" מדף הבית) כדי למנוע עומס קוגניטיבי ולהתמקד בהנעה לפעולה.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-blue pr-4">
                <h4 className="font-bold text-brand-dark mb-2">2. ארכיטקטורת דף הבית (Main Hero Strategy)</h4>
                <BulletList items={[
                  'אסטרטגיית ה-Split: חלוקה ברורה של מסך הפתיחה לשני ערוצי תוכן מרכזיים: "אגף רפואי" (וטרינר אונליין) ו"אגף קומרס" (חנות מוצרים).',
                  'הנעה לפעולה (CTA): שימוש בכפתורים בולטים המכוונים למטרות העסקיות: הזמנת וטרינר, כניסה לחנות ויצירת קשר.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-muted pr-4">
                <h4 className="font-bold text-brand-dark mb-2">3. שדרוג מערך ה-E-commerce (WooCommerce Optimization)</h4>
                <BulletList items={[
                  'מסע רכישה מופשט: צמצום שלבי הצ\'ק-אאוט וייעול עגלת הקניות במטרה להוריד את אחוז נטישת העגלה.',
                  'ניהול מוצרים חכם: פילוח פריטים לפי סוגי חיות וקטגוריות רפואיות, כולל הצגת "מוצרים משלימים" (Upsell) להגדלת סל הרכישה.',
                  'קישוריות מלאה: כל רכישה באתר מסתנכרנת מיידית עם ה-CRM לעדכון מלאי, ניהול הזמנה ורישום פיננסי.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-pink pr-4">
                <h4 className="font-bold text-brand-dark mb-2">4. דיגיטציה של שירותים רפואיים</h4>
                <BulletList items={[
                  'מערכת "מרפאות מפתח": החלפת לינקים חיצוניים בחלונות אינטראקטיביים (Pop-ups) המאפשרים זימון תור ישיר מבלי לעזוב את האתר.',
                  'וטרינר אונליין: יצירת ממשק ידידותי למילוי פרטי המקרה הרפואי, העלאת קבצים ותשלום מאובטח מראש.'
                ]} />
              </div>

              <div className="border-r-4 border-brand-silver pr-4">
                <h4 className="font-bold text-brand-dark mb-2">5. תשתית טכנולוגית וקידום (SEO & Performance)</h4>
                <BulletList items={[
                  'Mobile-First: התאמה מלאה של כלל הממשקים לגלישה מהסמארטפון (שם מתבצעות רוב הפניות).',
                  'אסטרטגיית SEO: הגדרת מילות מפתח לכל עמוד, שיפור מהירות טעינה וניקוי שגיאות קוד/קישורים שבורים (404).',
                  'שירותי ענן: מעבר לאירוח מנוהל בביצועים גבוהים להבטחת זמינות האתר בכל עת.'
                ]} />
              </div>
            </div>
          </ContentCard>
        </div>
      )
    }
  ];

  const activeSection = sections.find(s => s.id === activeTab) || sections[0];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans" dir="rtl">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-l border-brand-silver/30 sticky top-0 h-screen overflow-y-auto hidden md:block">
        <div className="p-6 border-b border-brand-silver/20">
          <div className="flex items-center gap-3 text-brand-red mb-2">
            <Stethoscope className="w-8 h-8" />
            <h1 className="text-xl font-black">Vet Med CRM</h1>
          </div>
          <p className="text-xs text-brand-muted font-bold">אפיון מערכת וט מד סולושיינס</p>
          <div className="mt-4 p-3 bg-brand-gray rounded-lg border border-brand-silver/30">
            <p className="text-sm font-bold text-brand-dark">ג'ונתן בנימין</p>
            <p className="text-[10px] text-brand-muted uppercase tracking-wider">CEO | CXO CHIEF</p>
          </div>
        </div>
        <nav className="p-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={cn(
                "sidebar-item w-full",
                activeTab === section.id && "active"
              )}
            >
              <section.icon className="w-5 h-5" />
              <span className="font-bold text-sm">{section.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-50 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-crm-primary">
          <Stethoscope className="w-6 h-6" />
          <span className="font-bold">Vet Med CRM</span>
        </div>
        <select 
          value={activeTab} 
          onChange={(e) => setActiveTab(e.target.value)}
          className="bg-slate-100 border-none rounded-lg px-3 py-1 text-sm font-bold"
        >
          {sections.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
        </select>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 mt-16 md:mt-0">
        <header className="mb-12">
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-crm-primary/10 rounded-2xl text-crm-primary">
                <activeSection.icon className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-black text-slate-800">{activeSection.title}</h2>
            </div>
            <p className="text-slate-400 font-medium mr-16">פירוט דרישות ואפיון פונקציונאלי</p>
          </motion.div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeSection.content}
          </motion.div>
        </AnimatePresence>

        <footer className="mt-20 pt-8 border-t border-brand-silver/30 text-brand-muted text-sm flex justify-between items-center">
          <p>© 2024 וט מד סולושיינס בע״מ - מסמך אפיון CRM</p>
          <div className="flex gap-4">
            <span>vetonline.co.il</span>
            <span>050-9101975</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
