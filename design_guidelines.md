# Design Guidelines: Playback Speed Calculator

## Design Approach

**Selected Approach:** Design System with Calculator-Focused Patterns

**Rationale:** This is a utility-focused calculation tool where efficiency, clarity, and learnability are paramount. The interface should be clean, distraction-free, and focused on functionality. Drawing inspiration from calculator applications and productivity tools like calculator.net and specialized conversion tools.

**Key Design Principles:**
1. Clarity over decoration - every element serves a functional purpose
2. Immediate visual feedback for calculations
3. Scannable information hierarchy
4. Zero cognitive load for common tasks

---

## Core Design Elements

### A. Typography

**Primary Font:** Inter or System UI Stack via Google Fonts
- Headings (H1): text-3xl font-bold (calculator title)
- Headings (H2): text-xl font-semibold (section titles)
- Body text: text-base font-normal
- Labels: text-sm font-medium (form labels)
- Numbers/Results: text-2xl font-semibold tabular-nums (calculated outputs)
- Small text: text-xs (helper text, examples)

**Special Typography Notes:**
- Use `tabular-nums` utility for all numerical displays to maintain alignment
- Monospace font for time displays (HH:MM:SS format)

### B. Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, and 8 consistently
- Component spacing: p-4, p-6
- Section spacing: py-8, py-12
- Input fields: p-3
- Gaps between elements: gap-4, gap-6

**Container Strategy:**
- Main container: max-w-4xl mx-auto px-4
- Calculator card: max-w-2xl (centered within main container)
- Content sections: Full width within container

**Grid System:**
- Input fields: 3-column grid on desktop (Hours | Minutes | Seconds), stack on mobile
- Results display: 2-column grid (Calculated Time | Time Saved)
- Examples table: Responsive table with 3 columns

---

### C. Component Library

#### Calculator Card
- Elevated card with subtle shadow (shadow-lg)
- Rounded corners (rounded-xl)
- Padding: p-6 on mobile, p-8 on desktop
- Border treatment: border with subtle color

#### Input Fields
**Time Input Group:**
- Three number inputs side-by-side (Hours, Minutes, Seconds)
- Each input: rounded-lg, border, p-3, text-center
- Clear labels above each input (text-sm font-medium)
- Input width: equal distribution in grid
- Type: number with min/max constraints
- Font: tabular-nums for alignment

**Playback Speed Input:**
- Single number input with step="0.25"
- Width: Full width on mobile, max-w-xs on desktop
- Prominent placement below time inputs
- Include common presets as suggestion chips (1.25x, 1.5x, 1.75x, 2x)

#### Results Display
**Calculated Time Box:**
- Large, prominent display area
- Background treatment to distinguish from inputs
- Padding: p-6
- Rounded: rounded-lg
- Time format: HH:MM:SS in large text (text-3xl)
- Label above: "Calculated Time" (text-sm font-medium)

**Time Saved Indicator:**
- Secondary result box with same styling as calculated time
- Include positive/negative indicator with appropriate visual treatment
- Subtitle text: "Time saved at this speed"

#### Examples Table
- Clean table design with alternating row backgrounds
- Headers: font-semibold with bottom border
- Cells: p-3 spacing
- Responsive: Stack to cards on mobile viewports
- Monospace font for time values

#### Information Sections
**How to Use:**
- Numbered list (1, 2, 3)
- Each step: mb-3 spacing
- Clear, concise instructions

**Math Formula:**
- Code-style background for formula (bg-gray-50 equivalent)
- Padding: p-4
- Rounded: rounded-md
- Example walkthrough with clear step-by-step breakdown

---

### D. Page Structure

**Layout Hierarchy:**
1. **Header Section** (py-8)
   - Page title (H1)
   - Brief subtitle describing the tool

2. **Calculator Section** (py-6)
   - Calculator card containing all inputs and results
   - Logical flow: Time Inputs → Playback Speed → Results

3. **Usage Instructions** (py-8)
   - How to use section
   - Math formula explanation with example
   
4. **Examples Section** (py-8)
   - Table showing common calculations
   - Quick reference for users

5. **Footer/Related Tools** (py-6)
   - Links to related calculators
   - Minimal, functional layout

---

### E. Interaction Design

**Real-time Calculation:**
- Instant updates as user types (no submit button needed)
- Smooth transition for result changes

**Input Validation:**
- Visual feedback for invalid inputs (border color change)
- Helper text for constraints (e.g., "Enter value between 0-59")

**Focus States:**
- Clear focus rings on all interactive elements
- Keyboard navigation support

**Accessibility:**
- Proper label associations
- ARIA labels for screen readers
- Semantic HTML structure
- Sufficient color contrast ratios (WCAG AA minimum)

---

### F. Responsive Behavior

**Mobile (< 768px):**
- Single column layout
- Time inputs stack vertically with full width
- Results stack vertically
- Table converts to card layout

**Tablet/Desktop (≥ 768px):**
- Time inputs in 3-column grid
- Results in 2-column side-by-side
- Table displays traditionally

---

## Images

**No hero image required.** This is a focused utility tool where visual elements would distract from functionality. Any imagery should be purely functional (icons for input types if needed).

---

## Animation Budget

**Minimal animations only:**
- Result value fade-in when calculation updates (duration-200)
- Input focus transitions (transition-colors duration-150)
- No decorative animations