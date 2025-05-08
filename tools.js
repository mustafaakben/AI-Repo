// Tools data array
const toolsData = [

    // Campus AI Watch
    // Finds and ranks AI news from last week that impacts higher education.
    // https://chatgpt.com/g/g-67eadbc94818819198e068cb1d20e65a-campus-ai-watch
    // News Search
        {
            id: 1,
            name: "Campus AI Watch",
            description: "Finds and ranks AI news from last week that impacts higher education.",
            icon: "images\\Campus AI Watch.png",
            link: "https://chatgpt.com/g/g-67eadbc94818819198e068cb1d20e65a-campus-ai-watch",
            category: "Productivity",
            colorClass: "color-indigo"
        },
    
    // Prompt Polisher
    // Transforms weak prompts into clear, powerful ones using friendly guidance and smart strategies.
    // https://chatgpt.com/g/g-67eee82b49d8819183394d4048fb4ec3-prompt-polisher
    // AI Literacy
        {
            id: 2,
            name: "Prompt Polisher",
            description: "Transforms weak prompts into clear, powerful ones using friendly guidance and smart strategies.",
            icon: "images\\Prompt Polisher.png", 
            link: "https://chatgpt.com/g/g-67eee82b49d8819183394d4048fb4ec3-prompt-polisher",
            category: "AI Literacy",
            colorClass: "color-blue"
        },
    
    // Exercise Generator
    // Generates creative, experiential-learning classroom activities.
    // https://chatgpt.com/g/g-67a38eaf8a9c8191b4294a8146da06c7-exercise-generator
    // Teaching
        {
            id: 15,
            name: "Exercise Generator",
            description: "Generates creative, experiential-learning classroom activities.",
            icon: "images\\Exercise Generator.png",
            link: "https://chatgpt.com/g/g-67a38eaf8a9c8191b4294a8146da06c7-exercise-generator",
            category: "Teaching Preparation | Classroom Management",
            colorClass: "color-cyan"
        },
    
    
    // Quiz Generator
    // Generates quiz questions based on attachments, focusing on higher-order thinking.
    // https://chatgpt.com/g/g-67a395e5c4188191b191d95350c15a0d-quiz-generator
    // Teaching
        {
            id: 16,
            name: "Quiz Generator",
            description: "Generates quiz questions based on attachments, focusing on higher-order thinking.",
            icon: "images\\Quiz Generator.png",
            link: "https://chatgpt.com/g/g-67a395e5c4188191b191d95350c15a0d-quiz-generator",
            category: "Teaching Preparation | Classroom Management",
            colorClass: "color-cyan"
        },
    
    // Campus Event Organizer
    // Helps plan Elon University events by checking calendars and guiding users through event details.
    // https://chatgpt.com/g/g-67c03c728a64819192ec7e4472d2167d-campus-event-organizer
    // Event Planning
        {
            id: 17,
            name: "Campus Event Organizer",
            description: "Helps plan Elon University events by checking calendars and guiding users through event details.",
            icon: "images\\Campus Event Organizer.png",
            link: "https://chatgpt.com/g/g-67c03c728a64819192ec7e4472d2167d-campus-event-organizer",
            category: "Productivity",
            colorClass: "color-cyan"
        },
    
    
    // Calendar Event Generator
    // Generate calendar events for Outlook to import. Organize and streamline your calendar creation.
    // https://chatgpt.com/g/g-67e5ba1aa8088191b780e11c19f1a58b-calendar-event-generator
    // Productivity
        {
            id: 18,
            name: "Calendar Event Generator",
            description: "Generate calendar events for Outlook to import. Organize and streamline your calendar creation.",
            icon: "images\\Calendar Event Generator.png",
            link: "https://chatgpt.com/g/g-67e5ba1aa8088191b780e11c19f1a58b-calendar-event-generator",
            category: "Productivity",
            colorClass: "color-cyan"
        },
    
    // Market Mood Reader
    // Analyzes stock sentiment from major financial news outlets.
    // https://chatgpt.com/g/g-67e5bb0252408191900a96033a91ffdc-market-mood-reader
    {
        id: 19,
        name: "Market Mood Reader",
        description: "Analyzes stock sentiment from major financial news outlets.",
        icon: "images\\Market Mood Reader.png",
        link: "https://chatgpt.com/g/g-67e5bb0252408191900a96033a91ffdc-market-mood-reader",
        category: "Teaching",
        colorClass: "color-cyan"
    },
    
    // Market Pulse
    // Performs technical analysis on stock charts and market data.
    // https://chatgpt.com/g/g-67efc87fdb148191beb46bbdd1a27628-market-pulse
    // Finance
    {
        id: 20,
        name: "Market Pulse",
        description: "Performs technical analysis on stock charts and market data.",
        icon: "images\\Market Pulse.png",
        link: "https://chatgpt.com/g/g-67efc87fdb148191beb46bbdd1a27628-market-pulse",
        category: "Teaching",
        colorClass: "color-cyan"
    },
    
    // Elon Networking Facilitator
    // Connects Elon people with other Elon University members using shared interests
    // https://chatgpt.com/g/g-67efcaf604a08191aac96933ef6aa98d-elon-networking-facilitator
    // Networking
    {
        id: 21,
        name: "Elon Networking Facilitator",
        description: "Connects Elon people with other Elon University members using shared interests",
        icon: "images\\Elon Networking Facilitator.png",
        link: "https://chatgpt.com/g/g-67efcaf604a08191aac96933ef6aa98d-elon-networking-facilitator",
        category: "Productivity",
        colorClass: "color-cyan"
    },
    
    // Elon Branding Tool
    // Analyzes and adjusts images to align with Elon University's branding guidelines.
    // https://chatgpt.com/g/g-67f5a3eb477c8191a96e8a409bbf4633-elon-branding-tool
    // Productivity
    {
        id: 22,
        name: "Elon Branding Tool",
        description: "Analyzes and adjusts images to align with Elon University's branding guidelines.",
        icon: "images\\Elon Branding Tool.png",
        link: "https://chatgpt.com/g/g-67f5a3eb477c8191a96e8a409bbf4633-elon-branding-tool",
        category: "Productivity",
        colorClass: "color-cyan"
    },
    
    // Career Coach at Elon
    // Helps Elon University students explore career paths and internships.
    // https://chatgpt.com/g/g-67f5adb53e5881919d558fe88d5108d5-career-coach-at-elon
    // Career
    {
        id: 23,
        name: "Career Coach at Elon",
        description: "Helps Elon University students explore career paths and internships.",
        icon: "images\\Career Coach at Elon.png",
        link: "https://chatgpt.com/g/g-67f5adb53e5881919d558fe88d5108d5-career-coach-at-elon",
        category: "Student Success",
        colorClass: "color-cyan"
    },
    
    // Elon Events Finder
    // Finds today's events using only Elon University's official website
    // https://chatgpt.com/g/g-67f855f468b081919db51f75ba5089ae-elon-events-finder
    // Campus Life
    {
        id: 24,
        name: "Elon Events Finder",
        description: "Finds today's events using only Elon University's official website",
        icon: "images\\Elon Events Finder.png",
        link: "https://chatgpt.com/g/g-67f855f468b081919db51f75ba5089ae-elon-events-finder",
        category: "Productivity",
        colorClass: "color-cyan"
    },
    
    // Voice of Virtue
    // Delivers inspiring sayings and quotes based on any theme, using real-time search when needed.
    // https://chatgpt.com/g/g-680216a5148c8191a6edb1f292d79686-voice-of-virtue
    // Productivity
    {
        id: 25,
        name: "Voice of Virtue",
        description: "Delivers inspiring sayings and quotes based on any theme, using real-time search when needed.",
        icon: "images\\Voice of Virtue.png",
        link: "https://chatgpt.com/g/g-680216a5148c8191a6edb1f292d79686-voice-of-virtue",
        category: "Productivity",
        colorClass: "color-yellow"
    },
    
    // Ethical Discourse Companion
    // Helps users navigate ethical discussions and make informed decisions.
    // https://chatgpt.com/g/g-68150be2f6d48191991f67338764d15d-ethical-discourse-companion
    // Teaching
    {
        id: 26,
        name: "Ethical Discourse Companion",
        description: "Helps users navigate ethical discussions and make informed decisions.",
        icon: "images\\Ethical Discourse Companion.png",
        link: "https://chatgpt.com/g/g-68150be2f6d48191991f67338764d15d-ethical-discourse-companion",
        category: "Teaching",
        colorClass: "color-yellow"
    },


    // AI Teaching Design Coach
    // AI course design coach with search, canvas, and visuals.
    // https://chatgpt.com/g/g-68150d09c2248191afbc96713aaee300-ai-teaching-design-coach
    // Teaching
    {
        id: 27,
        name: "AI Teaching Design Coach",
        description: "AI course design coach with search, canvas, and visuals.",
        icon: "images\\AI Teaching Design Coach.png",
        link: "https://chatgpt.com/g/g-68150d09c2248191afbc96713aaee300-ai-teaching-design-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // Rhythm Movement Guide
    // An AI dance tutor using motion capture to teach West African dance with visual analysis tools.
    // https://chatgpt.com/g/g-68150e4665ac8191923ae0fcfd9fd9e7-rhythm-movement-guide
    // Teaching
    {
        id: 28,
        name: "Rhythm Movement Guide",
        description: "An AI dance tutor using motion capture to teach West African dance with visual analysis tools.",
        icon: "images\\Rhythm Movement Guide.png",
        link: "https://chatgpt.com/g/g-68150e4665ac8191923ae0fcfd9fd9e7-rhythm-movement-guide",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // Media Skill Coach
    // Teaches technical media analytics skills through personalized, adaptive, and interactive instruction.
    // https://chatgpt.com/g/g-681938b580b081919d493e89dd35f48f-media-skill-coach
    // Teaching
    {
        id: 29,
        name: "Media Skill Coach",
        description: "Teaches technical media analytics skills through personalized, adaptive, and interactive instruction.",
        icon: "images\\Media Skill Coach.png",
        link: "https://chatgpt.com/g/g-681938b580b081919d493e89dd35f48f-media-skill-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // Sentiment-Driven Valuation Assistant
    // Helps students integrate financial sentiment analysis into equity valuation models.
    // https://chatgpt.com/g/g-6819475c6c648191ba02242df251cf65-sentiment-driven-valuation-assistant
    // Teaching
    {
        id: 30,
        name: "Sentiment-Driven Valuation Assistant",
        description: "Helps students integrate financial sentiment analysis into equity valuation models.",
        icon: "images\\Sentiment-Driven Valuation Assistant.png",
        link: "https://chatgpt.com/g/g-6819475c6c648191ba02242df251cf65-sentiment-driven-valuation-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    
    // Comparative Religion Tutor
    // AI assistant for analyzing world religions, debates, and ethical reflections in education.
    // https://chatgpt.com/g/g-6819d9e5a97c81919df7b63390ddefca-comparative-religion-tutor
    // Teaching
    {
        id: 31,
        name: "Comparative Religion Tutor",
        description: "AI assistant for analyzing world religions, debates, and ethical reflections in education.",
        icon: "images\\Comparative Religion Tutor.png", 
        link: "https://chatgpt.com/g/g-6819d9e5a97c81919df7b63390ddefca-comparative-religion-tutor",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    // AI Research Assistant for STC
    // Research assistant and AI tutor for STC 3620: Strategic Communications Research Methods
    // https://chatgpt.com/g/g-681a51210d048191b8a161225e96d627-ai-research-assistant-for-stc
    // Teaching
    {
        id: 32,
        name: "AI Research Assistant for STC",
        description: "Research assistant and AI tutor for STC 3620: Strategic Communications Research Methods",
        icon: "images\\AI Research Assistant for STC.png",  
        link: "https://chatgpt.com/g/g-681a51210d048191b8a161225e96d627-ai-research-assistant-for-stc",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    // West African Dance Mentor
    // AI educator for visualizing and analyzing West African dance techniques.
    // https://chatgpt.com/g/g-681a52f531488191a5eb6814eb18d5aa-west-african-dance-mentor
    // Teaching
    {
        id: 33,
        name: "West African Dance Mentor",
        description: "AI educator for visualizing and analyzing West African dance techniques.",
        icon: "images\\West African Dance Mentor.png",
        link: "https://chatgpt.com/g/g-681a52f531488191a5eb6814eb18d5aa-west-african-dance-mentor",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // AI Sales Role Play Coach
    // AI coach for educators using role play and feedback to teach professional selling and communication.
    // https://chatgpt.com/g/g-681a52f61e48819196b7964476df9d13-ai-sales-role-play-coach
    // Teaching
    {
        id: 34,
        name: "AI Sales Role Play Coach",
        description: "AI coach for educators using role play and feedback to teach professional selling and communication.",
        icon: "images\\AI Sales Role Play Coach.png",   
        link: "https://chatgpt.com/g/g-681a52f61e48819196b7964476df9d13-ai-sales-role-play-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    // Editorial Writing Tutor
    // AI tutor for teaching editorial writing and journalism.
    // https://chatgpt.com/g/g-681a54cfdef08191af63997ab1912102-editorial-writing-tutor
    // Teaching
    {
        id: 35,
        name: "Editorial Writing Tutor",
        description: "AI tutor for teaching editorial writing and journalism.",
        icon: "images\\Editorial Writing Tutor.png",
        link: "https://chatgpt.com/g/g-681a54cfdef08191af63997ab1912102-editorial-writing-tutor",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    // AI Research Tool Evaluator
    // https://chatgpt.com/g/g-681a4f44f1fc819186de221c60b1e5f4-ai-research-tool-evaluator
    // A GPT that helps students compare AI tools for literature research in a senior capstone course.
    // Teaching
    {
        id: 36,
        name: "AI Research Tool Evaluator",
        description: "A GPT that helps students compare AI tools for literature research in a senior capstone course.",
        icon: "images\\AI Research Tool Evaluator.png",
        link: "https://chatgpt.com/g/g-681a4f44f1fc819186de221c60b1e5f4-ai-research-tool-evaluator",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // Reflective Learning Partner
    // Helps students reflect on learning goals using AI to promote growth, motivation, and ownership.
    // https://chatgpt.com/g/g-681a555f21548191b53a282bcca361ba-reflective-learning-partner
    // Teaching
    {
        id: 37,
        name: "Reflective Learning Partner",
        description: "Helps students reflect on learning goals using AI to promote growth, motivation, and ownership.",
        icon: "images\\Reflective Learning Partner.png",    
        link: "https://chatgpt.com/g/g-681a555f21548191b53a282bcca361ba-reflective-learning-partner",
        category: "Teaching",
        colorClass: "color-yellow"
    },  


    // AI Assessment Design Coach
    // Helps students design and critique AI-generated assessments for teaching and learning.
    // https://chatgpt.com/g/g-681a560c79b08191b93726028a601596-ai-assessment-design-coach
    // Teaching
    {
        id: 38,
        name: "AI Assessment Design Coach",
        description: "Helps students design and critique AI-generated assessments for teaching and learning.",
        icon: "images\\AI Assessment Design Coach.png",
        link: "https://chatgpt.com/g/g-681a560c79b08191b93726028a601596-ai-assessment-design-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    
    // Inferno Visualization Assistant
    // Helps students visualize and understand the structure of Dante's Inferno.    
    // https://chatgpt.com/g/g-681a5127a7648191b72825b2b3a9212b-inferno-visualization-assistant
    // Teaching
    {
        id: 39,
        name: "Inferno Visualization Assistant",
        description: "Helps students visualize and understand the structure of Dante's Inferno.",
        icon: "images\\Inferno Visualization Assistant.png",
        link: "https://chatgpt.com/g/g-681a5127a7648191b72825b2b3a9212b-inferno-visualization-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    
    // AI Learning Coach
    // An AI tutor to teach media analytics skills and foster self-directed learning with reflection.
    // https://chatgpt.com/g/g-681a5609a498819190e8a663d8b5e6ad-ai-learning-coach
    // Teaching
    {
        id: 40,
        name: "AI Learning Coach",
        description: "An AI tutor to teach media analytics skills and foster self-directed learning with reflection.",
        icon: "images\\AI Learning Coach.png",  
        link: "https://chatgpt.com/g/g-681a5609a498819190e8a663d8b5e6ad-ai-learning-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },  
    
    
    // The Brand Mentor Studio
    // Brand strategy coach and creative partner for student brand identity development.
    // https://chatgpt.com/g/g-681a572555a481918862162a5807e7d0-the-brand-mentor-studio
    // Teaching
    {
        id: 41,
        name: "The Brand Mentor Studio",
        description: "Brand strategy coach and creative partner for student brand identity development.",
        icon: "images\\The Brand Mentor Studio.png",    
        link: "https://chatgpt.com/g/g-681a572555a481918862162a5807e7d0-the-brand-mentor-studio",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // AI Research Reading Assistant
    // Helps students process and refine notes on research articles using AI for clarity and insight.
    // https://chatgpt.com/g/g-681a5753ba9081918daf83c7a96055cc-ai-research-reading-assistant
    // Teaching
    {
        id: 42,
        name: "AI Research Reading Assistant",
        description: "Helps students process and refine notes on research articles using AI for clarity and insight.",
        icon: "images\\AI Research Reading Assistant.png",
        link: "https://chatgpt.com/g/g-681a5753ba9081918daf83c7a96055cc-ai-research-reading-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    
    // PT Exam Question Coach
    // Helps DPT students create board-style questions using AI for deeper clinical reasoning and exam prep
    // https://chatgpt.com/g/g-681a5579e8688191a727961a3083f5ba-pt-exam-question-coach
    // Teaching
    {
        id: 43,
        name: "PT Exam Question Coach",
        description: "Helps DPT students create board-style questions using AI for deeper clinical reasoning and exam prep.",
        icon: "images\\PT Exam Question Coach.png", 
        link: "https://chatgpt.com/g/g-681a5579e8688191a727961a3083f5ba-pt-exam-question-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // AI Finance Teaching Assistant
    // AI assistant for finance students analyzing sentiment in investment texts.
    // https://chatgpt.com/g/g-681a58d8f9888191901b51030a50b214-ai-finance-teaching-assistant
    // Teaching 
    {
        id: 44,
        name: "AI Finance Teaching Assistant",
        description: "AI assistant for finance students analyzing sentiment in investment texts.",
        icon: "images\\AI Finance Teaching Assistant.png",
        link: "https://chatgpt.com/g/g-681a58d8f9888191901b51030a50b214-ai-finance-teaching-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    
    
    // Italian Learning Assistant
    // AI assistant for Italian I class with writing, editing, and visual language tools.
    // https://chatgpt.com/g/g-681a59069dfc819187f8916ab62f8d85-italian-learning-assistant
    // Teaching
    {
        id: 45,
        name: "Italian Learning Assistant",
        description: "AI assistant for Italian I class with writing, editing, and visual language tools.",
        icon: "images\\Italian Learning Assistant.png",
        link: "https://chatgpt.com/g/g-681a59069dfc819187f8916ab62f8d85-italian-learning-assistant",    
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // AI History Research Assistant
    // AI peer assistant for History Research Methods students
    // https://chatgpt.com/g/g-681a591aee4081919889df42cd117d5b-ai-history-research-assistant
    // Teaching
    {
        id: 46,
        name: "AI History Research Assistant",
        description: "AI peer assistant for History Research Methods students.",
        icon: "images\\AI History Research Assistant.png",
        link: "https://chatgpt.com/g/g-681a591aee4081919889df42cd117d5b-ai-history-research-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },


    // Policy Project AI Guide
    // A public policy AI guide to help students use AI critically in research, writing, and reflection.
    // https://chatgpt.com/g/g-681a593dddbc819181c4ebe06a5b9ffa-policy-project-ai-guide
    // Teaching
    {
        id: 47,
        name: "Policy Project AI Guide",
        description: "A public policy AI guide to help students use AI critically in research, writing, and reflection.",
        icon: "images\\Policy Project AI Guide.png",
        link: "https://chatgpt.com/g/g-681a593dddbc819181c4ebe06a5b9ffa-policy-project-ai-guide",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // Great Structures Research Guide
    // A research guide for students using AI to analyze great literary works.
    // https://chatgpt.com/g/g-681a5b5029748191b52d7885079da8a5-great-structures-research-guide
    // Teaching
    {
        id: 48,
        name: "Great Structures Research Guide",
        description: "A research guide for students using AI to analyze great literary works.",
        icon: "images\\Great Structures Research Guide.png",
        link: "https://chatgpt.com/g/g-681a5b5029748191b52d7885079da8a5-great-structures-research-guide",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    
    // Art Studio Research Companion
    // A research companion for Art Studio students using AI to analyze art history and theory.
    // https://chatgpt.com/g/g-681a59948df48191b254e9d3292f73f1-art-studio-research-companion
    // Teaching
    {
        id: 49,
        name: "Art Studio Research Companion",  
        description: "A research companion for Art Studio students using AI to analyze art history and theory.",
        icon: "images\\Art Studio Research Companion.png",
        link: "https://chatgpt.com/g/g-681a59948df48191b254e9d3292f73f1-art-studio-research-companion",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    
    // AI Media Project Assistant
    // An AI assistant for media project students using AI to analyze media texts and create project proposals.
    // https://chatgpt.com/g/g-681a58d80bdc819192e1ceea89ae11bd-ai-media-project-assistant
    // Teaching
    {
        id: 50,
        name: "AI Media Project Assistant",
        description: "An AI assistant for media project students using AI to analyze media texts and create project proposals.",
        icon: "images\\AI Media Project Assistant.png",
        link: "https://chatgpt.com/g/g-681a58d80bdc819192e1ceea89ae11bd-ai-media-project-assistant",
        category: "Teaching",
        

    }, 
    
    // Reflective Coding Coach  
    // An AI coach for reflective coding students using AI to analyze code and create project proposals.
    // https://chatgpt.com/g/g-681a6143e3548191a7a07515a40d164e-reflective-coding-coach
    // Teaching
    {
        id: 51,
        name: "Reflective Coding Coach",
        description: "An AI coach for reflective coding students using AI to analyze code and create project proposals.",
        icon: "images\\Reflective Coding Coach.png",
        link: "https://chatgpt.com/g/g-681a6143e3548191a7a07515a40d164e-reflective-coding-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },  
    
    // Student Teaching Assistant
    // An AI assistant for student teaching students using AI to analyze student teaching texts and create project proposals.
    // https://chatgpt.com/g/g-681a5b801b68819180f64c7af859c22d-student-teaching-assistant
    // Teaching
    {
        id: 52,
        name: "Student Teaching Assistant", 
        description: "An AI assistant for student teaching students using AI to analyze student teaching texts and create project proposals.",
        icon: "images\\Student Teaching Assistant.png",
        link: "https://chatgpt.com/g/g-681a5b801b68819180f64c7af859c22d-student-teaching-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },  
    
    // AI Teaching Assistant
    // An academic assistant for turning research into student-friendly podcast lessons.
    // https://chatgpt.com/g/g-681a5f6b0504819181c021f02e4ee65f-ai-teaching-assistant
    // Teaching
    {
        id: 53,
        name: "AI Teaching Assistant",
        description: "An academic assistant for turning research into student-friendly podcast lessons.",
        icon: "images\\AI Teaching Assistant.png",
        link: "https://chatgpt.com/g/g-681a5f6b0504819181c021f02e4ee65f-ai-teaching-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },


    // AI Finance Teaching Assistant
    // Teaches AI-based stock trading strategies in a simulation-focused finance course.
    // https://chatgpt.com/g/g-681a5f7952c88191bc88b17f033ad430-ai-finance-teaching-assistant
    // Teaching
    {
        id: 54,
        name: "AI Finance Teaching Assistant",  
        description: "Teaches AI-based stock trading strategies in a simulation-focused finance course.",
        icon: "images\\AI Finance Teaching Assistant.png",
        link: "https://chatgpt.com/g/g-681a5f7952c88191bc88b17f033ad430-ai-finance-teaching-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // Academic AI Curriculum Co-Designer
    // An academic co-designer for curriculum planning and AI-supported teaching and learning.
    // https://chatgpt.com/g/g-681a5f8a81988191bcbe453ed12aee4d-academic-ai-curriculum-co-designer
    // Teaching
    {
        id: 55,
        name: "Academic AI Curriculum Co-Designer", 
        description: "An academic co-designer for curriculum planning and AI-supported teaching and learning.",
        icon: "images\\Academic AI Curriculum Co-Designer.png",
        link: "https://chatgpt.com/g/g-681a5f8a81988191bcbe453ed12aee4d-academic-ai-curriculum-co-designer",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    // AI Literacy Narrative Coach
    // AI teaching assistant for AI literacy narrative assignments
    // https://chatgpt.com/g/g-681a617fade48191b9f4ffb9a7b92d4b-ai-literacy-narrative-coach
    // Teaching
    {
        id: 56,
        name: "AI Literacy Narrative Coach",    
        description: "AI teaching assistant for AI literacy narrative assignments.",
        icon: "images\\AI Literacy Narrative Coach.png",
        link: "https://chatgpt.com/g/g-681a617fade48191b9f4ffb9a7b92d4b-ai-literacy-narrative-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    

    // Business Analytics Assistant
    // Virtual TA for business analytics in Python courses
    // https://chatgpt.com/g/g-681a5f892f2081919ae64a325f862227-business-analytics-assistant
    // Teaching
    {
        id: 57,
        name: "Business Analytics Assistant",
        description: "Virtual TA for business analytics in Python courses.",
        icon: "images\\Business Analytics Assistant.png",
        link: "https://chatgpt.com/g/g-681a5f892f2081919ae64a325f862227-business-analytics-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },


    // Senior Seminar AI Mentor
    // Supports Senior Seminar with ethical AI research help and critical thinking scaffolds
    // https://chatgpt.com/g/g-681a6043abb881918fba3cfae86ad4ac-senior-seminar-ai-mentor
    // Teaching
    {
        id: 58,
        name: "Senior Seminar AI Mentor",
        description: "Supports Senior Seminar with ethical AI research help and critical thinking scaffolds.",
        icon: "images\\Senior Seminar AI Mentor.png",
        link: "https://chatgpt.com/g/g-681a6043abb881918fba3cfae86ad4ac-senior-seminar-ai-mentor",
        category: "Teaching",
        colorClass: "color-yellow"

    },

    // Machine as Mirror
    // AI co-creator and teaching tool for the 'Machine as Mirror' identity and art project
    // https://chatgpt.com/g/g-681a61b8f9408191ab151ceb47655a95-machine-as-mirror
    // Teaching
    {
        id: 59,
        name: "Machine as Mirror",
        description: "AI co-creator and teaching tool for the 'Machine as Mirror' identity and art project.",
        icon: "images\\Machine as Mirror.png",
        link: "https://chatgpt.com/g/g-681a61b8f9408191ab151ceb47655a95-machine-as-mirror",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // Sales Messaging Coach
    // AI collaborator for iterative B2B sales messaging and ethical communication coaching.
    // https://chatgpt.com/g/g-681a62e230c88191b94ef74b082930c8-sales-messaging-coach
    // Teaching
    {
        id: 60,
        name: "Sales Messaging Coach",
        description: "AI collaborator for iterative B2B sales messaging and ethical communication coaching.",
        icon: "images\\Sales Messaging Coach.png",
        link: "https://chatgpt.com/g/g-681a62e230c88191b94ef74b082930c8-sales-messaging-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // AI Sketchbook Assistant
    // AI studio assistant for iterative art and design exploration
    // https://chatgpt.com/g/g-681a63b8f5b88191a7919351e7d18c5f-ai-sketchbook-assistant
    // Teaching
    {
        id: 61,
        name: "AI Sketchbook Assistant",
        description: "AI studio assistant for iterative art and design exploration.",
        icon: "images\\AI Sketchbook Assistant.png",
        link: "https://chatgpt.com/g/g-681a63b8f5b88191a7919351e7d18c5f-ai-sketchbook-assistant",
        category: "Teaching",
        colorClass: "color-yellow"

    },

    // Teacher Observer Feedback Loop
    // Synthesizes weekly student feedback to guide reflective, student-centered teaching.
    // https://chatgpt.com/g/g-681a64db93a48191b87c7ba34c0f08fc-teacher-observer-feedback-loop
    // Teaching
    {
        id: 62,
        name: "Teacher Observer Feedback Loop",
        description: "Synthesizes weekly student feedback to guide reflective, student-centered teaching.",
        icon: "images\\Teacher Observer Feedback Loop.png",
        link: "https://chatgpt.com/g/g-681a64db93a48191b87c7ba34c0f08fc-teacher-observer-feedback-loop",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // AI Prompt Comparison Coach
    // Helps students learn course content through collaborative AI prompt comparisons.
    // https://chatgpt.com/g/g-681a60b2afe4819191c084ae8bbc2df6-ai-prompt-comparison-coach
    // Teaching
    {
        id: 63,
        name: "AI Prompt Comparison Coach",
        description: "Helps students learn course content through collaborative AI prompt comparisons.",
        icon: "images\\AI Prompt Comparison Coach.png",
        link: "https://chatgpt.com/g/g-681a60b2afe4819191c084ae8bbc2df6-ai-prompt-comparison-coach",
        category: "Teaching",
        colorClass: "color-yellow"

    },



    // AI Data Project Mentor
    // Guides students through LLM-based data analysis projects with critical thinking.
    // https://chatgpt.com/g/g-681a62b831a48191abb23813e1a26932-ai-data-project-mentor
    // Teaching
    {
        id: 64,
        name: "AI Data Project Mentor",
        description: "Guides students through LLM-based data analysis projects with critical thinking.",
        icon: "images\\AI Data Project Mentor.png",
        link: "https://chatgpt.com/g/g-681a62b831a48191abb23813e1a26932-ai-data-project-mentor",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // Creative Thinking Coach
    // AI assistant for teaching creative thinking with RISE and Williams’ Taxonomy.
    // https://chatgpt.com/g/g-681a664c2ce8819181a94df6a0003714-creative-thinking-coach
    // Teaching
    {
        id: 65,
        name: "Creative Thinking Coach",
        description: "AI assistant for teaching creative thinking with RISE and Williams’ Taxonomy.",
        icon: "images\\Creative Thinking Coach.png",
        link: "https://chatgpt.com/g/g-681a664c2ce8819181a94df6a0003714-creative-thinking-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    

    // AI Prompting Lab Assistant
    // Teaches advanced AI prompting and image model evaluation
    // https://chatgpt.com/g/g-681a64b5ad948191b6f26a8c3ef3ab72-ai-prompting-lab-assistant
    // Teaching
    {
        id: 66,
        name: "AI Prompting Lab Assistant",
        description: "Teaches advanced AI prompting and image model evaluation.",
        icon: "images\\AI Prompting Lab Assistant.png",
        link: "https://chatgpt.com/g/g-681a64b5ad948191b6f26a8c3ef3ab72-ai-prompting-lab-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },


    // CAPM Exam Study Assistant
    // An AI assistant for CAPM exam study using AI to analyze CAPM exam texts and create project proposals.
    // https://chatgpt.com/g/g-681a653ba11c819181b611827e0d6584-capm-exam-study-assistant
    // Teaching
    {   
        id: 67,
        name: "CAPM Exam Study Assistant",
        description: "An AI assistant for CAPM exam study using AI to analyze CAPM exam texts and create project proposals.",
        icon: "images\\CAPM Exam Study Assistant.png",
        link: "https://chatgpt.com/g/g-681a653ba11c819181b611827e0d6584-capm-exam-study-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    // AI Music Teaching Assistant
    // An AI teaching assistant for music performance, feedback, and audience engagement.
    // https://chatgpt.com/g/g-681a61c85ef48191ae1a0b2a60193c33-ai-music-teaching-assistant
    // Teaching
    {
        id: 68,
        name: "AI Music Teaching Assistant",    
        description: "An AI teaching assistant for music performance, feedback, and audience engagement.",
        icon: "images\\AI Music Teaching Assistant.png",
        link: "https://chatgpt.com/g/g-681a61c85ef48191ae1a0b2a60193c33-ai-music-teaching-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    

    // Ethical AI Classroom Partner
    // Helps develop AI policy and student training for Humanities teaching
    // https://chatgpt.com/g/g-681a62e9ad548191a77018d60ccb9089-ethical-ai-classroom-partner
    // Teaching
    {
        id: 69,
        name: "Ethical AI Classroom Partner",
        description: "Helps develop AI policy and student training for Humanities teaching.",
        icon: "images\\Ethical AI Classroom Partner.png",
        link: "https://chatgpt.com/g/g-681a62e9ad548191a77018d60ccb9089-ethical-ai-classroom-partner",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    

    // AI Ad Lab Assistant
    // Teaches marketing through AI-generated ads tied to cognitive concepts.
    // https://chatgpt.com/g/g-681a6360aa688191bd783a9f78582d4c-ai-ad-lab-assistant
    // Teaching
    {
        id: 70,
        name: "AI Ad Lab Assistant",
        description: "Teaches marketing through AI-generated ads tied to cognitive concepts.",
        icon: "images\\AI Ad Lab Assistant.png",
        link: "https://chatgpt.com/g/g-681a6360aa688191bd783a9f78582d4c-ai-ad-lab-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // Teaching Assistant Generator
    // Generates tailored datasets and worksheets for teaching practice and student skill-building
    // https://chatgpt.com/g/g-681a644d02088191a12e018f3b327e48-teaching-assistant-generator
    // Teaching
    {
        id: 71,
        name: "Teaching Assistant Generator",
        description: "Generates tailored datasets and worksheets for teaching practice and student skill-building.",
        icon: "images\\Teaching Assistant Generator.png",
        link: "https://chatgpt.com/g/g-681a644d02088191a12e018f3b327e48-teaching-assistant-generator",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // Public Health Simulation Partner
    // Collaborative AI for nursing students in public health simulation and critical thinking.
    // https://chatgpt.com/g/g-681a6537cf28819184adfa356bbf8250-public-health-simulation-partner
    // Teaching
    {
        id: 72,
        name: "Public Health Simulation Partner",
        description: "Collaborative AI for nursing students in public health simulation and critical thinking.",
        icon: "images\\Public Health Simulation Partner.png",
        link: "https://chatgpt.com/g/g-681a6537cf28819184adfa356bbf8250-public-health-simulation-partner",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    // AI Audit Teaching Assistant
    // AI tutor for auditing students to explore and validate questions using multiple LLMs.
    // https://chatgpt.com/g/g-681a6669d058819184679502790551c1-ai-audit-teaching-assistant
    // Teaching
    {
        id: 73,
        name: "AI Audit Teaching Assistant",
        description: "AI tutor for auditing students to explore and validate questions using multiple LLMs.",
        icon: "images\\AI Audit Teaching Assistant.png",
        link: "https://chatgpt.com/g/g-681a6669d058819184679502790551c1-ai-audit-teaching-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
        

    },


    // Engineering Problem Generator
    // Generates engineering problems for students to solve
    // https://chatgpt.com/g/g-681a6766696081919f061bf3c8e7b3bc-engineering-problem-generator
    // Teaching
    {
        id: 74,
        name: "Engineering Problem Generator",
        description: "Generates engineering problems for students to solve.",
        icon: "images\\Engineering Problem Generator.png",
        link: "https://chatgpt.com/g/g-681a6766696081919f061bf3c8e7b3bc-engineering-problem-generator",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // Spanish Learning Companion
    // An AI tutor for personalized Spanish language and cultural learning experiences
    // https://chatgpt.com/g/g-681a67f4758c8191b7d9f9d9d3e181f5-spanish-learning-companion
    // Teaching
    {
        id: 75,
        name: "Spanish Learning Companion",
        description: "An AI tutor for personalized Spanish language and cultural learning experiences.",
        icon: "images\\Spanish Learning Companion.png",
        link: "https://chatgpt.com/g/g-681a67f4758c8191b7d9f9d9d3e181f5-spanish-learning-companion",
        category: "Teaching",
        colorClass: "color-yellow"

    },


    // AI Side Mission Assistant
    // An AI teaching assistant for guiding students through 'AI Side Missions'.
    // https://chatgpt.com/g/g-681a686d6e9c8191b20b2500a8a2375b-ai-side-mission-assistant
    // Teaching
    {
        id: 76,
        name: "AI Side Mission Assistant",  
        description: "An AI teaching assistant for guiding students through 'AI Side Missions'.",   
        icon: "images\\AI Side Mission Assistant.png",
        link: "https://chatgpt.com/g/g-681a686d6e9c8191b20b2500a8a2375b-ai-side-mission-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    



    // AI Writing Reviewer
        // AI peer-review assistant for Writing to Learn pedagogy
    // https://chatgpt.com/g/g-681a68e07d588191924a00f9eae4ca4b-ai-writing-reviewer
    // Teaching
    {
        id: 77,
        name: "AI Writing Reviewer",
        description: "An AI peer-review assistant for Writing to Learn pedagogy.",
        icon: "images\\AI Writing Reviewer.png",
        link: "https://chatgpt.com/g/g-681a68e07d588191924a00f9eae4ca4b-ai-writing-reviewer",
        category: "Teaching",
        colorClass: "color-yellow"

    },

    // Sociology AI Story Mentor
    // Sociology teaching assistant for AI-based life story and structural inequality analysis
    // https://chatgpt.com/g/g-681a701cdaf881918577833a7036f939-sociology-ai-story-mentor
    // Teaching
    {
        id: 78,
        name: "Sociology AI Story Mentor",
        description: "Sociology teaching assistant for AI-based life story and structural inequality analysis.",
        icon: "images\\Sociology AI Story Mentor.png",
        link: "https://chatgpt.com/g/g-681a701cdaf881918577833a7036f939-sociology-ai-story-mentor",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // AI Research Teaching Assistant   
    // Teaches and supports AI use in psychological research
    // https://chatgpt.com/g/g-681a6fb73e288191ac14b9a5e68c6091-ai-research-teaching-assistant
    // Teaching
    {
        id: 79,
        name: "AI Research Teaching Assistant",
        description: "Teaches and supports AI use in psychological research",
        icon: "images\\AI Research Teaching Assistant.png",
        link: "https://chatgpt.com/g/g-681a6fb73e288191ac14b9a5e68c6091-ai-research-teaching-assistant",    
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // Adaptation Studies Companion
    // An AI tutor for film-literature adaptation studies using fancasting and critical analysis tools.
    // https://chatgpt.com/g/g-681a6f5dcfbc81918be7c2dffd6a5fba-adaptation-studies-companion
    // Teaching
    {
        id: 80,
        name: "Adaptation Studies Companion",
        description: "An AI tutor for film-literature adaptation studies using fancasting and critical analysis tools.",
        icon: "images\\Adaptation Studies Companion.png",
        link: "https://chatgpt.com/g/g-681a6f5dcfbc81918be7c2dffd6a5fba-adaptation-studies-companion",
        category: "Teaching",
        colorClass: "color-yellow"
    },


    // Production Survival Challenge
    // AI assistant for film production crisis simulation and learning
    // https://chatgpt.com/g/g-681a6f03b3a08191a3ae991514de0ca4-production-survival-challenge
    // Teaching
    {
        id: 81,
        name: "Production Survival Challenge",
        description: "An AI assistant for film production crisis simulation and learning.",
        icon: "images\\Production Survival Challenge.png",
        link: "https://chatgpt.com/g/g-681a6f03b3a08191a3ae991514de0ca4-production-survival-challenge",
        category: "Teaching",
        colorClass: "color-yellow"
    },  

    
    // Research Mentor Assistant
    // Guides students through ethical, scaffolded AI-supported research projects.
    // https://chatgpt.com/g/g-681a6ea5f7fc8191b8011dfa6a47abc0-research-mentor-assistant
    // Teaching
    {
        id: 82,
        name: "Research Mentor Assistant",
        description: "Guides students through ethical, scaffolded AI-supported research projects.",
        icon: "images\\Research Mentor Assistant.png",
        link: "https://chatgpt.com/g/g-681a6ea5f7fc8191b8011dfa6a47abc0-research-mentor-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },

     // CAPSim Coach
     // An AI tutor for CAPSim, a simulation game for teaching business decision-making.
     // https://chatgpt.com/g/g-681a6e52ac9c8191a21054e37271e114-capsim-coach
     // Teaching
     {
        id: 83,
        name: "CAPSim Coach",
        description: "An AI tutor for CAPSim, a simulation game for teaching business decision-making.",
        icon: "images\\CAPSim Coach.png",
        link: "https://chatgpt.com/g/g-681a6e52ac9c8191a21054e37271e114-capsim-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },



    // AI Writing and UX Assistant
    // An AI assistant for writing and UX design
    // https://chatgpt.com/g/g-681a6de247808191b3446f13c9a3df02-ai-writing-and-ux-assistant
    // Teaching
    {
        id: 84,
        name: "AI Writing and UX Assistant",
        description: "AI learning assistant for writing, rhetoric, and UX design in professional communication courses.",
        icon: "images\\AI Writing and UX Assistant.png",
        link: "https://chatgpt.com/g/g-681a6de247808191b3446f13c9a3df02-ai-writing-and-ux-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    

    // AI Project Simulation Coach
    // Simulates AI support in project management learning environments
    // https://chatgpt.com/g/g-681a6d80266c8191b1573981f661468c-ai-project-simulation-coach
    // Teaching
    {
        id: 85,
        name: "AI Project Simulation Coach",
        description: "Simulates AI support in project management learning environments.",
        icon: "images\\AI Project Simulation Coach.png",
        link: "https://chatgpt.com/g/g-681a6d80266c8191b1573981f661468c-ai-project-simulation-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // AI Teaching Companion
    // AI assistant for enhancing writing and research in interdisciplinary teaching
    // https://chatgpt.com/g/g-681a676e5cec8191aead64d832c9c415-ai-teaching-companion
    // Teaching
    {
        id: 86,
        name: "AI Teaching Companion",
        description: "AI assistant for enhancing writing and research in interdisciplinary teaching.",
        icon: "images\\AI Teaching Companion.png",
        link: "https://chatgpt.com/g/g-681a676e5cec8191aead64d832c9c415-ai-teaching-companion",
        category: "Teaching",
        colorClass: "color-yellow"
    },



    // Design Strategy Tutor
    // An AI assistant for design students to critique, refine, and explore creative and technical work.
    // https://chatgpt.com/g/g-681a6807b64c8191b994eec67686594b-design-strategy-tutor
    // Teaching
    {
        id: 87,
        name: "Design Strategy Tutor",
        description: "An AI assistant for design students to critique, refine, and explore creative and technical work.",
        icon: "images\\Design Strategy Tutor.png",
        link: "https://chatgpt.com/g/g-681a6807b64c8191b994eec67686594b-design-strategy-tutor",
        category: "Teaching",
        colorClass: "color-yellow"
    },  

     // AI POV Workshop Assistant
     // An AI workshop partner for teaching creative POV in student short stories.
     // https://chatgpt.com/g/g-681a6937ff108191b82f94ba99171564-ai-pov-workshop-assistant
     // Teaching
     {
        id: 88,
        name: "AI POV Workshop Assistant",
        description: "An AI workshop partner for teaching creative POV in student short stories.",
        icon: "images\\AI POV Workshop Assistant.png",
        link: "https://chatgpt.com/g/g-681a6937ff108191b82f94ba99171564-ai-pov-workshop-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },



    // Data Mining Coach
    // AI tutor for Python data mining and classification tasks
    // https://chatgpt.com/g/g-681a69adef6c8191bdaba6dc1b6b7abc-data-mining-coach
    // Teaching
    {
        id: 89,
        name: "Data Mining Coach",
        description: "AI tutor for Python data mining and classification tasks.",
        icon: "images\\Data Mining Coach.png",
        link: "https://chatgpt.com/g/g-681a69adef6c8191bdaba6dc1b6b7abc-data-mining-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },



    // AI Ethics Podcast Coach
    // Helps MBA/MSBA students create AI-generated ethical issue podcasts for class discussions.
    // https://chatgpt.com/g/g-681a6a8cda20819183aa856d6df6be35-ai-ethics-podcast-coach
    // Teaching
    {
        id: 90,
        name: "AI Ethics Podcast Coach",    
        description: "Helps MBA/MSBA students create AI-generated ethical issue podcasts for class discussions.",
        icon: "images\\AI Ethics Podcast Coach.png",
        link: "https://chatgpt.com/g/g-681a6a8cda20819183aa856d6df6be35-ai-ethics-podcast-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },
    
    
        
    // AI Strategic Communication Coach
    // Teaches strategic comms using AI for PR, campaign ideation, and ethical media analysis.
    // https://chatgpt.com/g/g-681a6ce788088191bfa74da5f19f5960-ai-strategic-comm-coach
    // Teaching
    {
        id: 91,
        name: "AI Strategic Communication Coach",
        description: "Teaches strategic comms using AI for PR, campaign ideation, and ethical media analysis.",
        icon: "images\\AI Strategic Comm Coach.png",
        link: "https://chatgpt.com/g/g-681a6ce788088191bfa74da5f19f5960-ai-strategic-comm-coach",
        category: "Teaching",
        colorClass: "color-yellow"
    },

    // AI Teaching Activity Designer
    // Helps educators design AI-driven, engaging classroom activities and games
    // https://chatgpt.com/g/g-681a6c623a948191bd7634ea4a5c3915-ai-teaching-activity-designer
    // Teaching
    {
        id: 92,
        name: "AI Teaching Activity Designer",
        description: "Helps educators design AI-driven, engaging classroom activities and games.",
        icon: "images\\AI Teaching Activity Designer.png",
        link: "https://chatgpt.com/g/g-681a6c623a948191bd7634ea4a5c3915-ai-teaching-activity-designer",
        category: "Teaching Preparation | Classroom Management",
        colorClass: "color-yellow"
    },
    

    // Art Description Trainer
    // Helps students describe and recreate images to teach art and assist visually impaired learners.
    // https://chatgpt.com/g/g-681a6a112c8c8191add3a465ce1ec853-art-description-trainer
    // Teaching
    {
        id: 93,
        name: "Art Description Trainer",
        description: "Helps students describe and recreate images to teach art and assist visually impaired learners.",
        icon: "images\\Art Description Trainer.png",
        link: "https://chatgpt.com/g/g-681a6a112c8c8191add3a465ce1ec853-art-description-trainer",
        category: "Teaching",
        colorClass: "color-yellow"  
    },

    // AI Real Estate Marketing Teaching Assistant
    // A classroom AI assistant for teaching, learning, and research support.
    // https://chatgpt.com/g/g-681a68a5ba7c8191be95347d6b3da195-ai-real-estate-marketing-teaching-assistant
    // Teaching
    {
        id: 94,
        name: "AI Real Estate Marketing Teaching Assistant",
        description: "A classroom AI assistant for teaching, learning, and research support.",
        icon: "images\\AI Real Estate Marketing Teaching Assistant.png",
        link: "https://chatgpt.com/g/g-681a68a5ba7c8191be95347d6b3da195-ai-real-estate-marketing-teaching-assistant",
        category: "Teaching",
        colorClass: "color-yellow"
    },  

    // AI Coding Coach for Students
    // A teaching assistant for AI-driven coding and website projects.
    // https://chatgpt.com/g/g-681a67c91d308191a21349c6f5443b23-ai-coding-coach-for-students
    // Teaching
    {
        id: 95,
        name: "AI Coding Coach for Students",   
        description: "A teaching assistant for AI-driven coding and website projects.",
        icon: "images\\AI Coding Coach for Students.png",
        link: "https://chatgpt.com/g/g-681a67c91d308191a21349c6f5443b23-ai-coding-coach-for-students",
        category: "Teaching",
        colorClass: "color-yellow"
    },


    
    // OSPal
    // Your friendly research admin assistant for Elon proposals and awards
    // https://chatgpt.com/g/g-67f84abdccdc81918dd78e73a9f30dea-ospal
    // Teaching
    {
        id: 96,
        name: "OSPal",  
        description: "Your friendly research admin assistant for Elon proposals and awards. Grant and more.",
        icon: "images\\OSPal.png",
        link: "https://chatgpt.com/g/g-67f84abdccdc81918dd78e73a9f30dea-ospal",
        category: "Research",
        colorClass: "color-yellow"
    },


    // Elon AI Integration Assistant
    // Advisor for Elon University's AI Integration Center.
    // https://chatgpt.com/g/g-67af867e90f08191aa82c5482f825d40-elon-ai-integration-assistant
    // Teaching
    {
        id: 97,
        name: "Elon AI Integration Assistant",
        description: "Larn about Elon University's AI Integration Center. Elon AI - AI Literacy.",    
        icon: "images\\Elon AI Integration Assistant.png",
        link: "https://chatgpt.com/g/g-67af867e90f08191aa82c5482f825d40-elon-ai-integration-assistant",
        category: "AI Literacy",
        colorClass: "color-yellow"
    },
    
    

    // Consensus
    // Ask the research, chat directly with the world's scientific literature. Search references, get simple explanations, write articles backed by academic papers.
    // https://chatgpt.com/g/g-bo0FiWLY7-consensus
    // Teaching
    {
        id: 98,
        name: "Consensus",
        description: "Ask the research, chat directly with the world's scientific literature. Search references, get simple explanations, write articles backed by academic papers.",
        icon: "images\\Consensus.png",
        link: "https://chatgpt.com/g/g-bo0FiWLY7-consensus",
        category: "Research",
        colorClass: "color-yellow"
    },
    

    // Data Analyst
    // Drop in any files and I can help analyze and visualize your data.
    // https://chatgpt.com/g/g-HMNcP6w7d-data-analyst
    // Teaching
    {
        id: 99,
        name: "Data Analyst",
        description: "The Data Analyst is a tool that allows you to analyze and visualize your data with ease, write your reports, and create presentations. Drop in any files and I can help analyze and visualize your data.",
        icon: "images\\Data Analyst.png",
        link: "https://chatgpt.com/g/g-HMNcP6w7d-data-analyst",
        category: "Research",
        colorClass: "color-yellow"
    },


    // LitReview Assistant
    // Guides researchers step-by-step through literature review processes
    // https://chatgpt.com/g/g-681b2931df648191ab86e6bb44809ef5-litreview-assistant        
    // Teaching
    {
        id: 100,
        name: "LitReview Assistant",
        description: "Guides researchers step-by-step through literature review processes.",
        icon: "images\\LitReview Assistant.png",
        link: "https://chatgpt.com/g/g-681b2931df648191ab86e6bb44809ef5-litreview-assistant",
        category: "Research",   
        colorClass: "color-yellow"
    },
    
    // Research Methodology Advisor
    // Guides researchers in designing sound and ethical research methodologies
    // https://chatgpt.com/g/g-681b3a951b4c8191a1d4f9e6a4e09944-research-methodology-advisor
    // Teaching
    {
        id: 101,
        name: "Research Methodology Advisor",
        description: "Guides researchers in designing sound and ethical research methodologies.",
        icon: "images\\Research Methodology Advisor.png",
        link: "https://chatgpt.com/g/g-681b3a951b4c8191a1d4f9e6a4e09944-research-methodology-advisor",
        category: "Research",   
        colorClass: "color-yellow"
    },
    

    // Peer Review Simulator
    // Simulates constructive peer review and helps revise academic manuscripts
    // https://chatgpt.com/g/g-681b3c1086b481919f3717ad3de506d0-peer-review-simulator
    // Research
    {
        id: 102,
        name: "Peer Review Simulator",
        description: "Simulates constructive peer review and helps revise academic manuscripts.",
        icon: "images\\Peer Review Simulator.png",  
        link: "https://chatgpt.com/g/g-681b3c1086b481919f3717ad3de506d0-peer-review-simulator",
        category: "Research",
        colorClass: "color-yellow"
    },
    
    
    // Grant Proposal Developer
    // A tool for creating grant proposals
    // https://chatgpt.com/g/g-681b4ecfd9848191a928f506d39f1e09-grant-proposal-developer
    // Research
    {
        id: 103,
        name: "Grant Proposal Developer",
        description: "AI assistant specialized in helping academic researchers create competitive grant proposals. It aims to guide users through the process of developing well-structured, compelling, and responsive proposals that align with funder priorities and review criteria.",
        icon: "images\\Grant Proposal Developer.png",
        link: "https://chatgpt.com/g/g-681b4ecfd9848191a928f506d39f1e09-grant-proposal-developer",
        category: "Research",
        colorClass: "color-yellow"
    },
    

    // Academic Collaboration Facilitator
    // Helps Elon researchers optimize academic collaboration strategies.
    // https://chatgpt.com/g/g-681b5119becc8191896cc6d668ec482d-academic-collaboration-facilitator
    // Research
    {
        id: 104,
        name: "Academic Collaboration Facilitator",
        description: "Helps Elon researchers optimize academic collaboration strategies.",
        icon: "images\\Academic Collaboration Facilitator.png",
        link: "https://chatgpt.com/g/g-681b5119becc8191896cc6d668ec482d-academic-collaboration-facilitator",
        category: "Research",
        colorClass: "color-yellow"
    },

    // Research Impact Maximizer
    // Helps researchers boost their work's visibility and impact across academic and societal domains.
    // https://chatgpt.com/g/g-681b5351f1ec8191b0db4198636dd2bc-research-impact-maximizer
    // Research
    {
        id: 105,
        name: "Research Impact Maximizer",
        description: "Helps researchers boost their w   ork's visibility and impact across academic and societal domains.",
        icon: "images\\Research Impact Maximizer.png",
        link: "https://chatgpt.com/g/g-681b5351f1ec8191b0db4198636dd2bc-research-impact-maximizer",
        category: "Research",
        colorClass: "color-yellow"
    },
    
    // IRB Preparation Assistant
    // Helps researchers prepare IRB applications with ethical and regulatory guidance
    // https://chatgpt.com/g/g-681b6295c4608191af2478477383cc4b-irb-preparation-assistant
    // Research
    {
        id: 106,
        name: "IRB Preparation Assistant",
        description: "Helps researchers prepare IRB applications with ethical and regulatory guidance.",
        icon: "images\\IRB Preparation Assistant.png",
        link: "https://chatgpt.com/g/g-681b6295c4608191af2478477383cc4b-irb-preparation-assistant",
        category: "Research",
        colorClass: "color-yellow"
    },
    
    // Research Innovation Catalyst
    // Stimulates innovative, rigorous thinking in academic research    
    // https://chatgpt.com/g/g-681b54ab06bc81919811f5f335738c5d-research-innovation-catalyst
    // Research
    {
        id: 107,
        name: "Research Innovation Catalyst",
        description: "Stimulates innovative, rigorous thinking in academic research.",  
        icon: "images\\Research Innovation Catalyst.png",
        link: "https://chatgpt.com/g/g-681b54ab06bc81919811f5f335738c5d-research-innovation-catalyst",
        category: "Research",
        colorClass: "color-yellow"
    },
    

    // Theoretical Framework Builder
    // Guides researchers in building rigorous, current theoretical frameworks.
    // https://chatgpt.com/g/g-681b63875a3c8191bacefdadfe5e632c-theoretical-framework-builder
    // Research
    {
        id: 108,
        name: "Theoretical Framework Builder",
        description: "Guides researchers in building rigorous, current theoretical frameworks.",
        icon: "images\\Theoretical Framework Builder.png",
        link: "https://chatgpt.com/g/g-681b63875a3c8191bacefdadfe5e632c-theoretical-framework-builder",
        category: "Research",
        colorClass: "color-yellow"
    },
    
    // Flyer Maker Studio
    // Creates custom flyer designs from user input and generates innovative visuals step-by-step.
    // https://chatgpt.com/g/g-681b6a6093d08191b4cba9b91bfabd79-flyer-maker-studio
    // Productivity
    {
        id: 109,
        name: "Flyer Maker Studio",
        description: "Creates custom flyer designs from user input and generates innovative visuals step-by-step.",
        icon: "images\\Flyer Maker Studio.png",
        link: "https://chatgpt.com/g/g-681b6a6093d08191b4cba9b91bfabd79-flyer-maker-studio",
        category: "Productivity",
        colorClass: "color-yellow"
    },

    // Resume Builder Assistant
    // Helps students build and refine resumes with tailored, professional guidance.
    // https://chatgpt.com/g/g-681b73f89d68819194fa0896c0026970-resume-builder-assistant
    // Student Success
    {
        id: 110,
        name: "Resume Builder Assistant",
        description: "Helps students build and refine resumes with tailored, professional guidance.",
        icon: "images\\Resume Builder Assistant.png",
        link: "https://chatgpt.com/g/g-681b73f89d68819194fa0896c0026970-resume-builder-assistant",
        category: "Student Success",
        colorClass: "color-yellow"
    },

    // Career Exploration Guide
    // Guides higher ed students in exploring and evaluating career options
    // https://chatgpt.com/g/g-681b7758be588191b73f823c4ba430fc-career-exploration-guide
    // Student Success
    {
        id: 111,
        name: "Career Exploration Guide",
        description: "Guides higher ed students in exploring and evaluating career options.",
        icon: "images\\Career Exploration Guide.png",
        link: "https://chatgpt.com/g/g-681b7758be588191b73f823c4ba430fc-career-exploration-guide",
        category: "Student Success",
        colorClass: "color-yellow"
    },
    

    // Mental Health Support Navigator
    // Supports students with mental health guidance and stress coping strategies.
    // https://chatgpt.com/g/g-681b77faff048191bca0fc8ea6c0ea62-mental-health-support-navigator
    // Student Success
    {
        id: 112,
        name: "Mental Health Support Navigator",    
        description: "Supports students with mental health guidance and stress coping strategies.",
        icon: "images\\Mental Health Support Navigator.png",
        link: "https://chatgpt.com/g/g-681b77faff048191bca0fc8ea6c0ea62-mental-health-support-navigator",
        category: "Student Success",
        colorClass: "color-yellow"
    },
    

    // Student Wellness Coach
    // Helps students maintain physical and mental health through wellness resources and support.   
    // https://chatgpt.com/g/g-681b78cd349c8191bfb07f4769000137-student-wellness-coach
    // Student Success
    {
        id: 113,
        name: "Student Wellness Coach",
        description: "Helps students maintain physical and mental health through wellness resources and support.",
        icon: "images\\Student Wellness Coach.png",
        link: "https://chatgpt.com/g/g-681b78cd349c8191bfb07f4769000137-student-wellness-coach",
        category: "Student Success",
        colorClass: "color-yellow"
    },
    
    
    // Time Management Coach
    // Helps students optimize their time management skills and productivity.
    // https://chatgpt.com/g/g-681b7a9ba26881918a9bc2d6ce63e9d1-time-management-coach
    // Student Success
    {
        id: 114,
        name: "Time Management Coach",
        description: "Helps students optimize their time management skills and productivity.",
        icon: "images\\Time Management Coach.png",
        link: "https://chatgpt.com/g/g-681b7a9ba26881918a9bc2d6ce63e9d1-time-management-coach",
        category: "Student Success",
        colorClass: "color-yellow"
    },
    
    // Financial Literacy Advisor
    // Provides financial literacy resources and guidance to students.
    // https://chatgpt.com/g/g-681b7b38310c81918f4ff95be56c0e2d-financial-literacy-advisor
    // Student Success
    {
        id: 115,
        name: "Financial Literacy Advisor",
        description: "Provides financial literacy resources and guidance to students.",
        icon: "images\\Financial Literacy Advisor.png",
        link: "https://chatgpt.com/g/g-681b7b38310c81918f4ff95be56c0e2d-financial-literacy-advisor",
        category: "Student Success",
        colorClass: "color-yellow"
    },


    // Elon Global Guide
    // Helps Elon students prepare for study abroad experiences and global learning opportunities.
    // https://chatgpt.com/g/g-681b7b4f9f3c81919e7ad102c316e313-elon-global-guide
    // Student Success
    {
        id: 116,
        name: "Elon Global Guide",
        description: "Helps Elon students prepare for study abroad experiences and global learning opportunities.",
        icon: "images\\Elon Global Guide.png",
        link: "https://chatgpt.com/g/g-681b7b4f9f3c81919e7ad102c316e313-elon-global-guide",
        category: "Student Success",
        colorClass: "color-yellow"
    },


    // Study Skills Coach   
    // Helps Elon students build academic skills and study strategies using evidence-based methods.
    // https://chatgpt.com/g/g-681b7bd101b08191aaf452963b5623be-study-skills-coach
    // Student Success
    {
        id: 117,
        name: "Study Skills Coach", 
        description: "Helps Elon students build academic skills and study strategies using evidence-based methods.",
        icon: "images\\Study Skills Coach.png",
        link: "https://chatgpt.com/g/g-681b7bd101b08191aaf452963b5623be-study-skills-coach",
        category: "Student Success",
        colorClass: "color-yellow"
    },
    
    // Campus Resource Navigator
    // Helps Elon students navigate campus resources and support services.
    // https://chatgpt.com/g/g-681b7cd217b88191931ecaa5e49db608-campus-resource-navigator
    // Student Success
    {
        id: 118,
        name: "Campus Resource Navigator",  
        description: "Helps Elon students navigate campus resources and support services.",
        icon: "images\\Campus Resource Navigator.png",
        link: "https://chatgpt.com/g/g-681b7cd217b88191931ecaa5e49db608-campus-resource-navigator",
        category: "Student Success",
        colorClass: "color-yellow"
    },
    
    // Graduate School Application Advisor
    // Do you need help with your graduate school application? I'm here to help! Prepare for your application with this tool.
    // https://chatgpt.com/g/g-681b7d5cd12c81919208ef16cf25401e-graduate-school-application-advisor
    // Student Success
    {
        id: 119,
        name: "Graduate School Application Advisor",
        description: "Do you need help with your graduate school application? I'm here to help! Prepare for your application with this tool.",
        icon: "images\\Graduate School Application Advisor.png",
        link: "https://chatgpt.com/g/g-681b7d5cd12c81919208ef16cf25401e-graduate-school-application-advisor",
        category: "Student Success",
        colorClass: "color-yellow"
    },
    
    // International Student Support Guide  
    // Helps international students navigate Elon's support services and resources.
    // https://chatgpt.com/g/g-681b7dbddec48191a6a4e7fb248e1b2f-international-student-support-guide
    // Student Success
    {
        id: 120,
        name: "International Student Support Guide",    
        description: "Helps international students navigate Elon's support services and resources.",    
        icon: "images\\International Student Support Guide.png",
        link: "https://chatgpt.com/g/g-681b7dbddec48191a6a4e7fb248e1b2f-international-student-support-guide",
        category: "Student Success",
        colorClass: "color-yellow"
    },
    
    

    // Transfer Student Guide
    // Helps transfer students navigate Elon's support services and resources.
    // https://chatgpt.com/g/g-681b7df857cc8191b67477f3c7aa5232-transfer-student-guide
    // Student Success
    {
        id: 121,
        name: "Transfer Student Guide",
        description: "Helps transfer students navigate Elon's support services and resources.", 
        icon: "images\\Transfer Student Guide.png",
        link: "https://chatgpt.com/g/g-681b7df857cc8191b67477f3c7aa5232-transfer-student-guide",
        category: "Student Success",
        colorClass: "color-yellow"
    },
    

    // First Gen Mentor at Elon
    // Helps first-generation students navigate Elon's support services and resources.  
    // https://chatgpt.com/g/g-681b7e8615008191a99f952442bea7e4-first-gen-mentor-at-elon
    // Student Success
    
    {   
        id: 122,
        name: "First Gen Mentor at Elon",
        description: "Helps first-generation students navigate Elon's support services and resources.",
        icon: "images\\First-Gen Mentor at Elon.png",
        link: "https://chatgpt.com/g/g-681b7e8615008191a99f952442bea7e4-first-gen-mentor-at-elon",
        category: "Student Success",
        colorClass: "color-yellow"
    },
    
    
    // Scholarly Publishing Navigator
    // Helps researchers navigate the scholarly publishing process. Find the right journal for your research.
    // https://chatgpt.com/g/g-681b7eab713481919d2c9712237bca03-scholarly-publishing-navigator
    // Research
    {
        id: 123,
        name: "Scholarly Publishing Navigator",
        description: "Helps researchers navigate the scholarly publishing process. Find the right journal for your research.",
        icon: "images\\Scholarly Publishing Navigator.png",
        link: "https://chatgpt.com/g/g-681b7eab713481919d2c9712237bca03-scholarly-publishing-navigator",
        category: "Research",
        colorClass: "color-yellow"
    },



    // Administrative Process Navigator 
    // Guides Elon staff through administrative processes and policies with step-by-step clarity.
    // https://chatgpt.com/g/g-681b7f3f4a64819195730c85c6513b2d-administrative-process-navigator
    // Productivity
    {
        id: 124,
        name: "Administrative Process Navigator",
        description: "Guides Elon staff through administrative processes and policies with step-by-step clarity.",
        icon: "images\\Administrative Process Navigator.png",
        link: "https://chatgpt.com/g/g-681b7f3f4a64819195730c85c6513b2d-administrative-process-navigator",
        category: "Productivity",
        colorClass: "color-yellow"
    },


    // Project Management Assistant
    // Helps Elon staff manage projects with step-by-step guidance. Based on the best practices of the Project Management Institute.
    // https://chatgpt.com/g/g-681b7f63e7908191b343042a7d43ef3b-project-management-assistant
    // Productivity
    {
        id: 125,
        name: "Project Management Assistant",
        description: "Helps Elon staff manage projects with step-by-step guidance. Based on the best practices of the Project Management Institute.",
        icon: "images\\Project Management Assistant.png",
        link: "https://chatgpt.com/g/g-681b7f63e7908191b343042a7d43ef3b-project-management-assistant",
        category: "Productivity",
        colorClass: "color-yellow"
    },

    // Productivity Systems Advisor 
    // Helps Elon staff optimize their productivity and efficiency. Search internet and find the best tips and tricks for your daily work.
    // https://chatgpt.com/g/g-681b7fded5408191b4c8415e4c0a5fbc-productivity-systems-advisor
    // Productivity
    {   
        id: 126,
        name: "Productivity Systems Advisor",
        description: "Helps Elon staff optimize their productivity and efficiency. Search internet and find the best tips and tricks for your daily work.",
        icon: "images\\Productivity Systems Advisor.png",
        link: "https://chatgpt.com/g/g-681b7fded5408191b4c8415e4c0a5fbc-productivity-systems-advisor",
        category: "Productivity",
        colorClass: "color-yellow"
    },


    // Budget Planning Assistant
    // Assistant you to buget planning for your personal and professional life.
    // https://chatgpt.com/g/g-681b7fd5826481918c7929bc2357debe-budget-planning-assistant
    // Productivity
    {
        id: 127,
        name: "Budget Planning Assistant",
        description: "Assistant you to buget planning for your personal and professional life.",
        icon: "images\\Budget Planning Assistant.png",
        link: "https://chatgpt.com/g/g-681b7fd5826481918c7929bc2357debe-budget-planning-assistant",
        category: "Productivity",
        colorClass: "color-yellow"
    },

    // Strategic Planning Facilitator
    // Helps Elon staff develop plans that aligns with the strategic goals of the university.
    // https://chatgpt.com/g/g-681b8073f99481918409460e1e15e69f-strategic-planning-facilitator
    // Productivity
    {
        id: 128,
        name: "Strategic Planning Facilitator",
        description: "Helps Elon staff develop plans that aligns with the strategic goals of the university. Mission and Vision of the university.",
        icon: "images\\Strategic Planning Facilitator.png",
        link: "https://chatgpt.com/g/g-681b8073f99481918409460e1e15e69f-strategic-planning-facilitator",
        category: "Productivity",
        colorClass: "color-yellow"
    },


    // Prioritizer for Elon Mission and Vision  
    // Do you feel overwhelmed by the many tasks and responsibilities at Elon? I'm here to help! Use this tool to prioritize your work and focus on what matters most.  
    // https://chatgpt.com/g/g-681b80b7bbd88191b832a3cc7a081a82-prioritizer-for-elon-mission-and-vision
    // Productivity
    {
        id: 129,
        name: "Prioritizer for Elon Mission and Vision",
        description: "Do you feel overwhelmed by the many tasks and responsibilities at Elon? I'm here to help! Use this tool to prioritize your work and focus on what matters most.",
        icon: "images\\Prioritizer for Elon Mission and Vision.png",
        link: "https://chatgpt.com/g/g-681b80b7bbd88191b832a3cc7a081a82-prioritizer-for-elon-mission-and-vision",
        category: "Productivity",
        colorClass: "color-yellow"
    },



    // HR Policy and Benefits Navigator 
    // Search publically available HR policies and benefits for Elon employees.     
    // https://chatgpt.com/g/g-681b811233a4819188840d2fb07a0361-hr-policy-benefits-navigator
    // Productivity
    {
        id: 130,
        name: "HR Policy and Benefits Navigator",
        description: "Search publically available HR policies and benefits for Elon employees.",
        icon: "images\\HR Policy and Benefits Navigator.png",
        link: "https://chatgpt.com/g/g-681b811233a4819188840d2fb07a0361-hr-policy-benefits-navigator",
        category: "Productivity",
        colorClass: "color-yellow"
    },


    // Professional Development Finder
    // Find the best professional development opportunities for you on the internet.
    // https://chatgpt.com/g/g-681b814ec95c81919966ba9c014ca372-professional-development-finder 
    // Productivity
    {
        id: 131,
        name: "Professional Development Finder",
        description: "Find the best professional development opportunities for you on the internet.",
        icon: "images\\Professional Development Finder.png",    
        link: "https://chatgpt.com/g/g-681b814ec95c81919966ba9c014ca372-professional-development-finder",
        category: "Productivity",
        colorClass: "color-yellow"
    },
    
    
    // Staff Wellness Guide
    // Helps Elon staff maintain their physical and mental health.
    // https://chatgpt.com/g/g-681b820d95488191bfd30aa3876092ae-staff-wellness-guide
    // Productivity
    {
        id: 132,
        name: "Staff Wellness Guide",
        description: "Helps Elon staff maintain their physical and mental health.", 
        icon: "images\\Staff Wellness Guide.png",
        link: "https://chatgpt.com/g/g-681b820d95488191bfd30aa3876092ae-staff-wellness-guide",
        category: "Productivity",
        colorClass: "color-yellow"
    },
    


    // Event Planning Assistant 
    // Are you planning an event? I'm here to help! Use this tool to plan your event and make it a success.     
    // https://chatgpt.com/g/g-681b826c7fa88191bc82832c8d355952-event-planning-assistant
    // Productivity
    {
        id: 133,
        name: "Event Planning Assistant",
        description: "Are you planning an event? I'm here to help! Use this tool to plan your event and make it a success.",
        icon: "images\\Event Planning Assistant.png",   
        link: "https://chatgpt.com/g/g-681b826c7fa88191bc82832c8d355952-event-planning-assistant",
        category: "Productivity",
        colorClass: "color-yellow"
    },

    
    
    





]

    
    