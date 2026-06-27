const scrollProgress = document.getElementById("scrollProgress");
const revealTargets = document.querySelectorAll(".reveal");
const storyRail = document.getElementById("storyRail");
const langButtons = document.querySelectorAll(".lang-btn");

const translations = {
  en: {
    pageTitle: "MSV Darmstadt Magazine | Digital Heritage Magazine",
    pageDescription:
      "A pre-launch online magazine and digital heritage project by MSV Darmstadt, now collecting founding submissions.",
    navAbout: "About",
    navVision: "Team",
    navCommunity: "Workflow",
    navJoin: "Join",
    headerCta: "Submit a Story",
    heroEyebrow: "Online Magazine • Digital Heritage Project",
    heroPrelaunch: "Founding issue now in development • Accepting submissions",
    heroTitleLine1: "A new magazine project by MSV Darmstadt,",
    heroTitleLine2: "built to preserve and share our heritage.",
    heroCopy:
      "We have not published any works yet. This page introduces our direction, invites early contributors, and helps shape the first issue from the ground up.",
    heroPrimaryCta: "See The Team Plan",
    heroSecondaryCta: "Contribute Your Work",
    panelMainTag: "Pre-Launch Note",
    panelMainTitle: "No issues published yet",
    panelMainCopy:
      "We are currently in the building phase: defining editorial themes, collecting first submissions, and preparing our launch edition.",
    panelMainLink: "Become a Founding Contributor",
    panelSide1Tag: "Led By Students",
    panelSide1Title: "Structured as a real publication team",
    panelSide1Copy: "Editors, designers, translators, and proofreaders working together.",
    panelSide2Tag: "Open Call",
    panelSide2Title: "Aiming for 10 to 20 pieces",
    panelSide2Copy: "Short stories, poetry, and articles for the inaugural issue.",
    aboutEyebrow: "About The Project",
    aboutTitle: "From student association to global storytelling platform",
    storyRailLabel: "Project overview cards",
    aboutCard1Meta: "Who We Are",
    aboutCard1Title: "Muslim Student Association Initiative",
    aboutCard1Copy:
      "This magazine begins as an MSA-led project and will grow through partnerships with community members, artists, and researchers.",
    aboutCard2Meta: "Why Now",
    aboutCard2Title: "Heritage is being lost in real time",
    aboutCard2Copy:
      "Oral traditions, local crafts, and intergenerational memory deserve a dedicated digital home before they disappear.",
    aboutCard3Meta: "Our Approach",
    aboutCard3Title: "Magazine + Archive + Community",
    aboutCard3Copy:
      "We are blending strong editorial storytelling with respectful archiving and community collaboration.",
    aboutCard4Meta: "Current Phase",
    aboutCard4Title: "Planning and contributor onboarding",
    aboutCard4Copy:
      "We are currently collecting ideas, materials, and contributors for the launch cycle.",
    visionEyebrow: "Digital Magazine Team Structure",
    visionTitle: "Branches, roles, and responsibilities",
    teamCoreTag: "Core Leadership & Management",
    teamCoreTitle: "Project Lead / Managing Editor",
    teamCoreItem1: "Owns overall strategy and timeline.",
    teamCoreItem2: "Meets board members and active group.",
    teamCoreItem3: "Gives final publication approval.",
    teamEditorialTag: "Editorial & Content Branch",
    teamEditorialTitle: "Writers, editors, translators, proofreaders",
    teamEditorialItem1: "Editors refine submissions with writers.",
    teamEditorialItem2: "10 to 20 contributors submit one piece each.",
    teamEditorialItem3: "German-English translation support is built in.",
    teamEditorialItem4: "Arabic writing can be included through translation.",
    teamEditorialItem5: "Proofreaders and professors perform final checks.",
    teamDesignTag: "Creative & Design Branch",
    teamDesignTitle: "Cover direction and interior design",
    teamDesignItem1: "Art Director defines Minimalist, Vintage, or Bold style.",
    teamDesignItem2: "Cover Designer creates high-impact launch cover.",
    teamDesignItem3: "Interior Designers format pieces for flipbook reading.",
    teamDesignItem4: "Visual Coordinator manages photography and stock sourcing.",
    teamDistTag: "Distribution & Digital Specialist",
    teamDistTitle: "Publishing and outreach delivery",
    teamDistItem1: "Digital Publisher prepares and uploads the flipbook.",
    teamDistItem2: "Marketing Coordinator runs launch promotion.",
    teamDistItem3: "Performance tracking uses analytics and social channels.",
    communityEyebrow: "Distribution Platforms & Tools",
    communityTitle: "How the issue will be published and promoted",
    distRole1Title: "Digital Publisher",
    distRole1RespLabel: "Primary responsibility",
    distRole1Resp: "Upload and configure the PDF into a flipbook format.",
    distToolsLabel: "Platform tools",
    distRole1Tools: "Heyzine, Flipsnack, or Amazon KDP",
    distRole2Title: "Marketing Coordinator",
    distRole2RespLabel: "Primary responsibility",
    distRole2Resp: "Organize announcements and promote links via Engage and social media.",
    distRole2Tools: "Google Analytics and social media channels",
    workflowEyebrow: "Operational Workflow",
    workflowTitle: "Five stages from submissions to launch",
    workflowStep1Label: "Step 01",
    workflowStep1Title: "Submission Phase",
    workflowStep1Copy: "Send work submission forms and hire the design team.",
    workflowStep2Label: "Step 02",
    workflowStep2Title: "Curation Phase",
    workflowStep2Copy: "Editors and proofreaders select the best 10 to 20 works.",
    workflowStep3Label: "Step 03",
    workflowStep3Title: "Design Phase",
    workflowStep3Copy: "Designers style assigned works based on the chosen aesthetic.",
    workflowStep4Label: "Step 04",
    workflowStep4Title: "Final Review",
    workflowStep4Copy: "Project Lead and advisor review the fully formatted magazine.",
    workflowStep5Label: "Step 05",
    workflowStep5Title: "Digital Launch",
    workflowStep5Copy: "Host on a flipbook platform and share with the community.",
    joinEyebrow: "Founding Contributors",
    joinTitle: "Submit work for our first publishing cycle.",
    joinCopy:
      "We are currently accepting applications through secure Google Forms. Choose the path that matches your interest and submit in a few minutes.",
    joinContribTag: "Contributor Intake",
    joinContribHeading: "Contribute A Work",
    joinContribCopy:
      "Submit essays, stories, poetry, visual narratives, and archival concepts for editorial review.",
    joinContribItem1: "Estimated completion time: 3 to 5 minutes.",
    joinContribItem2: "You can edit your response after submission.",
    joinContribCta: "Open Contributor Form",
    formNameLabel: "Full name",
    formNamePlaceholder: "Full name",
    formEmailLabel: "Email address",
    formEmailPlaceholder: "Your email",
    formTypeLabel: "Type of work",
    formTypePlaceholder: "Select work type",
    formTypeEssay: "Essay / Feature",
    formTypePhoto: "Story",
    formTypeAudio: "Poetry",
    formTypeCraft: "Travelogue",
    formTypeArchive: "Other Works",
    formPitchLabel: "Short pitch",
    formPitchPlaceholder: "Share a short description of your work",
    formSubmit: "Submit Interest",
    joinTeamHeading: "Join Our Team",
    joinTeamCopy: "Apply to join as a translator, proofreader, editor, or designer.",
    joinTeamTag: "Team Applications",
    joinTeamItem1: "Roles are reviewed weekly by the coordination team.",
    joinTeamItem2: "We will contact selected applicants by email.",
    joinTeamCta: "Open Team Application",
    contactTag: "Direct Contact",
    contactTitle: "Send a quick inquiry",
    contactCopy:
      "For general questions or partnership requests, send us a short message and it will be delivered directly to our inbox.",
    contactEmailLabel: "Email address",
    contactEmailPlaceholder: "Your email",
    contactSubjectLabel: "Subject title",
    contactSubjectPlaceholder: "Subject title",
    contactMessageLabel: "Message",
    contactMessagePlaceholder: "Write your message",
    contactSubmit: "Send Message",
    contactSubmitting: "Sending your message...",
    contactSuccess: "Thank you. Your message has been sent.",
    contactError: "Submission failed. Please try again in a moment.",
    teamFormNameLabel: "Full name",
    teamFormNamePlaceholder: "Full name",
    teamFormEmailLabel: "Email address",
    teamFormEmailPlaceholder: "Your email",
    teamFormRoleLabel: "Role",
    teamFormRolePlaceholder: "Select role",
    teamRoleTranslator: "Translator",
    teamRoleProofreader: "Proofreader",
    teamRoleEditor: "Editor",
    teamRoleDesigner: "Design Role",
    teamFormNoteLabel: "Short note",
    teamFormNotePlaceholder: "Tell us about your background and availability",
    teamFormSubmit: "Join Team",
    footerLine1: "MSV Darmstadt Magazine © 2026",
    footerLine2: "Built for memory, made for the future.",
  },
  de: {
    pageTitle: "MSV Darmstadt Magazine | Magazin fur digitales Kulturerbe",
    pageDescription:
      "Ein Online-Magazin im Aufbau und Projekt fur digitales Kulturerbe von MSV Darmstadt, das jetzt erste Beitrage sammelt.",
    navAbout: "Uber uns",
    navVision: "Team",
    navCommunity: "Ablauf",
    navJoin: "Mitmachen",
    headerCta: "Beitrag einreichen",
    heroEyebrow: "Online-Magazin • Projekt fur digitales Kulturerbe",
    heroPrelaunch: "Erstausgabe in Vorbereitung • Einreichungen geoffnet",
    heroTitleLine1: "Ein neues Magazinprojekt der MSV Darmstadt,",
    heroTitleLine2: "um unser Kulturerbe zu bewahren und zu teilen.",
    heroCopy:
      "Aktuell gibt es noch keine veroffentlichten Inhalte. Diese Seite zeigt unsere Richtung, ladet fruhe Mitwirkende ein und gestaltet die erste Ausgabe mit.",
    heroPrimaryCta: "Teamplan ansehen",
    heroSecondaryCta: "Arbeit beisteuern",
    panelMainTag: "Hinweis zum Pre-Launch",
    panelMainTitle: "Noch keine Ausgaben veroffentlicht",
    panelMainCopy:
      "Wir befinden uns in der Aufbauphase: redaktionelle Themen definieren, erste Einreichungen sammeln und die Erstausgabe vorbereiten.",
    panelMainLink: "Grundungsbeitrag leisten",
    panelSide1Tag: "Von Studierenden gefuhrt",
    panelSide1Title: "Als echtes Redaktionsteam aufgebaut",
    panelSide1Copy: "Editoren, Designer, Ubersetzer und Korrekturleser arbeiten zusammen.",
    panelSide2Tag: "Open Call",
    panelSide2Title: "Ziel sind 10 bis 20 Beitrage",
    panelSide2Copy: "Kurzgeschichten, Poesie und Artikel fur die Erstausgabe.",
    aboutEyebrow: "Uber das Projekt",
    aboutTitle: "Von der Hochschulinitiative zur globalen Storytelling-Plattform",
    storyRailLabel: "Projektubersichtskarten",
    aboutCard1Meta: "Wer wir sind",
    aboutCard1Title: "Initiative der Muslim Student Association",
    aboutCard1Copy:
      "Das Magazin startet als MSA-Projekt und wachst durch Partnerschaften mit Community-Mitgliedern, Kunstschaffenden und Forschenden.",
    aboutCard2Meta: "Warum jetzt",
    aboutCard2Title: "Kulturerbe geht in Echtzeit verloren",
    aboutCard2Copy:
      "Mundliche Traditionen, lokales Handwerk und generationenubergreifende Erinnerung brauchen ein digitales Zuhause.",
    aboutCard3Meta: "Unser Ansatz",
    aboutCard3Title: "Magazin + Archiv + Community",
    aboutCard3Copy:
      "Wir verbinden starke redaktionelle Erzahlungen mit respektvoller Archivarbeit und Zusammenarbeit.",
    aboutCard4Meta: "Aktuelle Phase",
    aboutCard4Title: "Planung und Aufnahme von Mitwirkenden",
    aboutCard4Copy:
      "Derzeit sammeln wir Ideen, Materialien und Mitwirkende fur den Launch-Zyklus.",
    visionEyebrow: "Teamstruktur des digitalen Magazins",
    visionTitle: "Bereiche, Rollen und Verantwortung",
    teamCoreTag: "Kernleitung & Management",
    teamCoreTitle: "Projektleitung / Managing Editor",
    teamCoreItem1: "Verantwortet Gesamtstrategie und Zeitplan.",
    teamCoreItem2: "Trifft Board-Mitglieder und aktive Gruppe.",
    teamCoreItem3: "Gibt finale Freigabe der Ausgabe.",
    teamEditorialTag: "Redaktion & Content",
    teamEditorialTitle: "Autorinnen, Editoren, Ubersetzer, Korrekturleser",
    teamEditorialItem1: "Editoren uberarbeiten Einsendungen mit den Autorinnen.",
    teamEditorialItem2: "10 bis 20 Beitragende liefern jeweils ein Werk.",
    teamEditorialItem3: "Deutsch-Englisch-Ubersetzung ist fest eingeplant.",
    teamEditorialItem4: "Arabische Texte konnen per Ubersetzung aufgenommen werden.",
    teamEditorialItem5: "Korrekturleser und Professoren machen den Endcheck.",
    teamDesignTag: "Kreativ- & Designbereich",
    teamDesignTitle: "Coverrichtung und Innengestaltung",
    teamDesignItem1: "Art Director setzt Minimalist, Vintage oder Bold als Stil.",
    teamDesignItem2: "Cover Designer erstellt ein starkes Launch-Cover.",
    teamDesignItem3: "Interior Designers formatieren Beitrage fur Flipbook-Lesen.",
    teamDesignItem4: "Visual Coordinator steuert Fotografie und Stockquellen.",
    teamDistTag: "Distribution & Digital Specialist",
    teamDistTitle: "Publishing und Reichweite",
    teamDistItem1: "Digital Publisher bereitet das Flipbook vor und ladt hoch.",
    teamDistItem2: "Marketing Coordinator plant die Launch-Kommunikation.",
    teamDistItem3: "Erfolgsmessung erfolgt uber Analytics und Social Channels.",
    communityEyebrow: "Distributionsplattformen & Tools",
    communityTitle: "Wie die Ausgabe veroffentlicht und beworben wird",
    distRole1Title: "Digital Publisher",
    distRole1RespLabel: "Hauptaufgabe",
    distRole1Resp: "PDF in ein Flipbook-Format hochladen und konfigurieren.",
    distToolsLabel: "Plattform-Tools",
    distRole1Tools: "Heyzine, Flipsnack oder Amazon KDP",
    distRole2Title: "Marketing Coordinator",
    distRole2RespLabel: "Hauptaufgabe",
    distRole2Resp: "Ankundigung organisieren und Link uber Engage sowie Social Media verbreiten.",
    distRole2Tools: "Google Analytics und Social-Media-Kanale",
    workflowEyebrow: "Operativer Ablauf",
    workflowTitle: "Funf Phasen von Einsendung bis Launch",
    workflowStep1Label: "Schritt 01",
    workflowStep1Title: "Einsendephase",
    workflowStep1Copy: "Formulare fur Einreichungen versenden und Designteam aufbauen.",
    workflowStep2Label: "Schritt 02",
    workflowStep2Title: "Kurationsphase",
    workflowStep2Copy: "Editoren und Korrekturleser wahlen die besten 10 bis 20 Werke aus.",
    workflowStep3Label: "Schritt 03",
    workflowStep3Title: "Designphase",
    workflowStep3Copy: "Designer gestalten Beitrage nach der gewahlten Asthetik.",
    workflowStep4Label: "Schritt 04",
    workflowStep4Title: "Finale Prufung",
    workflowStep4Copy: "Projektleitung und Advisor prufen das fertig formatierte Magazin.",
    workflowStep5Label: "Schritt 05",
    workflowStep5Title: "Digitaler Launch",
    workflowStep5Copy: "Auf Flipbook-Plattform hosten und mit der Community teilen.",
    joinEyebrow: "Grundungsmitwirkende",
    joinTitle: "Reiche Arbeiten fur unsere erste Publikationsrunde ein.",
    joinCopy:
      "Aktuell nehmen wir Bewerbungen uber sichere Google Forms an. Wahle den passenden Weg und sende deine Angaben in wenigen Minuten.",
    joinContribTag: "Beitragsformular",
    joinContribHeading: "Beitrag einreichen",
    joinContribCopy:
      "Reiche Essays, Geschichten, Poesie, visuelle Erzahlungen und Archivideen zur redaktionellen Prufung ein.",
    joinContribItem1: "Geschaetzte Bearbeitungszeit: 3 bis 5 Minuten.",
    joinContribItem2: "Du kannst deine Antwort nach dem Senden bearbeiten.",
    joinContribCta: "Beitragsformular offnen",
    formNameLabel: "Vollstandiger Name",
    formNamePlaceholder: "Vollstandiger Name",
    formEmailLabel: "E-Mail-Adresse",
    formEmailPlaceholder: "Deine E-Mail",
    formTypeLabel: "Art des Beitrags",
    formTypePlaceholder: "Beitragsart auswahlen",
    formTypeEssay: "Essay / Feature",
    formTypePhoto: "Geschichte",
    formTypeAudio: "Poesie",
    formTypeCraft: "Reisebericht",
    formTypeArchive: "Weitere Werke",
    formPitchLabel: "Kurzer Pitch",
    formPitchPlaceholder: "Beschreibe deine Arbeit in wenigen Satzen",
    formSubmit: "Interesse einreichen",
    joinTeamHeading: "Werde Teil des Teams",
    joinTeamCopy: "Bewirb dich als Ubersetzer, Korrekturleser, Editor oder fur eine Designrolle.",
    joinTeamTag: "Team-Bewerbung",
    joinTeamItem1: "Rollen werden wochentlich vom Koordinationsteam gepruft.",
    joinTeamItem2: "Ausgewahlte Bewerber werden per E-Mail kontaktiert.",
    joinTeamCta: "Team-Bewerbung offnen",
    contactTag: "Direkter Kontakt",
    contactTitle: "Schnelle Anfrage senden",
    contactCopy:
      "Fur allgemeine Fragen oder Partnerschaftsanfragen sende uns eine kurze Nachricht, die direkt in unserem Postfach ankommt.",
    contactEmailLabel: "E-Mail-Adresse",
    contactEmailPlaceholder: "Deine E-Mail",
    contactSubjectLabel: "Betreff",
    contactSubjectPlaceholder: "Betreff",
    contactMessageLabel: "Nachricht",
    contactMessagePlaceholder: "Schreibe deine Nachricht",
    contactSubmit: "Nachricht senden",
    contactSubmitting: "Deine Nachricht wird gesendet...",
    contactSuccess: "Danke. Deine Nachricht wurde gesendet.",
    contactError: "Senden fehlgeschlagen. Bitte versuche es gleich erneut.",
    teamFormNameLabel: "Vollstandiger Name",
    teamFormNamePlaceholder: "Vollstandiger Name",
    teamFormEmailLabel: "E-Mail-Adresse",
    teamFormEmailPlaceholder: "Deine E-Mail",
    teamFormRoleLabel: "Rolle",
    teamFormRolePlaceholder: "Rolle auswahlen",
    teamRoleTranslator: "Ubersetzer",
    teamRoleProofreader: "Korrekturleser",
    teamRoleEditor: "Editor",
    teamRoleDesigner: "Design-Rolle",
    teamFormNoteLabel: "Kurze Notiz",
    teamFormNotePlaceholder: "Erzahle uns etwas uber deinen Hintergrund und deine Verfugbarkeit",
    teamFormSubmit: "Team beitreten",
    footerLine1: "MSV Darmstadt Magazine © 2026",
    footerLine2: "Fur Erinnerung gebaut, fur die Zukunft gemacht.",
  },
};

function applyLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";
  const dictionary = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.title = dictionary.pageTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", dictionary.pageDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (key && dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria-label");
    if (key && dictionary[key]) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  langButtons.forEach((button) => {
    const active = button.getAttribute("data-lang") === selectedLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  try {
    localStorage.setItem("preferredLanguage", selectedLanguage);
  } catch (_error) {
    // Ignore storage failures and keep language in current session.
  }
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
  }
);

revealTargets.forEach((el, index) => {
  el.style.setProperty("--reveal-delay", `${Math.min(index * 90, 630)}ms`);
  revealObserver.observe(el);
});
window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("load", updateScrollProgress);

if (storyRail) {
  storyRail.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      event.preventDefault();
      storyRail.scrollLeft += event.deltaY;
    },
    { passive: false }
  );
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.getAttribute("data-lang") || "en";
    applyLanguage(language);
  });
});

let initialLanguage = "en";

try {
  const preferredLanguage = localStorage.getItem("preferredLanguage");
  if (preferredLanguage && translations[preferredLanguage]) {
    initialLanguage = preferredLanguage;
  }
} catch (_error) {
  // Keep default language when storage is not available.
}

applyLanguage(initialLanguage);

const contactForm = document.querySelector(".contact-form[data-web3forms]");
const contactStatus = document.getElementById("contactStatus");

if (contactForm && contactStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const lang = translations[document.documentElement.lang]
      ? document.documentElement.lang
      : "en";
    const dictionary = translations[lang];
    const formData = new FormData(contactForm);

    contactForm.classList.add("is-submitting");
    contactStatus.classList.remove("is-success", "is-error");
    contactStatus.textContent = dictionary.contactSubmitting;

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        contactStatus.classList.add("is-success");
        contactStatus.textContent = dictionary.contactSuccess;
        contactForm.reset();
      } else {
        contactStatus.classList.add("is-error");
        contactStatus.textContent = result.message || dictionary.contactError;
      }
    } catch (_error) {
      contactStatus.classList.add("is-error");
      contactStatus.textContent = dictionary.contactError;
    } finally {
      contactForm.classList.remove("is-submitting");
    }
  });
}
