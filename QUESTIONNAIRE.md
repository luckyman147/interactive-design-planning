# Interactive Questionnaire System

**Document:** QUESTIONNAIRE.md  
**Updated:** June 2026  
**Purpose:** Understand how the questionnaire works and how answers drive personalization

---

## Why a Questionnaire?

### The Problem with Generic Templates

Old approach:
```
User gets → Generic template
User fills in → Vague sections
User makes → Dozens of decisions
Result → Plan that might not fit their project
```

### The Solution: Interactive Questionnaire

New approach:
```
User answers → 6 focused questions
System understands → Exact requirements
System generates → Personalized plan
Result → Ready-to-execute plan tailored to their project
```

---

## The 6 Questionnaire Questions

### Question 1: Website Type

**Purpose:** Understand the primary business model and content structure

**Options:**
1. **Portfolio/Creative Showcase** - Display creative work (design, 3D, photography, art)
2. **Agency** - Professional services with case studies and client testimonials
3. **SaaS/Product** - Software or web app landing page with features and pricing
4. **Museum/Cultural** - Educational or narrative content (museums, publications, archives)
5. **E-commerce** - Sell products online with shopping cart and checkout
6. **Web3/Crypto** - Blockchain projects, NFTs, or crypto platforms
7. **Luxury/Premium Service** - High-end consulting, boutique services, exclusive offerings

**How It Customizes the Plan:**
- **Portfolio:** Sections = Hero → Featured Work → About → Process → Contact
  - Components: ProjectCard (sticky), ImageGallery, About section
  - Animation: Heavy (to showcase work)
  
- **Agency:** Sections = Hero → Case Studies → Services → Team → Testimonials → Contact
  - Components: CaseStudyCard (video), Testimonial carousel
  - Animation: Medium (professional feel)
  
- **SaaS:** Sections = Hero → Features → Pricing → Testimonials → FAQ → CTA
  - Components: FeatureCard, PricingTable, FAQ accordion
  - Animation: Light-Medium (focus on clarity)
  
- **Museum:** Sections = Hero → Collections → Interactive exhibits → Info → Visit
  - Components: NavigationTabs, GalleryGrid, Timeline
  - Animation: Medium (editorial feel)
  
- **E-commerce:** Sections = Hero → Featured products → Categories → Reviews → Cart
  - Components: ProductCard (zoom), ShoppingCart, Reviews
  - Animation: Medium (engagement)
  
- **Web3:** Sections = Hero → Token info → Community → Roadmap → Trade
  - Components: TokenChart, CommunityLinks, Roadmap timeline
  - Animation: Heavy (futuristic feel)
  
- **Luxury:** Sections = Hero → Story → Offerings → Testimonials → Contact
  - Components: TestimonialCard, OfferingCard
  - Animation: Light (refined elegance)

---

### Question 2: Primary Goal

**Purpose:** Understand the main conversion path and user intent

**Options:**
1. **Showcase work/portfolio** - Let your work impress visitors (primary goal is portfolio display)
2. **Explain product benefits** - Convert via clear feature/benefit explanation
3. **Tell a story/narrative** - Engage through storytelling and emotional connection
4. **Capture leads/sales** - Drive form submissions, email captures, or purchases
5. **Build community** - Foster engagement, discussion, and member retention
6. **Display information** - Educational or reference content

**How It Customizes the Plan:**
- **Showcase work:** 
  - Hero focus: Large, impressive imagery
  - CTA: "View work" / "View project"
  - Component emphasis: Gallery, ProjectCard, MagnetHover
  - Layout: Grid, sticky-stacking, or carousel

- **Explain benefits:**
  - Hero focus: Clear value proposition
  - CTA: "Get started" / "Sign up"
  - Component emphasis: FeatureCard, Benefits grid, Testimonials
  - Layout: Feature list, comparison table

- **Tell story:**
  - Hero focus: Narrative headline
  - CTA: "Learn more" / "Explore"
  - Component emphasis: StorySection, Timeline, Media background
  - Layout: Scroll-driven narrative, chapter-based

- **Capture leads:**
  - Hero focus: Compelling CTA
  - CTA: "Sign up" / "Request demo" / "Contact us"
  - Component emphasis: Form, EmailCapture, CtaButton
  - Layout: Form-forward, prominent CTA placement

- **Build community:**
  - Hero focus: Community value
  - CTA: "Join" / "Become member"
  - Component emphasis: CommunityLinks, UserGrid, Comments
  - Layout: Social proof, member showcase

- **Display information:**
  - Hero focus: Navigation clarity
  - CTA: Search or category navigation
  - Component emphasis: SearchBar, CategoryFilter, InfoCard
  - Layout: Organized index, clear navigation

---

### Question 3: Animation Style ⭐ (Most Important)

**Purpose:** Determine tech stack, component complexity, and performance budgets

**Options:**

#### 1. Minimal & Professional
**Description:** Clean fades, subtle hover effects, smooth scrolling. Video background plays silently.

**Tech Stack Implications:**
- Framework: React + Tailwind CSS (no heavy libraries)
- Animation library: CSS only or Framer Motion (light usage)
- 3D: None
- Performance: FCP <1.2s, LCP <2s, Lighthouse >95

**Components:**
- Button hover: Simple opacity/color change
- Scroll effects: Fade-in on scroll only
- Navigation: Smooth slide or fade
- Video: Background video, muted, autoplay

**Use case:** SaaS, corporate, B2B, trust-focused

**Example:** Equilibrium wellness app - liquid glass nav, video background, minimal animations

---

#### 2. Moderate & Engaging
**Description:** Smooth scroll-reveal animations, fade-in-up on page scroll, animated buttons with ripple effects, text transitions, some parallax on hero section.

**Tech Stack Implications:**
- Framework: React + Tailwind + Framer Motion
- Animation: Scroll-triggered animations, stagger sequences
- 3D: None (or minimal CSS 3D)
- Performance: FCP <1.5s, LCP <2.5s, Lighthouse >90

**Components:**
- Button hover: Scale, ripple effect
- Scroll effects: Fade-in-up, stagger (80-100ms between items)
- Parallax: Hero section only, subtle
- Text animation: Character-by-character reveal (optional)

**Use case:** Product launches, modern brands, creative portfolios

**Example:** Modern agency site - smooth transitions, hover scales, light parallax

---

#### 3. Heavy 3D & Interactive
**Description:** Mouse-tracking parallax effects, scroll-driven 3D transforms, sticky-stacking cards that scale on scroll, video interactions, character-by-character text animations, magnetic hover effects, complex entrance choreography.

**Tech Stack Implications:**
- Framework: React + Tailwind + Framer Motion + Three.js
- Animation: Complex scroll-driven choreography, 3D transforms
- 3D: Yes (Three.js for backgrounds or particle effects)
- Performance: FCP <1.8s, LCP <3s, Lighthouse >85-90

**Components:**
- Button hover: Magnetic pull, scale, glow
- Scroll effects: 3D perspective, skew, parallax depth
- Cards: Sticky-stack behavior, scale on scroll
- Particles: Background particle system
- Text: Word-by-word or character-by-character animations

**Use case:** Creative portfolios, luxury brands, tech startups, Web3

**Example:** 3D portfolio - sticky cards, mouse tracking, 3D parallax, magnetic hovers

---

#### 4. Maximum Interactive (Cinema-Grade) ⭐
**Description:** All of above PLUS: Video crossfades, custom SVG animations, scroll-linked blur effects, 3D perspective transforms, particle effects, animated SVG filters (sand transitions, noise overlays), smooth lens effects, advanced easing curves.

**Tech Stack Implications:**
- Framework: React + Tailwind + Framer Motion + Three.js + custom SVG
- Animation: Advanced choreography, SVG morphing, video blending
- 3D: Yes (advanced Three.js for 3D effects, particle systems)
- Custom: SVG filters, animated gradients, advanced easing
- Performance: FCP <2s, LCP <3.5s, Lighthouse >80-85

**Components:**
- Button hover: Complex magnetic behavior, advanced easing
- Scroll effects: Blur, 3D perspective, parallax depth, combined effects
- Cards: Complex entrance sequences, staggered animations
- SVG: Animated logos, morphing shapes, custom filters
- Video: Crossfade effects, interactive video playback
- Particles: Advanced particle system with physics
- Text: Complex entrance choreography, animated glyphs

**Use case:** High-end creative studios, immersive experiences, premium brands, film-like websites

**Example:** Premium creative studio - SVG animations, particle effects, video crossfades, advanced 3D

---

**How It Customizes the Plan:**

| Aspect | Minimal | Moderate | Heavy | Cinema-Grade |
|--------|---------|----------|-------|--------------|
| **Framework** | React + CSS | React + Framer Motion | React + Framer + Three | React + Framer + Three + SVG |
| **Animation Duration** | 200-300ms | 300-400ms | 400-600ms | 400-800ms |
| **Stagger Delay** | None | 80-100ms | 100-150ms | 80-200ms (varied) |
| **Performance Budget** | 95+ | 90+ | 85-90 | 80-85 |
| **FCP Target** | <1.2s | <1.5s | <1.8s | <2s |
| **3D Effects** | None | None | Yes (basic) | Yes (advanced) |
| **Particle Effects** | None | None | Optional | Yes |
| **Custom Effects** | None | None | Parallax | Blur, lens, SVG filters |
| **Timeline** | 5 days | 7 days | 9 days | 10-12 days |

---

### Question 4: Color Aesthetic

**Purpose:** Define visual tone and emotional impact

**Options:**

1. **Dark + Vibrant Accents**
   - Base: Dark background (#0C0C0C or #111)
   - Accents: 2-3 bright colors (magenta, cyan, orange)
   - Mood: Creative, energetic, premium
   - Use: Portfolios, creative studios, Web3
   - Example: Magenta on dark = futuristic luxury

2. **Light + Professional**
   - Base: White or light gray (#FFFFFF or #F5F5F5)
   - Accent: 1 professional color (blue, green, teal)
   - Mood: Clean, trustworthy, corporate
   - Use: SaaS, agencies, B2B
   - Example: Teal accent on white = professional + approachable

3. **Monochromatic Editorial**
   - Base: Single color family (grays, blacks, or subtle tints)
   - Accent: Neutral (white, light gray, or same family darker)
   - Mood: Refined, editorial, minimalist
   - Use: Museums, publications, luxury
   - Example: Grayscale with white = editorial elegance

4. **Colorful & Playful**
   - Base: Bright or medium-tone color
   - Accents: Multiple vibrant colors
   - Mood: Fun, energetic, youthful
   - Use: Apps, communities, consumer brands
   - Example: Bright rainbow = playful + engaging

5. **Luxury Minimal**
   - Base: Neutral (white, beige, light tan)
   - Accents: Single subtle color or none
   - Mood: Exclusive, sophisticated, refined
   - Use: Luxury services, premium brands
   - Example: White + subtle gold = exclusive elegance

**How It Customizes the Plan:**
- **Design System** colors (all customized)
- **Accent color** for CTAs and interactive elements
- **Contrast ratios** (WCAG AA or AAA)
- **Dark mode** variant (if applicable)
- **Component appearance** (glass, flat, shadow depth)

---

### Question 5: Target Audience

**Purpose:** Determine tone, language, and interaction patterns

**Options:**

1. **Creative professionals** - Designers, directors, artists, photographers
2. **Enterprise/B2B** - Businesses, decision-makers, corporate buyers
3. **Consumers/Public** - Everyday users, shoppers, general public
4. **Investors/Stakeholders** - VCs, partners, financial decision-makers
5. **Specialists** - Doctors, lawyers, consultants, experts
6. **Community members** - Fans, subscribers, builders, enthusiasts

**How It Customizes the Plan:**
- **Tone:** Professional vs. casual vs. technical
- **Interactions:** Complex forms vs. simple CTAs
- **Trust signals:** Testimonials (consumers) vs. credentials (specialists) vs. metrics (investors)
- **Content depth:** Detailed explanations vs. executive summaries
- **Navigation:** Intuitive (consumers) vs. comprehensive (professionals)

---

### Question 6: Key Feature/Differentiator

**Purpose:** Prioritize the most important element

**Options:**

1. **Showcase work** - Portfolio pieces, case studies, project grid
2. **Explain benefits** - Features list, benefits grid, how-it-works section
3. **Interactive experience** - Tools, 3D explorations, interactive demos
4. **Video/media** - Hero video, video showcase, background videos
5. **Navigation/discovery** - Category filters, search, chapter navigation
6. **Form/capture** - Email capture, contact form, booking system

**How It Customizes the Plan:**
- **Hero section** design (imagery vs. CTA vs. video vs. interactive)
- **Component priority** (which components are critical vs. optional)
- **Section order** (feature first, explore later, etc.)
- **CTA placement** (hero vs. throughout vs. footer)
- **Mobile optimization** (scrollable feature vs. tap-to-interact, etc.)

---

## Example Answer → Plan Mapping

### Example 1: Creative Director (Cinema-Grade Animations)

**Answers:**
```
Q1: Portfolio/Creative Showcase
Q2: Showcase work
Q3: Maximum Interactive (Cinema-Grade)
Q4: Dark + Vibrant Accents
Q5: Creative professionals
Q6: Showcase work
```

**Customizations:**
- **Color System:** Dark #0C0C0C base, magenta #B600A8 primary, orange tertiary
- **Animation Tier:** Cinema-grade (sticky cards, 3D parallax, SVG animations, particles)
- **Components:** ProjectCard (critical, with 3D), StickyStack, ParticleBackground, MagnetHover
- **Hero:** 3D animated background with scroll parallax
- **Sections:** Featured Work (sticky-stack) → About → Process → Contact
- **Timeline:** 10-12 days with advanced animation choreography
- **Tech Stack:** React + Framer Motion + Three.js + Vite

### Example 2: SaaS Dashboard (Minimal Professional)

**Answers:**
```
Q1: SaaS/Product
Q2: Explain benefits
Q3: Minimal & Professional
Q4: Light + Professional
Q5: Enterprise/B2B
Q6: Explain benefits
```

**Customizations:**
- **Color System:** White background, blue #3B82F6 action color
- **Animation Tier:** Minimal (fade-in, hover effects only)
- **Components:** FeatureCard (critical), PricingTable (critical), Form (critical)
- **Hero:** Clear value proposition, CTAs prominent
- **Sections:** Features → Pricing → Testimonials → FAQ → Contact
- **Timeline:** 5 days (fast, focused on clarity)
- **Tech Stack:** React + Tailwind CSS

### Example 3: Museum Site (Moderate Narrative)

**Answers:**
```
Q1: Museum/Cultural
Q2: Tell a story/narrative
Q3: Moderate & Engaging
Q4: Monochromatic Editorial
Q5: Community members
Q6: Navigation/discovery
```

**Customizations:**
- **Color System:** Grayscale (black, white, grays)
- **Animation Tier:** Moderate (scroll reveals, fade-in-up)
- **Components:** NavigationTabs (critical), GalleryGrid (critical), FadeIn
- **Hero:** Centered, elegant typography, subtle animations
- **Sections:** Collections (tabs) → Interactive Exhibits → Info → Visit
- **Timeline:** 7 days (narrative-focused)
- **Tech Stack:** React + Framer Motion + Tailwind

---

## How Questionnaire Drives Personalization

Each answer influences multiple sections:

```
Website Type
    ↓
    ├→ Default section layout
    ├→ Component library (critical/important/optional)
    ├→ Hero section variant
    └→ Content structure

Primary Goal
    ↓
    ├→ CTA placement and messaging
    ├→ Section order
    ├→ Component priorities
    └→ Interaction patterns

Animation Style
    ↓
    ├→ Tech stack selection
    ├→ Performance budgets
    ├→ Component complexity
    └→ Timeline estimate

Color Aesthetic
    ↓
    ├→ Design system colors
    ├→ Contrast ratios
    ├→ Component appearance
    └→ Brand direction

Target Audience
    ↓
    ├→ Tone and messaging
    ├→ Interaction complexity
    ├→ Trust signals
    └→ Accessibility requirements

Key Feature
    ↓
    ├→ Hero focus
    ├→ Component hierarchy
    ├→ CTA strategy
    └→ Mobile optimization
```

---

## Personalization Output

Based on the 6 answers, the system generates:

### 1. Phase 1: Aesthetic Direction
- Project statement (customized to type + goal)
- Design language (matching aesthetic choice)
- Visual storytelling approach

### 2. Phase 2: Design System
- Color palette (specific to aesthetic choice)
- Typography (matched to project type)
- Motion system (calibrated to animation tier)
- Spacing and elevation (consistent with style)

### 3. Phase 3: Tech Stack & Animation
- Framework selection (based on animation tier)
- Performance targets (specific to tier)
- Animation libraries and patterns
- Estimated timeline

### 4. Phase 4: 5-Tier Roadmap
- Section layout (matched to website type)
- Component checklist (filtered by criticality)
- Animation patterns (specific to animation tier)
- Mobile optimization strategy

### 5. Phase 5: Master Prompt
- All system details personalized to answers
- Component specifications (colors, sizes, animations)
- Code examples matching animation tier
- Ready-to-copy prompt for Claude Design

---

## Tips for Best Results

**Answer Q1-Q2 first:** These determine the overall structure  
**Spend time on Q3:** Animation preference drives everything else  
**Be honest about Q5:** Audience impacts interaction complexity  
**Choose Q6 carefully:** Determines hero focus and component priorities

The more thoughtful your answers, the more personalized and effective the plan will be.

---

## Next Steps

1. Run the questionnaire: `npx skill create-interactive-website`
2. Answer 6 questions carefully
3. Review your personalized implementation plan
4. Adjust if needed (the plan is a starting point, not a constraint)
5. Paste master prompt into Claude Design to build

