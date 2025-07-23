import { SocialMediaPost, BusinessInfo, Campaign } from '../types/index.js';

export class ContentGenerator {
  private businessInfo: BusinessInfo;

  constructor(businessInfo: BusinessInfo) {
    this.businessInfo = businessInfo;
  }

  generateMassageTherapyPost(theme: string, platform: 'instagram' | 'facebook' | 'both'): SocialMediaPost {
    const massageThemes = {
      relaxation: {
        captions: [
          "Melt away the stress of your week with our therapeutic massage services. Your mind and body deserve this moment of peace.",
          "Life moves fast, but healing takes time. Give yourself the gift of relaxation with our expert massage therapy.",
          "Transform tension into tranquility. Book your massage session today and rediscover your inner calm."
        ],
        hashtags: ["#MassageTherapy", "#Relaxation", "#StressRelief", "#SelfCare", "#Wellness", "#Mindfulness", "#TherapeuticMassage", "#InnerPeace"]
      },
      wellness: {
        captions: [
          "Your wellness journey starts with self-care. Our massage therapy sessions are designed to restore balance to your body and mind.",
          "Invest in your health today. Regular massage therapy can improve circulation, reduce muscle tension, and boost your overall well-being.",
          "Wellness isn't a luxury—it's a necessity. Prioritize your health with our professional massage services."
        ],
        hashtags: ["#Wellness", "#HealthyLiving", "#MassageTherapy", "#SelfCare", "#BodyMindBalance", "#HealthyLifestyle", "#WellnessJourney", "#HolisticHealth"]
      },
      pain_relief: {
        captions: [
          "Don't let pain hold you back. Our targeted massage therapy techniques can help alleviate chronic pain and improve mobility.",
          "Every body tells a story. Let our skilled therapists help you write a new chapter—one free from pain and discomfort.",
          "Pain doesn't have to be permanent. Discover how our specialized massage treatments can help you find relief and restore function."
        ],
        hashtags: ["#PainRelief", "#TherapeuticMassage", "#ChronicPain", "#MuscleRecovery", "#Mobility", "#Healing", "#PainManagement", "#BodyWork"]
      },
      sports_recovery: {
        captions: [
          "Athletes know the importance of recovery. Our sports massage therapy helps you bounce back stronger and perform at your peak.",
          "Push your limits, but don't ignore your recovery. Sports massage is essential for maintaining peak performance and preventing injury.",
          "Your body is your temple—treat it right. Our sports massage therapy accelerates recovery and enhances athletic performance."
        ],
        hashtags: ["#SportsMassage", "#AthleteRecovery", "#PerformanceTherapy", "#InjuryPrevention", "#SportsTherapy", "#RecoveryMassage", "#AthleticPerformance", "#MuscleRecovery"]
      }
    };

    const selectedTheme = massageThemes[theme as keyof typeof massageThemes] || massageThemes.relaxation;
    const caption = selectedTheme.captions[Math.floor(Math.random() * selectedTheme.captions.length)];
    
    // Always include complete contact information
    let contactInfo = "\n\n📍 2402 North Nevada Avenue, Colorado Springs, CO\n📞 Call to book your appointment\n🌐 awakeningsmassagecos.com";
    
    let callToAction = "Book your appointment today!";
    if (this.businessInfo.phone) {
      contactInfo = `\n\n📍 2402 North Nevada Avenue, Colorado Springs, CO\n📞 ${this.businessInfo.phone}\n🌐 awakeningsmassagecos.com`;
    }

    return {
      platform,
      caption: `${caption}\n\n${callToAction}${contactInfo}`,
      hashtags: selectedTheme.hashtags,
      callToAction
    };
  }

  generatePromotionalPost(offer: string, platform: 'instagram' | 'facebook' | 'both'): SocialMediaPost {
    const promoTemplates = [
      `🌟 Special Offer Alert! ${offer} Don't miss out on this limited-time opportunity to treat yourself to the relaxation you deserve.`,
      `💆‍♀️ Treat Yourself! ${offer} Your wellness journey starts with a single appointment—make it today!`,
      `🎉 Exclusive Deal! ${offer} Because everyone deserves to feel their best. Book now and experience the difference!`
    ];

    const caption = promoTemplates[Math.floor(Math.random() * promoTemplates.length)];
    
    // Always include complete contact information
    let contactInfo = "\n\n📍 2402 North Nevada Avenue, Colorado Springs, CO\n📞 Call to book your appointment\n🌐 awakeningsmassagecos.com";
    if (this.businessInfo.phone) {
      contactInfo = `\n\n📍 2402 North Nevada Avenue, Colorado Springs, CO\n📞 ${this.businessInfo.phone}\n🌐 awakeningsmassagecos.com`;
    }
    
    return {
      platform,
      caption: `${caption}${contactInfo}`,
      hashtags: ["#SpecialOffer", "#MassageTherapy", "#LimitedTime", "#TreatYourself", "#Wellness", "#Relaxation", "#BookNow", "#SelfCare"],
      callToAction: `Book now! ${this.businessInfo.phone || 'Call us today!'}`
    };
  }

  generateEducationalPost(topic: string, platform: 'instagram' | 'facebook' | 'both'): SocialMediaPost {
    const educationalContent = {
      benefits: {
        caption: "Did you know that regular massage therapy can:\n\n✅ Reduce stress and anxiety\n✅ Improve sleep quality\n✅ Boost immune function\n✅ Increase flexibility\n✅ Lower blood pressure\n✅ Enhance mental clarity\n\nInvest in your health—your body will thank you!",
        hashtags: ["#MassageBenefits", "#HealthFacts", "#Wellness", "#StressReduction", "#HealthyLiving", "#SelfCare", "#MindBodyConnection"]
      },
      techniques: {
        caption: "Not all massages are created equal! Here are some popular techniques we offer:\n\n🌿 Swedish Massage - Perfect for relaxation\n💪 Deep Tissue - Targets muscle tension\n🏃‍♂️ Sports Massage - Aids athletic recovery\n🤲 Hot Stone - Uses heated stones for deep relaxation\n\nWhich technique speaks to you?",
        hashtags: ["#MassageTechniques", "#SwedishMassage", "#DeepTissue", "#SportsMassage", "#HotStone", "#TherapeuticMassage", "#Wellness"]
      },
      selfcare: {
        caption: "Self-care isn't selfish—it's essential! 💜\n\nTaking time for yourself through massage therapy:\n• Reduces stress hormones\n• Increases feel-good endorphins\n• Improves your relationships\n• Boosts productivity\n• Enhances overall quality of life\n\nYou can't pour from an empty cup. Fill yours today!",
        hashtags: ["#SelfCare", "#MentalHealth", "#StressManagement", "#SelfLove", "#Wellness", "#MindfulLiving", "#HealthyBoundaries", "#YouMatter"]
      }
    };

    const content = educationalContent[topic as keyof typeof educationalContent] || educationalContent.benefits;
    
    // Always include complete contact information
    let contactInfo = "\n\n📍 2402 North Nevada Avenue, Colorado Springs, CO\n📞 Call to book your appointment\n🌐 awakeningsmassagecos.com";
    if (this.businessInfo.phone) {
      contactInfo = `\n\n📍 2402 North Nevada Avenue, Colorado Springs, CO\n📞 ${this.businessInfo.phone}\n🌐 awakeningsmassagecos.com`;
    }
    
    return {
      platform,
      caption: `${content.caption}\n\nReady to experience these benefits?${contactInfo}`,
      hashtags: content.hashtags,
      callToAction: "Ready to experience these benefits? Contact us to schedule your session!"
    };
  }

  generateWeeklySchedule(): SocialMediaPost[] {
    const schedule = [
      { day: "Monday", theme: "wellness", platform: "instagram" as const },
      { day: "Tuesday", theme: "pain_relief", platform: "facebook" as const },
      { day: "Wednesday", theme: "relaxation", platform: "both" as const },
      { day: "Thursday", theme: "sports_recovery", platform: "instagram" as const },
      { day: "Friday", theme: "wellness", platform: "facebook" as const },
      { day: "Saturday", theme: "relaxation", platform: "both" as const },
      { day: "Sunday", theme: "self-care", platform: "instagram" as const }
    ];

    return schedule.map(item => {
      if (item.theme === "self-care") {
        return this.generateEducationalPost("selfcare", item.platform);
      }
      return this.generateMassageTherapyPost(item.theme, item.platform);
    });
  }

  generateMonthlySchedule(month?: number, year?: number): SocialMediaPost[] {
    const today = new Date();
    const targetMonth = month || today.getMonth();
    const targetYear = year || today.getFullYear();
    
    const posts: SocialMediaPost[] = [];
    
    // 3 posts per week, 4 weeks = 12 posts per month
    const weeklySchedule = [
      // Week 1: Relaxation & Stress Relief (Monday, Wednesday, Friday)
      { themes: ["relaxation", "wellness", "educational_selfcare"], platforms: ["instagram", "facebook", "both"] },
      // Week 2: Pain Relief & Therapeutic Benefits
      { themes: ["pain_relief", "therapeutic", "educational_benefits"], platforms: ["facebook", "both", "instagram"] },
      // Week 3: Sports Recovery & Active Lifestyle  
      { themes: ["sports_recovery", "fitness", "educational_techniques"], platforms: ["instagram", "both", "facebook"] },
      // Week 4: Wellness & Self-Care
      { themes: ["wellness", "mindfulness", "promotional"], platforms: ["both", "instagram", "facebook"] }
    ];
    
    // Generate 3 posts per week for 4 weeks
    weeklySchedule.forEach((week, weekIndex) => {
      week.themes.forEach((theme, dayIndex) => {
        const platform = week.platforms[dayIndex] as 'instagram' | 'facebook' | 'both';
        let post: SocialMediaPost;
        
        // Generate different types of content based on theme
        if (theme.startsWith("educational_")) {
          const educationType = theme.replace("educational_", "");
          post = this.generateEducationalPost(educationType as any, platform);
        } else if (theme === "promotional") {
          // Rotating promotional offers
          const offers = [
            "Book 3 sessions and get 15% off your package!",
            "New client special: 20% off your first massage",
            "Refer a friend and both get 10% off your next session",
            "Weekend wellness special: Extended 90-minute sessions"
          ];
          const offer = offers[weekIndex % offers.length];
          post = this.generatePromotionalPost(offer, platform);
        } else {
          // Map special themes to standard themes
          const themeMapping: { [key: string]: string } = {
            "therapeutic": "pain_relief",
            "fitness": "sports_recovery", 
            "mindfulness": "wellness"
          };
          
          const mappedTheme = themeMapping[theme] || theme;
          post = this.generateMassageTherapyPost(mappedTheme, platform);
        }
        
        // Add week-specific context for first post of each week
        if (dayIndex === 0) {
          const weekMessages = [
            "Start your week with self-care! 🌟",
            "Mid-month wellness check: prioritize your healing! 💆‍♀️",
            "Keep your wellness momentum going! 💪",
            "Finish the month strong with relaxation! ✨"
          ];
          post.caption = `${weekMessages[weekIndex]}\n\n${post.caption}`;
        }
        
        posts.push(post);
      });
    });
    
    return posts;
  }

  generateCampaign(name: string, duration: number, frequency: 'daily' | 'weekly'): Campaign {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + duration);

    let posts: SocialMediaPost[] = [];

    if (frequency === 'weekly') {
      const weeks = Math.ceil(duration / 7);
      for (let week = 0; week < weeks; week++) {
        posts.push(...this.generateWeeklySchedule());
      }
    } else {
      // Daily posts
      const themes = ["relaxation", "wellness", "pain_relief", "sports_recovery"];
      for (let day = 0; day < duration; day++) {
        const theme = themes[day % themes.length];
        const platform = day % 3 === 0 ? "both" : (day % 2 === 0 ? "instagram" : "facebook");
        posts.push(this.generateMassageTherapyPost(theme, platform as any));
      }
    }

    return {
      id: `campaign-${Date.now()}`,
      name,
      description: `${frequency.charAt(0).toUpperCase() + frequency.slice(1)} social media campaign for ${this.businessInfo.name}`,
      businessType: this.businessInfo.type,
      posts,
      startDate,
      endDate,
      frequency
    };
  }
}