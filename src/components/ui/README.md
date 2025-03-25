# UI Component Library

This directory contains reusable UI components for the Stanley Innovation website.

## Shadow Components

The website uses a consistent shadow styling across various elements. To maintain this consistency, we've created a set of shadow components:

### ShadowedImage

For images with a consistent shadow effect:

```tsx
import { ShadowedImage } from '@/components/ui/shadowed'

export default function Page() {
  return (
    <ShadowedImage
      src="/path/to/image.jpg"
      alt="Description of the image"
      width={800}
      height={600}
      priority={true} // Optional: for LCP images
      shadowColor="bg-primary" // Optional: defaults to primary color
      shadowPosition="bottom-right" // Optional: 'bottom-right', 'top-right', 'bottom-left', 'top-left'
    />
  )
}
```

### ShadowedContainer

For content blocks with a shadow effect:

```tsx
import { ShadowedContainer } from '@/components/ui/shadowed'

export default function Page() {
  return (
    <ShadowedContainer
      shadowColor="bg-primary" // Optional: defaults to primary color
      shadowPosition="bottom-right" // Optional: 'bottom-right', 'top-right', 'bottom-left', 'top-left'
    >
      <div className="bg-white p-8">
        <h2>Title</h2>
        <p>Content goes here...</p>
      </div>
    </ShadowedContainer>
  )
}
```

### ShadowedCard

For card elements with a shadow effect:

```tsx
import { ShadowedCard } from '@/components/ui/shadowed'

export default function Page() {
  return (
    <ShadowedCard
      shadowColor="bg-primary" // Optional: defaults to primary color
      shadowPosition="bottom-right" // Optional: 'bottom-right', 'top-right', 'bottom-left', 'top-left'
      contentClassName="p-8" // Optional: add additional classes to the content container
    >
      <h3>Card Title</h3>
      <p>Card content goes here...</p>
    </ShadowedCard>
  )
}
```

## Best Practices

1. Always use the shadow components for consistent styling across the website
2. The default shadow position is bottom-right, which is the standard look
3. For special cases, you can customize the shadow color and position
4. All components are responsive and work well on mobile and desktop

## Extending Shadow Components

If you need to create a new type of shadowed component, follow these guidelines:

1. Use the existing shadow components as a template
2. Make sure to include the same customization options (shadowColor, shadowPosition)
3. Keep the same spacing and positioning for consistency
4. Update this documentation with your new component 