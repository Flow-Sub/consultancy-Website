import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import StoryCard from './components/StoryCard';
import VideoTestimonial from './components/VideoTestimonial';
import FilterPanel from './components/FilterPanel';
import StatsOverview from './components/StatsOverview';
import FeaturedStory from './components/FeaturedStory';
import SearchBar from './components/SearchBar';

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [filters, setFilters] = useState({
    serviceType: '',
    country: '',
    profession: '',
    ageRange: '',
    sortBy: 'recent'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStories, setFilteredStories] = useState([]);

  // Mock success stories data
  const successStories = [
    {
      id: 1,
      name: "Ahmed Hassan",
      age: 28,
      profession: "Software Engineer",
      originCity: "Karachi",
      destinationCountry: "UK",
      countryFlag: "🇬🇧",
      serviceType: "Study Visa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      clientPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      preview: `After facing two visa rejections, I was losing hope of studying in the UK. BrightPath's expert guidance helped me understand the real issues with my application and provided a clear roadmap to success.`,fullStory: `After facing two visa rejections, I was losing hope of studying in the UK. BrightPath's expert guidance helped me understand the real issues with my application and provided a clear roadmap to success.\n\nThe team helped me strengthen my financial documentation, improve my statement of purpose, and choose the right university program that aligned with my career goals. Their step-by-step approach and constant support made all the difference.\n\nToday, I'm pursuing my Master's in Computer Science at University of Manchester and have already secured a part-time job on campus. The journey wasn't easy, but BrightPath made it possible.`,
      achievements: [
        "Secured admission to University of Manchester",
        "Obtained UK Student Visa on third attempt",
        "Secured part-time campus job within 2 months",
        "Achieved 7.5 IELTS score with their coaching"
      ],
      keyAchievements: [
        "Overcame two previous visa rejections",
        "Secured admission to top-ranked UK university",
        "Successfully obtained student visa",
        "Currently pursuing Master\'s in Computer Science",
        "Secured part-time employment on campus"
      ],
      processingTime: "3.5 months",
      successRate: 95,
      completionDate: "March 2024",
      hasVideo: true,
      featuredQuote: "BrightPath didn't just help me get a visa - they transformed my entire approach to achieving my dreams. Their expertise and genuine care made all the difference.",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 2,
      name: "Fatima Ali",age: 32,profession: "Doctor",originCity: "Lahore",destinationCountry: "Canada",countryFlag: "🇨🇦",serviceType: "Skilled Immigration",image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",clientPhoto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
      preview: `As a medical professional, navigating Canada's complex immigration system seemed impossible. BrightPath's specialized knowledge of healthcare professional requirements made my dream a reality.`,
      fullStory: `As a medical professional, navigating Canada's complex immigration system seemed impossible. BrightPath's specialized knowledge of healthcare professional requirements made my dream a reality.\n\nThey guided me through the credential recognition process, helped with language proficiency requirements, and ensured all documentation met Canadian standards. The team's expertise in medical immigration was evident throughout the process.\n\nNow I'm working as a resident physician in Toronto and my family has successfully joined me. The quality of life and opportunities here exceed our expectations.`,
      achievements: [
        "Obtained Canadian Permanent Residency","Successfully completed credential recognition","Secured medical residency position in Toronto","Family successfully immigrated together"
      ],
      keyAchievements: [
        "Navigated complex medical credential recognition","Achieved required language proficiency scores","Obtained Canadian Permanent Residency","Secured medical residency in Toronto","Successfully relocated entire family"
      ],
      processingTime: "8 months",successRate: 92,completionDate: "January 2024",hasVideo: true,featuredQuote: "The expertise BrightPath showed in medical immigration was exceptional. They understood the unique challenges healthcare professionals face and provided tailored solutions.",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Muhammad Usman",age: 24,profession: "Student",originCity: "Islamabad",destinationCountry: "Australia",countryFlag: "🇦🇺",serviceType: "Study Visa",image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",clientPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      preview: `Choosing the right university and course in Australia was overwhelming. BrightPath's university partnership program helped me find the perfect match for my career goals.`,
      fullStory: `Choosing the right university and course in Australia was overwhelming. BrightPath's university partnership program helped me find the perfect match for my career goals.\n\nThey provided detailed comparisons of universities, helped with application processes, and ensured I met all visa requirements. Their ongoing support continued even after I arrived in Australia.\n\nI'm now in my second year of Engineering at University of Sydney and have made lifelong friends from around the world. The experience has been transformative.`,
      achievements: [
        "Secured admission to University of Sydney","Obtained Australian Student Visa","Received partial scholarship","Active in student leadership roles"
      ],
      keyAchievements: [
        "Selected ideal university program match","Secured admission to University of Sydney","Obtained student visa without complications","Received merit-based partial scholarship","Actively involved in campus leadership"
      ],
      processingTime: "4 months",successRate: 97,completionDate: "February 2023",hasVideo: false,featuredQuote: "BrightPath's university partnership program was a game-changer. They helped me find not just any university, but the right university for my specific goals.",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Ayesha Khan",
      age: 29,
      profession: "Teacher",
      originCity: "Faisalabad",
      destinationCountry: "New Zealand",
      countryFlag: "🇳🇿",
      serviceType: "Skilled Immigration",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c2b8b4?w=400&h=300&fit=crop",
      clientPhoto: "https://images.unsplash.com/photo-1494790108755-2616c9c2b8b4?w=100&h=100&fit=crop",
      preview: `Moving to New Zealand as an educator required understanding their unique teaching requirements. BrightPath's education sector expertise made the transition seamless.`,
      fullStory: `Moving to New Zealand as an educator required understanding their unique teaching requirements. BrightPath's education sector expertise made the transition seamless.\n\nThey helped me understand the teaching registration process, credential evaluation, and cultural adaptation requirements. The team's knowledge of New Zealand's education system was comprehensive.\n\nI'm now teaching at a primary school in Auckland and absolutely love the work-life balance and educational philosophy here. My students and colleagues have welcomed me warmly.`,
      achievements: [
        "Obtained New Zealand Residence Visa",
        "Completed teaching registration process",
        "Secured teaching position in Auckland",
        "Successfully adapted to NZ education system"
      ],
      keyAchievements: [
        "Navigated teaching credential recognition",
        "Obtained New Zealand Residence Visa",
        "Completed professional teaching registration",
        "Secured permanent teaching position",
        "Successfully integrated into local community"
      ],
      processingTime: "6 months",
      successRate: 94,
      completionDate: "August 2023",
      hasVideo: true,
      featuredQuote: "BrightPath\'s understanding of New Zealand\'s education sector was remarkable. They guided me through every step of becoming a registered teacher there.",
      images: [
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1494790108755-2616c9c2b8b4?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 5,
      name: "Hassan Malik",
      age: 35,
      profession: "Business Owner",
      originCity: "Rawalpindi",
      destinationCountry: "UK",
      countryFlag: "🇬🇧",
      serviceType: "Family Immigration",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
      clientPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
      preview: `Reuniting my family in the UK after establishing my business there was my top priority. BrightPath's family immigration expertise made it possible within months.`,fullStory: `Reuniting my family in the UK after establishing my business there was my top priority. BrightPath's family immigration expertise made it possible within months.\n\nThey handled the complex spouse and dependent visa applications, ensuring all financial and relationship evidence met UK requirements. Their attention to detail was exceptional.\n\nMy wife and children are now with me in London, and we're building our new life together. The children have adapted well to their new schools, and my wife is pursuing her career goals.`,
      achievements: [
        "Successfully reunited family in UK",
        "Obtained spouse and dependent visas",
        "Children enrolled in top schools",
        "Wife pursuing professional development"
      ],
      keyAchievements: [
        "Navigated complex family visa requirements",
        "Successfully obtained spouse visa",
        "Secured dependent visas for children",
        "Family successfully relocated to London",
        "Children integrated into UK education system"
      ],
      processingTime: "5 months",
      successRate: 96,
      completionDate: "November 2023",
      hasVideo: false,
      featuredQuote: "Family reunification seemed daunting, but BrightPath's expertise in family immigration made the impossible possible. We're finally together again.",
      images: [
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 6,
      name: "Zara Ahmed",
      age: 26,
      profession: "Nurse",
      originCity: "Multan",
      destinationCountry: "Canada",
      countryFlag: "🇨🇦",
      serviceType: "Skilled Immigration",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      clientPhoto: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop",
      preview: `As a healthcare worker, I knew Canada needed my skills, but the immigration process seemed complex. BrightPath's healthcare immigration program simplified everything.`,
      fullStory: `As a healthcare worker, I knew Canada needed my skills, but the immigration process seemed complex. BrightPath's healthcare immigration program simplified everything.\n\nThey guided me through the nursing credential recognition, language requirements, and provincial nomination process. Their healthcare-specific expertise was invaluable.\n\nI'm now working as a registered nurse in Vancouver and loving the professional growth opportunities. The healthcare system here values and supports nursing professionals.`,
      achievements: [
        "Obtained Canadian Permanent Residency",
        "Completed nursing credential recognition",
        "Secured RN position in Vancouver",
        "Achieved required language proficiency"
      ],
      keyAchievements: [
        "Successfully completed nursing credential assessment",
        "Achieved required language proficiency scores",
        "Obtained Canadian Permanent Residency",
        "Secured registered nurse position",
        "Successfully relocated and integrated"
      ],
      processingTime: "7 months",
      successRate: 93,
      completionDate: "September 2023",
      hasVideo: true,
      featuredQuote: "BrightPath\'s healthcare immigration program was exactly what I needed. They understood the unique requirements for nursing professionals in Canada.",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop"
      ]
    }
  ];

  // Mock video testimonial data
  const videoTestimonials = [
    {
      id: 1,
      clientName: "Ahmed Hassan",
      clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      serviceType: "Study Visa",
      destinationCountry: "UK",
      videoThumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      videoDuration: "3:45",
      quote: "BrightPath transformed my visa rejection into a success story. Their expertise and support made my UK education dream come true.",
      timeline: [
        {
          title: "Initial Consultation",
          date: "Oct 2023",
          description: "Comprehensive assessment of previous rejections and new strategy development"
        },
        {
          title: "Documentation Review",
          date: "Nov 2023",
          description: "Complete overhaul of financial documents and statement of purpose"
        },
        {
          title: "University Application",
          date: "Dec 2023",
          description: "Applied to University of Manchester with strengthened profile"
        },
        {
          title: "Visa Application",
          date: "Jan 2024",
          description: "Submitted comprehensive visa application with expert guidance"
        },
        {
          title: "Visa Approval",
          date: "Mar 2024",
          description: "Successfully obtained UK Student Visa"
        }
      ],
      currentStatus: "Currently pursuing Master\'s in Computer Science at University of Manchester. Secured part-time campus job and maintaining excellent academic performance.",
      likes: 234,
      comments: 45,
      shares: 67
    }
  ];

  // Featured story (first story from the list)
  const featuredStory = successStories?.[0];

  // Filter and search functionality
  useEffect(() => {
    let filtered = [...successStories];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered?.filter(story =>
        story?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        story?.profession?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        story?.destinationCountry?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        story?.serviceType?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        story?.originCity?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    // Apply filters
    if (filters?.serviceType) {
      filtered = filtered?.filter(story => story?.serviceType === filters?.serviceType);
    }
    if (filters?.country) {
      filtered = filtered?.filter(story => story?.destinationCountry === filters?.country);
    }
    if (filters?.profession) {
      filtered = filtered?.filter(story => story?.profession === filters?.profession);
    }
    if (filters?.ageRange) {
      const [min, max] = filters?.ageRange?.split('-')?.map(Number);
      filtered = filtered?.filter(story => {
        if (max) {
          return story?.age >= min && story?.age <= max;
        } else {
          return story?.age >= min;
        }
      });
    }

    // Apply sorting
    switch (filters?.sortBy) {
      case 'recent':
        filtered?.sort((a, b) => new Date(b.completionDate) - new Date(a.completionDate));
        break;
      case 'oldest':
        filtered?.sort((a, b) => new Date(a.completionDate) - new Date(b.completionDate));
        break;
      case 'popular':
        filtered?.sort((a, b) => b?.id - a?.id); // Mock popularity sort
        break;
      case 'processing-time':
        filtered?.sort((a, b) => parseFloat(a?.processingTime) - parseFloat(b?.processingTime));
        break;
      default:
        break;
    }

    setFilteredStories(filtered);
  }, [searchQuery, filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      serviceType: '',
      country: '',
      profession: '',
      ageRange: '',
      sortBy: 'recent'
    });
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleVoiceSearch = () => {
    // Mock voice search functionality
    const voiceQueries = ['UK Study Visa', 'Software Engineer', 'Canada Immigration'];
    const randomQuery = voiceQueries?.[Math.floor(Math.random() * voiceQueries?.length)];
    setSearchQuery(randomQuery);
  };

  const handleViewDetails = (story) => {
    setSelectedStory(story);
    if (story?.hasVideo) {
      setShowVideoModal(true);
    }
  };

  const handleViewVideo = (story) => {
    const videoTestimonial = videoTestimonials?.find(v => v?.clientName === story?.name) || videoTestimonials?.[0];
    setSelectedStory(videoTestimonial);
    setShowVideoModal(true);
  };

  const handleCloseVideo = () => {
    setShowVideoModal(false);
    setSelectedStory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Trophy" size={32} className="text-accent" />
              <h1 className="font-headline font-bold text-4xl lg:text-5xl text-gray-900">
                Success Stories
              </h1>
              <Icon name="Trophy" size={32} className="text-accent" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real journeys, real achievements. Discover how BrightPath Consultancy has transformed 
              dreams into documented success stories across the globe.
            </p>
            
            {/* Quick Stats */}
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2,847+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">95.2%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar 
              onSearch={handleSearch}
              onVoiceSearch={handleVoiceSearch}
            />
          </div>

          {/* Stats Overview */}
          <div className="mb-12">
            <StatsOverview />
          </div>

          {/* Featured Story */}
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="Star" size={24} className="text-accent" />
              <h2 className="font-headline font-bold text-2xl text-gray-900">
                Featured Success Story
              </h2>
            </div>
            <FeaturedStory 
              story={featuredStory}
              onViewVideo={handleViewVideo}
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <FilterPanel
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                  totalResults={filteredStories?.length}
                />
              </div>
            </div>

            {/* Stories Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline font-bold text-2xl text-gray-900">
                  All Success Stories
                </h2>
                <div className="text-sm text-gray-600">
                  Showing {filteredStories?.length} of {successStories?.length} stories
                </div>
              </div>

              {filteredStories?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredStories?.slice(1)?.map((story) => (
                    <StoryCard
                      key={story?.id}
                      story={story}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="font-headline font-semibold text-lg text-gray-900 mb-2">
                    No stories found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or filters to find relevant success stories.
                  </p>
                  <Button
                    variant="outline"
                    onClick={handleClearFilters}
                    iconName="RefreshCw"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}

              {/* Load More Button */}
              {filteredStories?.length > 6 && (
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="ChevronDown"
                    iconPosition="right"
                    iconSize={16}
                  >
                    Load More Stories
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline font-bold text-3xl text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful clients who achieved their immigration dreams with BrightPath Consultancy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact-consultation">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-gray-50"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
              >
                Book Free Consultation
              </Button>
            </Link>
            <Link to="/study-visa-services">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={20}
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Video Testimonial Modal */}
      {showVideoModal && selectedStory && (
        <VideoTestimonial
          testimonial={selectedStory}
          onClose={handleCloseVideo}
        />
      )}
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-headline font-bold text-xl">BrightPath</div>
                  <div className="text-sm text-gray-400">Consultancy</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your trusted partner in achieving global education and immigration success. 
                Government-verified expertise you can rely on.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Shield" size={16} className="text-brand-gold" />
                  <span className="text-brand-gold">Government Verified</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Award" size={16} className="text-success" />
                  <span className="text-success">Licensed</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/homepage" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/study-visa-services" className="text-gray-400 hover:text-white transition-colors">Study Visa</Link></li>
                <li><Link to="/partner-universities" className="text-gray-400 hover:text-white transition-colors">Universities</Link></li>
                <li><Link to="/client-portal" className="text-gray-400 hover:text-white transition-colors">Client Portal</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-headline font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+92 300 1234567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>Info@brightpathsconsultancy.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date()?.getFullYear()} BrightPath Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SuccessStories;