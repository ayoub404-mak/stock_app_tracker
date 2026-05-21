"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Render a sized avatar container using the Radix Avatar root with consistent styling.
 *
 * @param size - Avatar size variant: `"default"` uses base dimensions, `"sm"` and `"lg"` adjust the avatar's rendered size.
 * @returns A React element representing the styled avatar root element.
 */
function Avatar({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an avatar image element with circular crop and object-cover sizing.
 *
 * @param className - Additional Tailwind classes to merge with the avatar image's default styles
 * @returns The avatar image element with square aspect ratio, full sizing, rounded (circular) crop, and `object-cover` behavior
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-full object-cover",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a styled fallback element for an avatar when the image is unavailable.
 *
 * @returns A React element wrapping `AvatarPrimitive.Fallback` with centered, circular layout, muted background and foreground colors, and responsive text sizing for small avatars.
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a positioned badge element that overlays an avatar.
 *
 * Merges provided `className` with the component's size-aware default classes and forwards any other props to the underlying `span`.
 *
 * @param className - Additional CSS class names to append to the badge
 * @param props - Remaining props forwarded to the `span` element
 * @returns A `span` element positioned at the avatar's bottom-right, styled as a circular badge
 */
function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

/**
 * Groups avatar elements into an overlapping stack and applies shared ring styling to child avatars.
 *
 * @returns A `div` element that arranges avatars with negative horizontal spacing for overlap and applies group-based ring classes to children with `data-slot="avatar"`.
 */
function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a circular count indicator for an avatar group.
 *
 * Applies base muted/background styling and adjusts its overall size and nested SVG sizing
 * according to the surrounding group's `data-size` (supports `sm`, `default`, `lg`).
 *
 * @param className - Additional CSS class names to merge with the component's base classes.
 * @param props - Additional `div` props are forwarded to the rendered element.
 * @returns A `div` element used as a circular count indicator whose sizing responds to the surrounding group's `data-size`.
 */
function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
