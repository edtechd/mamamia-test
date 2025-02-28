export default {
  root: ({ props, state }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative",

      // Shape
      "w-full md:max-w-[20rem]",
      "rounded-md",

      // Color and Background
      "bg-gray-0 dark:bg-gray-900",
      "border border-gray-300 dark:border-gray-700",

      // Transitions
      "transition-all",
      "duration-200",

      // States
      "hover:border-brand-500 dark:hover:border-brand-300",
      {
        "outline-none outline-offset-0 ring ring-brand-400/50 dark:ring-brand-300/50":
          state.focused,
      },

      // Misc
      "cursor-pointer",
      "select-none",
      {
        "opacity-60": props.disabled,
        "pointer-events-none": props.disabled,
        "cursor-default": props.disabled,
      },
    ],
  }),
  labelContainer: {
    class: "overflow-hidden flex flex-auto cursor-pointer ",
  },
  label: ({ props }) => ({
    class: [
      "leading-none",
      "block ",

      // Spacing
      {
        "p-3": props.display !== "chip",
        "py-3 px-3": props.display === "chip" && !props?.modelValue?.length,
        "py-1.5 px-3":
          props.display === "chip" && props?.modelValue?.length > 0,
      },

      // Color
      {
        "text-gray-800 dark:text-white/80": props.modelValue,
        "text-gray-400 dark:text-gray-500": !props.modelValue,
      },
      "placeholder:text-gray-400 dark:placeholder:text-gray-500",

      // Transitions
      "transition duration-200",

      // Misc
      "overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis",
    ],
  }),
  token: {
    class: [
      // Flex
      "inline-flex items-center",

      // Spacings
      "py-1.5 px-3 mr-2",

      // Shape
      "rounded-[1.14rem]",

      // Colors
      "bg-gray-200 dark:bg-gray-700",
      "text-gray-700 dark:text-white/70",

      // Misc
      "cursor-default",
    ],
  },
  removeTokenIcon: {
    class: [
      // Shape
      "rounded-md leading-6",

      // Spacing
      "ml-2",

      // Size
      "w-4 h-4",

      // Transition
      "transition duration-200 ease-in-out",

      // Misc
      "cursor-pointer",
    ],
  },
  trigger: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",

      // Color and Background
      "bg-transparent",
      "text-gray-500",

      // Size
      "w-12",

      // Shape
      "rounded-tr-md",
      "rounded-br-md",
    ],
  },
  panel: {
    class: [
      // Position
      "absolute top-0 left-0",

      // Shape
      "border-0 dark:border",
      "rounded-md",
      "shadow-md",

      // Color
      "bg-gray-0 dark:bg-gray-800",
      "text-gray-800 dark:text-white/80",
      "dark:border-gray-700",
    ],
  },
  header: {
    class: [
      "flex items-center justify-between",
      // Spacing
      "py-3 px-5",
      "m-0",

      //Shape
      "border-b",
      "rounded-tl-md",
      "rounded-tr-md",

      // Color
      "text-gray-700 dark:text-white/80",
      "bg-gray-100 dark:bg-gray-800",
      "border-gray-300 dark:border-gray-700",
    ],
  },
  headerCheckboxContainer: {
    class: [
      "relative",

      // Alignment
      "inline-flex",
      "align-bottom",

      // Size
      "w-6",
      "h-6",

      // Misc
      "cursor-pointer",
      "select-none",
    ],
  },
  headerCheckbox: {
    root: {
      class: [
        "relative",

        // Alignment
        "inline-flex",
        "align-bottom",

        // Size
        "w-6",
        "h-6",

        // Spacing
        "mr-2",

        // Misc
        "cursor-pointer",
        "select-none",
      ],
    },
    box: ({ props, context }) => ({
      class: [
        // Alignment
        "flex",
        "items-center",
        "justify-center",

        // Size
        "w-6",
        "h-6",

        // Shape
        "rounded-md",
        "border-2",

        // Colors
        {
          "border-gray-200 bg-gray-0 dark:border-gray-700 dark:bg-gray-900":
            !context.checked,
          "border-brand-500 bg-brand-500 dark:border-brand-400 dark:bg-brand-400":
            context.checked,
        },

        // States
        {
          "peer-hover:border-brand-500 dark:peer-hover:border-brand-400":
            !props.disabled && !context.checked,
          "peer-hover:bg-brand-600 dark:peer-hover:bg-brand-300 peer-hover:border-brand-700 dark:peer-hover:border-brand-300":
            !props.disabled && context.checked,
          "peer-focus-visible:border-brand-500 dark:peer-focus-visible:border-brand-400 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400/20 dark:peer-focus-visible:ring-brand-300/20":
            !props.disabled,
          "cursor-default opacity-60": props.disabled,
        },

        // Transitions
        "transition-colors",
        "duration-200",
      ],
    }),
    input: {
      class: [
        "peer",

        // Size
        "w-full ",
        "h-full",

        // Position
        "absolute",
        "top-0 left-0",
        "z-10",

        // Spacing
        "p-0",
        "m-0",

        // Shape
        "opacity-0",
        "rounded-md",
        "outline-none",
        "border-2 border-gray-200 dark:border-gray-700",

        // Misc
        "appareance-none",
        "cursor-pointer",
      ],
    },
    icon: {
      class: [
        // Font
        "text-base leading-none",

        // Size
        "w-4",
        "h-4",

        // Colors
        "text-white dark:text-gray-900",

        // Transitions
        "transition-all",
        "duration-200",
      ],
    },
  },
  itemCheckbox: {
    root: {
      class: [
        "relative",

        // Alignment
        "inline-flex",
        "align-bottom",

        // Size
        "w-6",
        "h-6",

        // Spacing
        "mr-2",

        // Misc
        "cursor-pointer",
        "select-none",
      ],
    },
    box: ({ props, context }) => ({
      class: [
        // Alignment
        "flex",
        "items-center",
        "justify-center",

        // Size
        "w-6",
        "h-6",

        // Shape
        "rounded-md",
        "border-2",

        // Colors
        {
          "border-gray-200 bg-gray-0 dark:border-gray-700 dark:bg-gray-900":
            !context.checked,
          "border-brand-500 bg-brand-500 dark:border-brand-400 dark:bg-brand-400":
            context.checked,
        },

        // States
        {
          "peer-hover:border-brand-500 dark:peer-hover:border-brand-400":
            !props.disabled && !context.checked,
          "peer-hover:bg-brand-600 dark:peer-hover:bg-brand-300 peer-hover:border-brand-700 dark:peer-hover:border-brand-300":
            !props.disabled && context.checked,
          "peer-focus-visible:border-brand-500 dark:peer-focus-visible:border-brand-400 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400/20 dark:peer-focus-visible:ring-brand-300/20":
            !props.disabled,
          "cursor-default opacity-60": props.disabled,
        },

        // Transitions
        "transition-colors",
        "duration-200",
      ],
    }),
    input: {
      class: [
        "peer",

        // Size
        "w-full ",
        "h-full",

        // Position
        "absolute",
        "top-0 left-0",
        "z-10",

        // Spacing
        "p-0",
        "m-0",

        // Shape
        "opacity-0",
        "rounded-md",
        "outline-none",
        "border-2 border-gray-200 dark:border-gray-700",

        // Misc
        "appareance-none",
        "cursor-pointer",
      ],
    },
    icon: {
      class: [
        // Font
        "text-base leading-none",

        // Size
        "w-4",
        "h-4",

        // Colors
        "text-white dark:text-gray-900",

        // Transitions
        "transition-all",
        "duration-200",
      ],
    },
  },
  closeButton: {
    class: [
      "relative",

      // Flexbox and Alignment
      "flex items-center justify-center",

      // Size and Spacing
      "mr-2",
      "last:mr-0",
      "w-8 h-8",

      // Shape
      "border-0",
      "rounded-full",

      // Colors
      "text-gray-500",
      "bg-transparent",

      // Transitions
      "transition duration-200 ease-in-out",

      // States
      "hover:text-gray-700 dark:hover:text-white/80",
      "hover:bg-gray-100 dark:hover:bg-gray-800/80",
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset",
      "focus:ring-brand-400/50 dark:focus:ring-brand-300/50",

      // Misc
      "overflow-hidden",
    ],
  },
  closeButtonIcon: {
    class: "w-4 h-4 inline-block",
  },
  wrapper: {
    class: [
      // Sizing
      "max-h-[200px]",

      // Misc
      "overflow-auto",
    ],
  },
  list: {
    class: "py-3 list-none m-0",
  },
  item: ({ context }) => ({
    class: [
      // Font
      "font-normal",
      "leading-none",

      // Flexbox
      "flex items-center",

      // Position
      "relative",

      // Shape
      "border-0",
      "rounded-none",

      // Spacing
      "m-0",
      "py-3 px-5",

      // Color
      {
        "text-gray-700 dark:text-white/80":
          !context.focused && !context.selected,
      },
      {
        "bg-gray-200 dark:bg-gray-600/60 text-gray-700 dark:text-white/80":
          context.focused && !context.selected,
      },
      {
        "bg-brand-100 dark:bg-brand-400/40 text-brand-700 dark:text-white/80":
          context.focused && context.selected,
      },
      {
        "bg-brand-50 dark:bg-brand-400/40 text-brand-700 dark:text-white/80":
          !context.focused && context.selected,
      },

      //States
      {
        "hover:bg-gray-100 dark:hover:bg-gray-600/80":
          !context.focused && !context.selected,
      },
      {
        "hover:text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600/80":
          context.focused && !context.selected,
      },

      // Transitions
      "transition-shadow",
      "duration-200",

      // Misc
      "cursor-pointer",
      "overflow-hidden",
      "whitespace-nowrap",
    ],
  }),
  itemgroup: {
    class: [
      //Font
      "font-bold",

      // Spacing
      "m-0",
      "p-3 px-5",

      // Color
      "text-gray-800 dark:text-white/80",
      "bg-gray-0 dark:bg-gray-600/80",

      // Misc
      "cursor-auto",
    ],
  },
  filtercontainer: {
    class: "relative w-full mx-2",
  },
  filterinput: {
    class: [
      // Font
      "font-sans",
      "leading-none",

      // Sizing
      "pr-7 py-3 px-3",
      "-mr-7",
      "w-full",

      //Color
      "text-gray-700 dark:text-white/80",
      "bg-gray-0 dark:bg-gray-900",
      "border-gray-200 dark:border-gray-700",
      "placeholder:text-gray-400 dark:placeholder:text-gray-500",

      // Shape
      "border",
      "rounded-lg",
      "appearance-none",

      // Transitions
      "transition",
      "duration-200",

      // States
      "hover:border-brand-500 dark:hover:border-brand-300",
      "focus:ring focus:outline-none focus:outline-offset-0",
      "focus:ring-brand-400/50 dark:focus:ring-brand-300/50",

      // Misc
      "appearance-none",
    ],
  },
  filtericon: {
    class: ["absolute", "top-1/2 right-3", "-mt-2"],
  },
  clearicon: {
    class: [
      // Color
      "text-gray-500",

      // Position
      "absolute",
      "top-1/2",
      "right-12",

      // Spacing
      "-mt-2",
    ],
  },
  emptymessage: {
    class: [
      // Font
      "leading-none",

      // Spacing
      "py-3 px-5",

      // Color
      "text-gray-800 dark:text-white/80",
      "bg-transparent",
    ],
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass:
      "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0",
  },
};
