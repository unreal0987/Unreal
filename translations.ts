export type Language = 'en' | 'hi';

export const translations = {
  en: {
    title: 'Multi-Calc Pro',
    subtitle: 'The Ultimate Math & Finance Suite',
    langToggle: 'Switch to Hinglish',
    soundToggle: 'Sound',
    soundOn: 'On',
    soundOff: 'Off',
    history: 'History',
    noHistory: 'No history yet. Start calculating!',
    clearHistory: 'Clear History',
    copySuccess: 'Copied to clipboard!',
    
    // Tabs
    tabStandard: 'Standard',
    tabScientific: 'Scientific',
    tabEMI: 'EMI / Loan',
    tabBMI: 'BMI Health',
    tabAge: 'Age & Date',
    tabUnit: 'Unit Converter',

    // Standard Calculator
    standardDesc: 'Basic arithmetic & memory functions for daily use.',
    
    // Scientific Calculator
    scientificDesc: 'Trigonometric, logarithmic, and exponential calculations.',
    
    // EMI Calculator
    emiDesc: 'Calculate your monthly loan payments and interest breakdown.',
    loanAmount: 'Loan Amount',
    interestRate: 'Interest Rate (Annual %)',
    loanTenure: 'Tenure (Years)',
    monthlyEMI: 'Monthly EMI',
    principalAmount: 'Principal Amount',
    totalInterest: 'Total Interest Payable',
    totalPayment: 'Total Amount (Principal + Interest)',
    emiBreakdown: 'Payment Breakdown',
    principalLabel: 'Principal',
    interestLabel: 'Interest',
    emiTips: 'Tip: Making prepayments early in the tenure reduces your interest drastically!',

    // BMI Calculator
    bmiDesc: 'Calculate Body Mass Index (BMI) to check your health status.',
    weight: 'Weight (kg)',
    height: 'Height (cm)',
    calculateBMI: 'Calculate BMI',
    yourBMI: 'Your BMI is',
    bmiCategory: 'Category',
    bmiUnderweight: 'Underweight 😟 (Need nutritious food!)',
    bmiNormal: 'Normal weight Healthy 🌟 (Great job, keep it up!)',
    bmiOverweight: 'Overweight ⚠️ (Watch out, time for some exercise!)',
    bmiObese: 'Obese 🚨 (Please consult a fitness expert or doctor!)',
    healthyRange: 'Healthy BMI range: 18.5 - 24.9 kg/m²',
    weightAdvice: 'For your height, a healthy weight is between',

    // Age Calculator
    ageDesc: 'Calculate exact age, days lived, and countdown to your next birthday.',
    birthDate: 'Select Date of Birth',
    compareDate: 'Calculate Age at Date (Defaults to Today)',
    calculateAge: 'Calculate Age',
    years: 'Years',
    months: 'Months',
    days: 'Days',
    ageResult: 'Your Exact Age is',
    totalLived: 'Lived So Far:',
    totalDays: 'Total Days',
    totalHours: 'Total Hours',
    nextBirthday: 'Next Birthday Countdown:',
    birthdayIn: 'Your next birthday is in',
    monthsAnd: 'months and',
    daysLeft: 'days!',
    happyBirthday: '🎉 Happy Birthday! Today is your special day! 🎂',

    // Unit Converter
    unitDesc: 'Instant unit conversions for Length, Weight, Temperature, and Area.',
    convertCategory: 'Select Quantity',
    length: 'Length',
    weightUnit: 'Weight',
    temperature: 'Temperature',
    area: 'Area',
    fromUnit: 'From',
    toUnit: 'To',
    inputValue: 'Enter Value',
    resultValue: 'Converted Value',
    
    // Quotes / Fun facts
    funFactTitle: '💡 Did You Know?',
    funFacts: [
      'The word "hundred" comes from the Old Norse word "hundrath", which actually means 120!',
      'Zero (0) is the only number that cannot be represented in Roman numerals.',
      'An abacus is considered one of the earliest calculation devices, invented around 2700–2300 BC.',
      'The equals sign (=) was invented in 1557 by Welsh mathematician Robert Recorde, who got tired of writing "is equal to".',
      'A "googol" is the number 1 followed by 100 zeros. It inspired the name of the search engine Google!',
      'The Fibonacci sequence is found everywhere in nature, from pinecones and pineapples to the spiral of galaxies!'
    ]
  },
  hi: {
    title: 'मल्टी-कैलकुलेटर प्रो',
    subtitle: 'गणित, ब्याज, सेहत और उम्र का ऑल-इन-वन औजार',
    langToggle: 'English में बदलें',
    soundToggle: 'आवाज़',
    soundOn: 'चालू',
    soundOff: 'बंद',
    history: 'पुराना लेखा-जोखा (History)',
    noHistory: 'अभी कोई इतिहास नहीं है। हिसाब-किताब शुरू करें!',
    clearHistory: 'इतिहास साफ़ करें',
    copySuccess: 'क्लिपबोर्ड पर कॉपी हो गया!',
    
    // Tabs
    tabStandard: 'साधारण',
    tabScientific: 'वैज्ञानिक',
    tabEMI: 'लोन & ब्याज (EMI)',
    tabBMI: 'सेहत (BMI)',
    tabAge: 'उम्र & तारीख',
    tabUnit: 'इकाई कन्वर्टर',

    // Standard Calculator
    standardDesc: 'रोज़मर्रा के लिए जोड़, घटाना, गुणा, भाग और मेमोरी बटन्स।',
    
    // Scientific Calculator
    scientificDesc: 'त्रिकोणमिति (sin, cos), लॉग, घात (power) और जटिल समीकरण।',
    
    // EMI Calculator
    emiDesc: 'घर, गाड़ी या पर्सनल लोन की मासिक क़िस्त (EMI) और कुल ब्याज जानें।',
    loanAmount: 'लोन की रकम (Principal)',
    interestRate: 'ब्याज की दर (वार्षिक %)',
    loanTenure: 'लोन की अवधि (साल)',
    monthlyEMI: 'हर महीने की क़िस्त (EMI)',
    principalAmount: 'मूल रकम',
    totalInterest: 'कुल ब्याज जो देना होगा',
    totalPayment: 'कुल भुगतान (मूल रकम + ब्याज)',
    emiBreakdown: 'भुगतान का बँटवारा (Graph)',
    principalLabel: 'मूल रकम',
    interestLabel: 'ब्याज',
    emiTips: 'सलाह: लोन अवधि के शुरूआती सालों में एक्स्ट्रा पेमेंट करने से आपका ब्याज बहुत बचता है!',

    // BMI Calculator
    bmiDesc: 'बॉडी मास इंडेक्स (BMI) से जानें कि आपका वजन लंबाई के हिसाब से सही है या नहीं।',
    weight: 'वजन (किलोग्राम में)',
    height: 'लंबाई (सेंटीमीटर में)',
    calculateBMI: 'BMI नापें',
    yourBMI: 'आपका BMI है',
    bmiCategory: 'स्वास्थ्य की स्थिति',
    bmiUnderweight: 'अंडरवेट (कम वजन) 😟 (थोड़ा सेहतमंद खाना खाइए!)',
    bmiNormal: 'बिल्कुल फिट! 🌟 (शानदार, ऐसे ही बने रहें!)',
    bmiOverweight: 'ओवरवेट (ज़्यादा वजन) ⚠️ (कसरत शुरू करने का समय आ गया है!)',
    bmiObese: 'मोटापा 🚨 (डॉक्टर या ट्रेनर की सलाह ज़रूर लें!)',
    healthyRange: 'स्वस्थ BMI का दायरा: 18.5 - 24.9 kg/m²',
    weightAdvice: 'आपकी लंबाई के हिसाब से सही वजन होना चाहिए',

    // Age Calculator
    ageDesc: 'अपनी सही उम्र (साल, महीने, दिन) और अगले जन्मदिन की उल्टी गिनती देखें।',
    birthDate: 'अपनी जन्म तिथि चुनें',
    compareDate: 'इस तारीख तक उम्र निकालें (आज की तारीख डिफ़ॉल्ट है)',
    calculateAge: 'उम्र का हिसाब लगाएं',
    years: 'साल',
    months: 'महीने',
    days: 'दिन',
    ageResult: 'आपकी सही उम्र है',
    totalLived: 'अब तक की ज़िन्दगी का हिसाब:',
    totalDays: 'कुल दिन',
    totalHours: 'कुल घंटे',
    nextBirthday: 'अगले जन्मदिन की उल्टी गिनती:',
    birthdayIn: 'आपका अगला जन्मदिन आने में बचे हैं',
    monthsAnd: 'महीने और',
    daysLeft: 'दिन!',
    happyBirthday: '🎉 जन्मदिन मुबारक हो! आज आपका खास दिन है! 🎂',

    // Unit Converter
    unitDesc: 'लंबाई, वजन, तापमान और क्षेत्रफल को एक यूनिट से दूसरी यूनिट में तुरंत बदलें।',
    convertCategory: 'क्या मापना चाहते हैं?',
    length: 'लंबाई (Length)',
    weightUnit: 'वजन (Weight)',
    temperature: 'तापमान (Temperature)',
    area: 'क्षेत्रफल (Area)',
    fromUnit: 'किससे बदलें (From)',
    toUnit: 'किसमें बदलें (To)',
    inputValue: 'मात्रा भरें',
    resultValue: 'बदला हुआ मान',
    
    // Quotes / Fun facts
    funFactTitle: '💡 क्या आप जानते हैं?',
    funFacts: [
      'शून्य (0) की खोज भारत के महान गणितज्ञ आर्यभट्ट ने की थी!',
      'रोमन अंकों (Roman Numerals) में 0 (शून्य) लिखने का कोई तरीका नहीं है।',
      'गणित का बराबर का चिह्न (=) सन् 1557 में रॉबर्ट रिकॉर्ड नाम के गणितज्ञ ने बनाया था, क्योंकि वह बार-बार "is equal to" लिखकर थक गए थे।',
      'शतरंज के खेल (Chess) का आविष्कार भी प्राचीन भारत में "चतुरंग" के नाम से हुआ था।',
      'गूगल (Google) का नाम दरअसल "Googol" शब्द से प्रभावित है, जिसका अर्थ है 1 के पीछे 100 शून्य!',
      'प्रकृति में मिलने वाली अधिकांश आकृतियाँ (जैसे शंख, गैलेक्सी, फूलों की पंखुड़ियाँ) फाइबोनैचि अनुक्रम (Fibonacci Sequence) का पालन करती हैं।'
    ]
  }
};
