import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, GitlabIcon, Send, MessageCircle, Calendar, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  const contactInfo = [
    
    {
      icon: Mail,
      label: 'Email',
      value: 'pratibhasoni757@gmail.com',
      href: 'mailto:pratibhasoni757@gmail.com',
      color: 'text-theme-accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur, India',
      href: '#',
      color: 'text-cyan-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/pratibha1304',
      color: 'text-theme-muted hover:text-theme-text'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pratibha-soni-04a34a230',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: GitlabIcon,
      label: 'GitLab',
      href: 'https://gitlab.com/pratibha1304',
      color: 'text-orange-400 hover:text-orange-300'
    }
  ];

  return (
    <section id="contact" className="py-20 section-bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-theme-accent rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-theme-accent rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-theme-text mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-theme-text-secondary max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on something amazing? Whether it's a project idea, 
            job opportunity, or just a tech chat - I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-theme-text mb-6">Get in Touch</h3>
              <p className="text-theme-text-secondary mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                or simply connect with fellow developers and tech enthusiasts. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-theme-card border border-theme-border rounded-xl hover:border-theme-accent transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-full bg-theme-secondary ${contact.color} group-hover:bg-theme-accent/20 transition-all duration-300`}>
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-theme-text">{contact.label}</h4>
                    <p className="text-theme-text-secondary group-hover:text-theme-accent transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-theme-text mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 card hover:border-theme-accent/50 transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h4 className="text-xl font-bold text-theme-text mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-theme-accent mb-1">24h</div>
                  <div className="text-theme-muted text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">100%</div>
                  <div className="text-theme-muted text-sm">Project Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">6+</div>
                  <div className="text-theme-muted text-sm">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">2+</div>
                  <div className="text-theme-muted text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-theme-text mb-6 flex items-center gap-3">
                <MessageCircle className="text-theme-accent" size={28} />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-theme-text-secondary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-theme-secondary/50 border border-theme-border rounded-xl text-theme-text placeholder-gray-400 focus:outline-none focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-theme-text-secondary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-theme-secondary/50 border border-theme-border rounded-xl text-theme-text placeholder-gray-400 focus:outline-none focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-theme-text-secondary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-theme-secondary/50 border border-theme-border rounded-xl text-theme-text placeholder-gray-400 focus:outline-none focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20 transition-all duration-300"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-theme-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-theme-secondary/50 border border-theme-border rounded-xl text-theme-text placeholder-gray-400 focus:outline-none focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-3 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 pt-6 border-t border-theme-border">
                <p className="text-theme-muted text-sm text-center">
                  Prefer email? Reach me directly at{' '}
                  <a 
                    href="mailto:pratibhasoni757@gmail.com" 
                    className="text-theme-accent hover:text-theme-accent-secondary transition-colors"
                  >
                    pratibhasoni757@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card p-8">
            <h3 className="text-3xl font-bold text-theme-text mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-theme-text-secondary mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'm always open to new opportunities and connections.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:pratibhasoni757@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={20} />
                Email Me
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/pratibha-soni-a9b1b3250"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

