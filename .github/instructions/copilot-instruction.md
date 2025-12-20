# Project Context

## Folder Structure

The project structure follows this pattern. Use this context to understand component locations and relationships:

- `src/`
  - `components/` - Reusable UI components
    - `blog-detail/` - Components specific to blog posts
  - `content/` - Content collections (e.g., blog posts)
  - `layouts/` - Page layouts (e.g., MainLayout)
  - `pages/` - Astro file-based routing
  - `styles/` - Global styles
  - `utils/` - Utility functions
    - `cn.ts` - Classname merging utility

# Coding Rules

## Styling & Classnames

1. **Utility Wrapper**
   - **ALWAYS** wrap class names with the `cn` utility function.
   - Import it from the utils directory (e.g., `import { cn } from '../utils/cn';` or `@/utils/cn`).

2. **Tailwind Class Grouping**
   - **Rule:** Break down long class strings into multiple arguments within `cn()`.
   - **Logic:** Group related utilities together in the same string.
   - **Responsive Modifiers:** Keep responsive variants (e.g., `md:`, `lg:`) with their related base utility group (e.g., `flex` and `md:grid` go in the Layout group).

   **Required Groups:**
   - **Layout:** `flex`, `grid`, `block`, `justify-*`, `items-*`, `gap-*`, `place-*`, etc.
   - **Spacing:** `p-*`, `px-*`, `py-*`, `m-*`, `mx-*`, `my-*`.
   - **Sizing:** `w-*`, `h-*`, `min-w-*`, `max-w-*`.
   - **Typography:** `font-*`, `text-{size}`, `leading-*`, `tracking-*`, `whitespace-*`.
   - **Visuals:** `bg-*`, `text-{color}`, `border-*`, `rounded-*`, `shadow-*`, `opacity-*`, `fill-*`, `stroke-*`.
   - **Interactive/States:** `hover:*`, `focus:*`, `active:*`, `group-hover:*`.

   **Example:**

   ```astro
   <div
     class={cn(
       // Layout (include responsive)
       'flex flex-col items-center justify-center md:flex-row md:justify-between',
       // Sizing
       'w-full max-w-4xl h-auto',
       // Spacing (include responsive)
       'p-4 mt-10 md:p-8',
       // Typography
       'font-sans text-base leading-relaxed',
       // Visuals (Colors, Borders, Shadows)
       'bg-white text-gray-900 border border-gray-200 rounded-xl shadow-sm',
       // Interactive States
       'hover:shadow-md hover:border-gray-300 transition-all duration-200'
     )}
   >
     Content
   </div>
   ```

## Comments & Documentation

1. **Self-Explanatory Code**
   - **Do not** add comments for self-explanatory code.
   - Variable and function names must be descriptive enough to communicate their purpose (e.g., `isUserLoggedIn` instead of `flag` with a comment `// check if user is logged in`).

2. **When to Comment**
   - Only add comments for:
     - **Complex Logic:** Algorithms or business rules that are not immediately obvious.
     - **Decision Making:** Why a specific approach was chosen (e.g., "Using Map for O(1) lookups").
     - **Workarounds/Hacks:** Explaining why a standard approach wasn't used (e.g., "Fix for Safari flexbox bug").
