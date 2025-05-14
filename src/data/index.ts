import { NavItem, Project, Skill, Testimonial, SocialLink } from '../types';
import { 
  Briefcase, Users, BarChart, Calendar, Target, PenTool, 
  GitMerge, LineChart, Clock, DollarSign, Award, BadgeCheck,
  Linkedin, Mail
} from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  {
    name: 'Project Planning',
    level: 95,
    description: 'Expertise in developing comprehensive project plans, timelines, and resource allocations.'
  },
  {
    name: 'Team Leadership',
    level: 90,
    description: 'Experience leading cross-functional teams and fostering collaborative work environments.'
  },
  {
    name: 'Stakeholder Management',
    level: 85,
    description: 'Proven ability to manage stakeholder expectations and ensure clear communication.'
  },
  {
    name: 'Risk Management',
    level: 90,
    description: 'Skilled at identifying potential risks and developing mitigation strategies.'
  },
  {
    name: 'Agile Methodologies',
    level: 85,
    description: 'Certified Scrum Master with experience in Agile project management frameworks.'
  },
  {
    name: 'Budget Management',
    level: 80,
    description: 'Track record of delivering projects within budget constraints while maintaining quality.'
  },
];

export const projects: Project[] = [
  {
    id: 'healthcare-platform',
    title: 'Healthcare Platform Migration',
    description: 'Led the migration of a legacy healthcare platform to a modern cloud-based solution, ensuring minimal disruption to daily operations.',
    image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Healthcare', 'Cloud Migration', 'Enterprise', 'Agile'],
    metrics: [
      'Completed 2 months ahead of schedule',
      'Reduced operational costs by 32%',
      'Improved system uptime from 97.2% to 99.9%',
      'Managed a team of 15 developers and specialists'
    ],
    year: '2023'
  },
  {
    id: 'retail-transformation',
    title: 'Retail Digital Transformation',
    description: 'Managed the implementation of an omnichannel retail solution for a national retail chain with 200+ locations.',
    image: 'https://images.pexels.com/photos/10853958/pexels-photo-10853958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Retail', 'Digital Transformation', 'E-commerce', 'POS'],
    metrics: [
      'Increased online sales by 47% within 6 months',
      'Reduced checkout time by 35%',
      '$1.2M under budget',
      'Coordinated deployment across 230 locations'
    ],
    year: '2022'
  },
  {
    id: 'fintech-app',
    title: 'FinTech Mobile App Launch',
    description: 'Led the development and launch of a mobile banking application focusing on user experience and security compliance.',
    image: 'https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['FinTech', 'Mobile App', 'UX Design', 'Security'],
    metrics: [
      '500,000 downloads in first quarter',
      '4.8/5 average app store rating',
      'Achieved all security compliance requirements',
      'Reduced development timeline by 25%'
    ],
    year: '2021'
  },
  {
    id: 'manufacturing-erp',
    title: 'Manufacturing ERP Implementation',
    description: 'Managed the implementation of an enterprise resource planning system for a manufacturing company with international operations.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Manufacturing', 'ERP', 'Process Optimization', 'International'],
    metrics: [
      'Streamlined 27 core business processes',
      'Reduced inventory costs by 23%',
      'Improved production planning accuracy by 40%',
      'Managed $4.5M budget'
    ],
    year: '2020'
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "An exceptional project manager who consistently delivers results. Their strategic approach to our healthcare platform migration saved us months of potential downtime and millions in operational costs.",
    author: "Dr. Sarah Johnson",
    position: "CTO",
    company: "HealthFirst Systems",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: '2',
    quote: "Working with this project manager transformed our retail operations. Their ability to coordinate complex implementations across hundreds of locations while maintaining quality was impressive.",
    author: "Michael Chen",
    position: "VP of Operations",
    company: "RetailNow Inc.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: '3',
    quote: "Their leadership on our mobile app project was outstanding. They have a rare ability to balance technical requirements, user experience, and business objectives while keeping the team motivated.",
    author: "Jessica Williams",
    position: "Product Director",
    company: "FinanceApp",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dave-brooke-755161b8/',
    icon: Linkedin
  },
  {
    platform: 'Email',
    url: 'mailto:davidtbrooke@gmail.com',
    icon: Mail
  }
];

export const stats = [
  { value: '10+', label: 'Years Experience', icon: Briefcase },
  { value: '50+', label: 'Projects Completed', icon: Briefcase },
  { value: '200+', label: 'Team Members Led', icon: Users },
  { value: '$50M+', label: 'Budget Managed', icon: DollarSign },
];

export const services = [
  {
    title: 'Project Planning & Execution',
    description: 'Comprehensive project planning from inception to completion, ensuring all deliverables are met on time and within budget.',
    icon: Calendar
  },
  {
    title: 'Team Management & Leadership',
    description: 'Building and leading high-performing teams, fostering collaboration and driving results through effective leadership.',
    icon: Users
  },
  {
    title: 'Stakeholder Management',
    description: 'Strategic stakeholder management ensuring clear communication and alignment throughout the project lifecycle.',
    icon: BarChart
  },
  {
    title: 'Risk Mitigation',
    description: 'Proactive identification and mitigation of risks to ensure smooth project execution and minimal disruption.',
    icon: Target
  },
];

export const certifications = [
  { name: 'Project Management Professional (PMP)', organization: 'PMI', year: '2018', icon: Award },
  { name: 'Certified ScrumMaster (CSM)', organization: 'Scrum Alliance', year: '2019', icon: BadgeCheck },
  { name: 'PRINCE2 Practitioner', organization: 'AXELOS', year: '2020', icon: Award },
  { name: 'Professional Scrum Product Owner', organization: 'Scrum.org', year: '2021', icon: BadgeCheck },
];