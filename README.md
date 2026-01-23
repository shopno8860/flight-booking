# ✈️ CheapFlights - Flight Booking Application

A modern, responsive flight booking web application built with React, Vite, and Tailwind CSS. Users can search for flights, select seats, make payments, and receive booking confirmations.

**🌐 [View Live Demo](https://shopno8860.github.io/flight-booking/)** | **📖 [View Documentation](#-pages-overview)**

## 🎯 Features

### Core Functionality
- **Flight Search**: Search flights with departure/arrival cities, dates, cabin class, and passenger count
- **Flight Listings**: Browse available flights with detailed information, pricing, and status
- **Seat Selection**: Interactive aircraft cabin layout to select preferred seats
- **Payment Processing**: Secure payment form with validation and order summary
- **Booking Confirmation**: Complete booking details with downloadable confirmation
- **Form Validation**: Real-time validation with user-friendly error messages

### UI/UX
- **Modern Design System**: Custom Tailwind CSS theme with 5 color families
- **Responsive Layout**: Mobile-first design that works on all screen sizes
- **Smooth Transitions**: 300ms animations and hover effects
- **Professional Components**: Gradient headers, card-based layouts, modal dialogs
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support

### Design Features
- Hero section with background image
- Feature cards grid
- Destination cards with pricing
- Blog posts section with proper card alignment
- Popular airlines showcase
- Interactive seat selection with visual feedback
- Professional payment and confirmation flows

## 🛠️ Tech Stack

### Frontend
- **React 18.3**: UI library with hooks
- **Vite 6.4**: Fast build tool and dev server
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **React Router v7**: Client-side routing
- **React Icons 5.5**: Icon library
- **Font Awesome 6.7**: Professional icons

### Build & Development
- **PostCSS**: CSS transformation
- **Autoprefixer**: Browser compatibility
- **ESLint**: Code quality
- **Node.js**: Runtime environment

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm 8+

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd flight-booking
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The app will be available at `http://localhost:5173/flight-booking/`

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
flight-booking/
├── src/
│   ├── components/
│   │   ├── about/          # About page with Tailwind CSS
│   │   ├── confirmation/   # Booking confirmation with success state
│   │   ├── contact/        # Contact form page
│   │   ├── flight/         # Flight listings with filters
│   │   ├── flightlist/     # Flight details view
│   │   ├── footer/         # Dark theme footer with social links
│   │   ├── header/         # Responsive navigation header
│   │   ├── home/           # Landing page with hero, features, blog
│   │   ├── payment/        # Payment form with validation
│   │   ├── seat/           # Interactive seat selection
│   │   ├── topbar/         # Contact info and social icons
│   │   └── [component]/
│   │       ├── [Component].jsx
│   │       └── [Component].css
│   ├── assets/             # Images and static files
│   ├── App.jsx             # Main app router
│   ├── App.css             # Global styles (minimal)
│   ├── index.css           # Tailwind directives & components
│   └── main.jsx            # React entry point
├── public/                 # Static public files
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint rules
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Design System

### Color Palette

#### Primary (Blue)
- primary-50 through primary-900 (9 shades)
- Base: #3498db
- Used for: Main buttons, links, accents

#### Secondary (Navy)
- secondary-50 through secondary-900 (9 shades)
- Base: #273746
- Used for: Headers, text, dark backgrounds

#### Accent (Aqua)
- accent-50 through accent-900 (9 shades)
- Base: #00e6e6
- Used for: Highlights, special callouts

#### Success (Green)
- success-50 through success-900 (9 shades)
- Base: #28b463
- Used for: Positive states, confirmations

#### Warning (Orange)
- warning-50 through warning-900 (9 shades)
- Base: Orange/yellow palette
- Used for: Warnings, important notices

### Typography

#### Font Family
- System font stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif

#### Font Sizes
- xs: 0.75rem
- sm: 0.875rem
- base: 1rem
- lg: 1.125rem
- xl: 1.25rem
- 2xl: 1.5rem
- 3xl: 1.875rem
- 4xl: 2.25rem
- 5xl: 3rem
- 6xl: 3.75rem

### Component Classes

#### Buttons
- `.btn-primary`: Blue gradient primary button
- `.btn-secondary`: Navy secondary button
- `.btn-success`: Green success button
- `.btn-warning`: Orange warning button
- `.btn-outline`: Outlined variant

#### Forms
- `.form-input`: Styled text input with focus states
- `.form-label`: Labeled input with proper spacing
- Error states with red borders and backgrounds

#### Cards
- `.card-hover`: Scale and shadow on hover
- Rounded corners (2xl = 1rem)
- Shadow effects (md, lg)

## 📖 Pages Overview

### Home (`/`)
- Hero section with booking form
- Features grid (4 cards)
- Destinations grid (3 cards)
- Blog posts section (3 cards with proper footer alignment)
- Popular airlines showcase (4 airlines)

**Features:**
- Form validation (required fields, date selection)
- Background image support
- Responsive grid layouts
- Interactive elements

### Flights (`/flights`)
- Search flights filtered by criteria
- Flight cards with detailed info
- Color-coded status badges
- Price display with gradients
- Seat availability indicators

### Seat Selection (`/seat`)
- Interactive 6×10 aircraft cabin layout
- Real-time seat selection
- Price calculation
- Booking summary sidebar
- Seat legend (Available, Selected, Booked)

**Features:**
- Click to select/deselect seats
- Visual feedback on hover
- Disabled state for booked seats
- Sticky summary sidebar
- Form validation

### Payment (`/payment`)
- Card payment form
- Cardholder details validation
- Order summary
- Price breakdown
- Security badge and messaging

**Features:**
- Real-time validation
- Error handling with clear messages
- Secure payment styling
- Order summary with tax calculations

### Confirmation (`/confirmation`)
- Success message with animated icon
- Complete booking details
- Flight information
- Passenger details
- Price summary
- Download option
- Additional info cards

## 🔄 User Flow

```
Home (Search)
    ↓
Flights (Browse & Select)
    ↓
Seat Selection (Choose Seats)
    ↓
Payment (Enter Card Details)
    ↓
Confirmation (Success & Details)
```

## 🎯 Form Validation

### Home/Search Form
- ✓ Departure city (required)
- ✓ Arrival city (required)
- ✓ Departure date (required)
- ✓ Cities must be different
- ✓ Real-time error display

### Payment Form
- ✓ Card number (16 digits)
- ✓ Cardholder name (required)
- ✓ Expiry date (MM/YY format)
- ✓ CVV (3-4 digits)
- ✓ Email address (valid format)
- ✓ Visual error indicators

### Seat Selection
- ✓ At least one seat must be selected
- ✓ Cannot select booked seats
- ✓ Real-time price calculation

## 🚀 Development Tips

### Running the App
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Linting Code
```bash
npm run lint
```

### HMR (Hot Module Replacement)
Changes to components automatically reload in the browser during development.

## 📋 Component List

| Component | Location | Status | Features |
|-----------|----------|--------|----------|
| Home | src/components/home | ✅ Complete | Hero, booking form, features, destinations, blog, airlines |
| Header | src/components/header | ✅ Complete | Responsive nav, mobile menu, gradient styling |
| Footer | src/components/footer | ✅ Complete | Dark theme, 4-column layout, social icons |
| FlightList | src/components/flight | ✅ Complete | Flight cards, badges, gradient pricing |
| SeatSelection | src/components/seat | ✅ Complete | Aircraft layout, price calculation, sticky summary |
| Payment | src/components/payment | ✅ Complete | Form validation, order summary, security messaging |
| Confirmation | src/components/confirmation | ✅ Complete | Success state, booking details, download option |
| About | src/components/about | 🔄 Pending | Bootstrap components need Tailwind conversion |
| Contact | src/components/contact | 🔄 Pending | Form needs Tailwind conversion |

## 🔧 Configuration Files

### tailwind.config.js
- Extended theme with 5 color families
- Custom typography scale
- Enhanced shadows and spacing
- Component utilities in @layer

### postcss.config.js
- Tailwind CSS plugin
- Autoprefixer for browser compatibility

### vite.config.js
- React plugin with @vitejs/plugin-react
- Base path: /flight-booking/
- Optimization settings

## 📝 Notes

- All components use Tailwind CSS for styling
- Bootstrap is no longer used (removed from imports)
- Custom color tokens ensure design consistency
- Form validation provides user feedback
- Responsive design works on mobile, tablet, desktop

## 🔮 Future Enhancements

- [ ] Dark mode support
- [ ] Real API integration
- [ ] Payment gateway (Stripe/PayPal)
- [ ] User authentication
- [ ] Booking history
- [ ] Filter and sort options
- [ ] Wishlist functionality
- [ ] Email notifications

## 📚 What I Learned From This Project

### Frontend Development
- **React Hooks**: Mastered useState, useEffect, useContext for state management
- **React Router**: Implemented client-side routing with useNavigate and useLocation
- **Component Composition**: Built reusable components with proper separation of concerns
- **Custom Hooks**: Created utility hooks for form handling and data management

### Tailwind CSS & Styling
- **Utility-First CSS**: Leveraged Tailwind's utility classes for faster development
- **Design Systems**: Built a cohesive design system with 5 color families and 9 shades each
- **Responsive Design**: Implemented mobile-first approach with Tailwind breakpoints
- **Component Styling**: Used @layer directive to create consistent component utilities
- **Gradient & Effects**: Applied gradients, shadows, and transitions for modern UI

### Form Handling & Validation
- **Real-Time Validation**: Implemented client-side form validation with error messages
- **Error Handling**: Provided user-friendly feedback for invalid inputs
- **Form State Management**: Managed complex form states across multiple pages
- **Data Persistence**: Used sessionStorage to maintain state across navigation

### UI/UX Design
- **Modern Design Patterns**: Implemented cards, gradients, and smooth transitions
- **Visual Hierarchy**: Used typography, spacing, and color to guide user attention
- **Accessibility**: Applied semantic HTML and proper ARIA attributes
- **Interactive Feedback**: Added hover effects, scale transitions, and visual states

### Build & Development Tools
- **Vite**: Experienced fast development server and optimized builds
- **PostCSS**: Learned CSS transformation and autoprefixer configuration
- **ESLint**: Set up code quality rules and best practices
- **HMR (Hot Module Replacement)**: Leveraged hot reloading for faster development

### Project Architecture
- **Component Structure**: Organized components logically by feature
- **File Organization**: Maintained clean project structure for scalability
- **CSS Organization**: Transitioned from Bootstrap to Tailwind for consistency
- **State Flow**: Managed complex state across multiple component layers

### Best Practices
- **Code Documentation**: Added comments and clear variable names
- **Responsive Development**: Tested on multiple screen sizes
- **Performance Optimization**: Minimized re-renders and bundle size
- **User Experience**: Focused on seamless navigation and clear feedback

### Problem Solving
- **Form Validation**: Solved complex validation scenarios with multiple fields
- **Navigation Flow**: Managed data flow between different pages
- **Interactive UI**: Created interactive elements like seat selection with real-time updates
- **Responsive Layouts**: Solved responsive design challenges with Tailwind's grid system

### Key Takeaways
1. **Tailwind CSS is powerful** - It significantly speeds up development when you understand its patterns
2. **Component reusability matters** - Proper component design makes maintenance easier
3. **Form validation is crucial** - Good UX requires comprehensive validation and error handling
4. **Modern tools improve DX** - Vite and React Router make development enjoyable
5. **Design systems scale** - Having predefined tokens ensures consistency across the app

This project reinforced the importance of clean code, proper planning, and user-centered design in building modern web applications.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Support

For issues or questions, please refer to the project documentation or create an issue in the repository.

---

## 👤 Author

**Rakesh Al Yadin**
- 📧 Email: [shopno8860@gmail.com](mailto:shopno8860@gmail.com)
- 💼 GitHub: [shopno8860](https://github.com/shopno8860)
- 🌐 Live Project: [https://shopno8860.github.io/flight-booking/](https://shopno8860.github.io/flight-booking/)

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
