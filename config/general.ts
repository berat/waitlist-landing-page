const config = {
    domain: "theproduct.com",
    title: "Waitlist Page | The Product",
    description: "Elevate your texts with the perfect emojis. Usemoji.app is coming soon! Join the waiting list for updates and exclusive access.",
    subscribeForm: "https://dashboard.mailerlite.io/forms/1375169/148344047276132097/share",

    socials: {
        twitter: "https://x.com/beratbozkurt0",
    },

    contents: {
        title: "Demand for rentals could attract scammers.",
        markOfTitle: "The Product", // its for marking the title. The text must contain on title. If not, it will be ignored.
        description: `Friendly Neighbourhood Rental is committed to promoting fair renting practices. Stay informed and proactive to protect yourself during this challenging time.`,

        about: [
            {
                id: 1,
                emoji: "💡",
                title: "Innovative Design",
                description: "The Product is designed to be a seamless experience for all users. Our team has worked tirelessly to create a platform that is both intuitive and visually stunning."
            },
            {
                id: 2,
                emoji: "🚀",
                title: "Fast and Efficient",
                description: "We understand that your time is valuable. That's why we've optimized The Product to be as fast and efficient as possible. Spend less time shopping and more time enjoying your purchases."
            },
            {
                id: 3,
                emoji: "🌎",
                title: "Global Reach",
                description: "The Product is available to users all around the world. No matter where you are, you can access our platform and discover the perfect product for you."
            }
        ],

        howWorks: [
            {
                title: "Install the extension",
                description: "The Product is available as a browser extension. Simply install it and you're ready to go!"
            },
            {
                title: "Select your text",
                description: "Highlight any text on any website and The Product will automatically will find emoji that match your selection."
            },
            {

                title: "Personalize suggestions",
                description: "Customize your emoji suggestions based on your preferences and writing style."
            },
            {
                title: "Seamless integration",
                description: "Enjoy effortless integration with your browser, making emoji suggestions readily available."
            },
            {
                title: "Copy and paste",
                description: "Once you've selected your emoji, simply copy it and paste it wherever you like. It's that easy!"
            },
        ],

        price: {
            description: "Unlock endless emoji possibilities with our monthly subscription. Cancel anytime, stress-free!",
            price: "9$",

            advantages: ['Cancel anytime.', 'Analyze text emotions for suitable emoji suggestions.', 'Unlimited emoji access: Explore vast library.', 'Bullet points yield perfect results.', 'Ease of use.']
        },

        faq: [
            {
                question: "What is The Product?",
                answer: "The Product is a browser extension that suggests emoji based on your text selection. It's designed to make your online experience more fun and engaging."
            },
            {
                question: "How do I install The Product?",
                answer: "The Product is available as a browser extension. Simply install it and you're ready to go!"
            },

            {
                question: "How do I use The Product?",
                answer: "Highlight any text on any website and The Product will automatically will find emoji that match your selection."
            },
            {
                question: "Is The Product free?",
                answer: "The Product is available as a monthly subscription. You can cancel anytime, stress-free!"
            },
            {
                question: "Can I customize my emoji suggestions?",
                answer: "Yes! You can personalize your emoji suggestions based on your preferences and writing style."
            },
            {
                question: "Is The Product available globally?",
                answer: "Yes! The Product is available to users all around the world."
            },
            {
                question: "How do I cancel my subscription?",
                answer: "You can cancel your subscription anytime. Simply go to your account settings and click 'cancel subscription'."
            },
            {
                question: "How do I contact support?",
                answer: "You can contact our support team by emailing support@theproduct.com."
            }
        ]
    }
}


export default config;
