import { ContentGenerator } from './dist/services/contentGenerator.js';

const businessInfo = {
  name: "Awakenings Massage Company",
  type: "massage_therapy",
  description: "Professional massage therapy services for relaxation and wellness",
  location: "Colorado Springs, CO",
  address: "2402 North Nevada Avenue, Colorado Springs, CO",
  phone: "+1-555-123-4567",
  website: "https://awakeningsmassagecos.com"
};

const generator = new ContentGenerator(businessInfo);

console.log("🌟 PROMOTIONAL POSTS FOR AWAKENINGS MASSAGE COMPANY");
console.log("🏔️ Colorado Springs' Premier Massage Therapy Destination");
console.log("=" .repeat(65));

// Create custom promotional posts that reflect the elegant brand
const promotionalPosts = [
  {
    type: "Professional Excellence",
    platform: "both",
    caption: "✨ Welcome to Awakenings Massage Company ✨\n\nDiscover tranquility in the heart of Colorado Springs. Our elegant massage therapy sanctuary at 2402 North Nevada Avenue is designed for your complete wellness journey.\n\n🌟 Experience the difference that professional, personalized care makes:\n• Licensed therapeutic massage specialists\n• Customized treatment plans for your needs\n• Serene, spa-like environment\n• Commitment to your wellness goals\n\nYour body deserves the highest standard of care.\n\n📍 2402 North Nevada Avenue, Colorado Springs\n🌐 awakeningsmassagecos.com\n📞 Book your appointment today!",
    hashtags: ["#AwakeningsMassage", "#ColoradoSprings", "#ProfessionalMassage", "#MassageTherapy", "#WellnessJourney", "#Relaxation", "#Colorado", "#NevadaAvenue", "#TherapeuticMassage"],
    visualSuggestion: "Elegant spa interior shot from website, soft lighting, professional treatment room"
  },
  {
    type: "Location/Convenience Focus",
    platform: "instagram",
    caption: "📍 Conveniently located on North Nevada Avenue in Colorado Springs\n\nYour wellness oasis awaits in our beautifully appointed massage therapy studio. Easy parking, serene atmosphere, and expert therapeutic care all in one location.\n\n✨ What sets Awakenings apart:\n• Professional licensed therapists\n• Tranquil, spa-like environment  \n• Personalized treatment approach\n• Convenient Colorado Springs location\n\nReady to awaken your body's natural healing potential?\n\n🌐 awakeningsmassagecos.com",
    hashtags: ["#ColoradoSpringsMassage", "#NevadaAvenue", "#AwakeningsMassage", "#ConvenientLocation", "#ProfessionalMassage", "#WellnessOasis", "#ColoradoWellness"],
    platform: "instagram",
    visualSuggestion: "Exterior shot of location or interior welcoming space from website"
  },
  {
    type: "Colorado Springs Community",
    platform: "facebook",
    caption: "Proud to serve the Colorado Springs community! 🏔️\n\nAt Awakenings Massage Company, we believe every resident of our beautiful city deserves access to professional massage therapy. Whether you're an active outdoor enthusiast who loves our Colorado trails, or someone seeking relief from daily stress, we're here for you.\n\nOur North Nevada Avenue location makes it easy for Colorado Springs residents to prioritize their wellness. From Broadmoor to Old Colorado City, we welcome clients from across our amazing community.\n\n🎁 COMMUNITY APPRECIATION: Mention this post and receive $10 off your service\n\nSchedule online at awakeningsmassagecos.com or call today!\n\n#ProudToServeColoradoSprings",
    hashtags: ["#ColoradoSprings", "#CommunityWellness", "#AwakeningsMassage", "#ColoradoLiving", "#NevadaAvenue", "#LocalBusiness", "#MassageTherapy", "#ColoradoCommunity"],
    visualSuggestion: "Colorado Springs landscape/mountains with spa elements, or community-focused imagery"
  },
  {
    type: "Weekend Special",
    platform: "both", 
    caption: "🌅 Weekend Wellness Special at Awakenings Massage Company\n\nStart your weekend right with the gift of relaxation. Our extended Saturday appointments are perfect for those deeper therapeutic sessions you've been craving.\n\n💆‍♀️ This Weekend Only:\n• 90-minute therapeutic massage sessions\n• Includes hot stone enhancement\n• Perfect for deep relaxation and muscle recovery\n\nLocated at 2402 North Nevada Avenue, Colorado Springs - your wellness sanctuary awaits.\n\n📅 Book your weekend escape today!\n🌐 awakeningsmassagecos.com\n\n*Available Saturday appointments only. Advanced booking recommended.*",
    hashtags: ["#WeekendSpecial", "#AwakeningsMassage", "#ColoradoSprings", "#ExtendedSession", "#HotStone", "#WeekendWellness", "#TherapeuticMassage", "#RelaxationTime"],
    visualSuggestion: "Peaceful weekend morning spa setup, hot stones, or relaxing treatment room"
  },
  {
    type: "Seasonal Colorado Focus",
    platform: "instagram",
    caption: "Colorado winters can be tough on your muscles! ❄️\n\nFrom skiing and snowboarding adventures to dealing with cold weather tension, your body deserves the therapeutic care that Awakenings Massage Company provides.\n\n🏔️ Winter Wellness at its finest:\n✨ Warm, inviting treatment rooms\n✨ Expert therapeutic techniques\n✨ Located right here in Colorado Springs\n✨ Professional care you can trust\n\nDon't let winter aches slow you down. Visit us at 2402 North Nevada Avenue and discover what true relaxation feels like.\n\n❄️ Winter Special: Ask about our muscle recovery packages!\n\n#ColoradoWinter #AwakeningsMassage",
    hashtags: ["#ColoradoWinter", "#WinterWellness", "#SkiRecovery", "#AwakeningsMassage", "#ColoradoSprings", "#MuscleRecovery", "#WinterSpecial", "#TherapeuticMassage"],
    visualSuggestion: "Cozy winter spa interior, warm lighting, or Colorado winter landscape with wellness theme"
  },
  {
    type: "Stress Relief Focus",
    platform: "facebook",
    caption: "Life in Colorado Springs is beautiful, but it can also be stressful. 🌸\n\nFrom work demands to family responsibilities, we all carry tension in our bodies. At Awakenings Massage Company, we understand that massage therapy isn't just luxury - it's essential healthcare.\n\nOur professional approach to stress relief includes:\n• Customized massage techniques for your specific needs\n• Peaceful, elegant environment for complete relaxation\n• Licensed therapists with expertise in stress management\n• Convenient location on North Nevada Avenue\n\n💡 Did you know? Regular massage therapy can:\n→ Lower cortisol (stress hormone) levels\n→ Improve sleep quality\n→ Boost immune system function\n→ Reduce anxiety and depression symptoms\n\nInvest in your mental and physical wellness today.\n\n📞 Call to schedule your stress-relief session\n🌐 awakeningsmassagecos.com",
    hashtags: ["#StressRelief", "#MentalWellness", "#AwakeningsMassage", "#ColoradoSprings", "#HealthBenefits", "#WellnessEducation", "#ProfessionalCare", "#MindBodyHealth"],
    visualSuggestion: "Serene, peaceful spa environment showing relaxation and stress relief"
  }
];

console.log(`\n📝 Generated ${promotionalPosts.length} custom promotional posts:\n`);

promotionalPosts.forEach((post, index) => {
  console.log(`🎯 POST ${index + 1}: ${post.type.toUpperCase()}`);
  console.log(`Platform: ${post.platform.toUpperCase()}`);
  console.log(`\nCaption:\n${post.caption}\n`);
  console.log(`Hashtags: ${post.hashtags.join(' ')}\n`);
  console.log(`📸 Visual Suggestion: ${post.visualSuggestion}\n`);
  console.log("=" .repeat(60));
});

console.log("\n✅ PROMOTIONAL CAMPAIGN READY!");
console.log("💡 These posts highlight your Colorado Springs location, professional services, and elegant brand.");
console.log("📸 Match each post with professional photos from your website or similar spa imagery.");
console.log("🎯 Mix these throughout your regular content schedule for maximum impact!");