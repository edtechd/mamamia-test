export default {
  root: {
    class: [
      // Flex & Alignment
      "flex items-center justify-center flex-wrap",

      // Spacing
      "px-4 py-2",

      // Shape
      "border-0",

      // Color
      "bg-gray-0 dark:bg-gray-800",
      "text-gray-500 dark:text-white/60",
    ],
  },
  firstpagebutton: ({ context }) => ({
    class: [
      "relative",

      // Flex & Alignment
      "inline-flex items-center justify-center",

      // Shape
      "border-0 rounded-full dark:rounded-md",

      // Size
      "min-w-[3rem] h-12 m-[0.143rem]",
      "leading-none",

      // Color
      "text-gray-500 dark:text-white/60",

      // State
      {
        "hover:bg-gray-50 dark:hover:bg-gray-700/70": !context.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-brand-400/50 dark:focus:ring-brand-300/50":
          !context.disabled,
      },

      // Transition
      "transition duration-200",

      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": context.disabled },
    ],
  }),
  previouspagebutton: ({ context }) => ({
    class: [
      "relative",

      // Flex & Alignment
      "inline-flex items-center justify-center",

      // Shape
      "border-0 rounded-full dark:rounded-md",

      // Size
      "min-w-[3rem] h-12 m-[0.143rem]",
      "leading-none",

      // Color
      "text-gray-500 dark:text-white/60",

      // State
      {
        "hover:bg-gray-50 dark:hover:bg-gray-700/70": !context.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-brand-400/50 dark:focus:ring-brand-300/50":
          !context.disabled,
      },

      // Transition
      "transition duration-200",

      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": context.disabled },
    ],
  }),
  nextpagebutton: ({ context }) => ({
    class: [
      "relative",

      // Flex & Alignment
      "inline-flex items-center justify-center",

      // Shape
      "border-0 rounded-full dark:rounded-md",

      // Size
      "min-w-[3rem] h-12 m-[0.143rem]",
      "leading-none",

      // Color
      "text-gray-500 dark:text-white/60",

      // State
      {
        "hover:bg-gray-50 dark:hover:bg-gray-700/70": !context.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-brand-400/50 dark:focus:ring-brand-300/50":
          !context.disabled,
      },

      // Transition
      "transition duration-200",

      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": context.disabled },
    ],
  }),
  lastpagebutton: ({ context }) => ({
    class: [
      "relative",

      // Flex & Alignment
      "inline-flex items-center justify-center",

      // Shape
      "border-0 rounded-full dark:rounded-md",

      // Size
      "min-w-[3rem] h-12 m-[0.143rem]",
      "leading-none",

      // Color
      "text-gray-500 dark:text-white/60",

      // State
      {
        "hover:bg-gray-50 dark:hover:bg-gray-700/70": !context.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-brand-400/50 dark:focus:ring-brand-300/50":
          !context.disabled,
      },

      // Transition
      "transition duration-200",

      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": context.disabled },
    ],
  }),
  pagebutton: ({ context }) => ({
    class: [
      "relative",

      // Flex & Alignment
      "inline-flex items-center justify-center",

      // Shape
      "border-0 rounded-full dark:rounded-md",

      // Size
      "min-w-[3rem] h-12 m-[0.143rem]",
      "leading-none",

      // Color
      "text-gray-500 dark:text-white/80",
      {
        "bg-brand-50 border-brand-50 dark:border-transparent text-brand-700 dark:text-gray-0 dark:bg-brand-400/30":
          context.active,
      },

      // State
      {
        "hover:bg-gray-50 dark:hover:bg-gray-700/70":
          !context.disabled && !context.active,
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-brand-400/50 dark:focus:ring-brand-300/50":
          !context.disabled,
      },

      // Transition
      "transition duration-200",

      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": context.disabled },
    ],
  }),
  rowperpagedropdown: {
    root: ({ props, state }) => ({
      class: [
        // Display and Position
        "inline-flex",
        "relative",

        // Shape
        "h-12",
        "rounded-md",

        // Spacing
        "mx-2",

        // Color and Background
        "bg-gray-0 dark:bg-gray-900",
        "border border-gray-300 dark:border-gray-700",

        // Transitions
        "transition-all",
        "duration-200",

        // States
        "hover:border-brand-500 dark:hover:border-brand-300",
        {
          "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-brand-400/50 dark:focus:ring-brand-300/50":
            !state.focused,
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
    input: {
      class: [
        //Font
        "font-sans",
        "leading-5",

        // Display
        "block",
        "flex-auto",

        // Color and Background
        "bg-transparent",
        "border-0",
        "text-gray-800 dark:text-white/80",

        // Sizing and Spacing
        "w-[1%]",
        "p-3 pr-0",

        //Shape
        "rounded-none",

        // Transitions
        "transition",
        "duration-200",

        // States
        "focus:outline-none focus:shadow-none",

        // Misc
        "relative",
        "cursor-pointer",
        "overflow-hidden overflow-ellipsis",
        "whitespace-nowrap",
        "appearance-none",
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
          "bg-gray-50 dark:bg-gray-600/60 text-gray-700 dark:text-white/80":
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
  },
  jumptopageinput: {
    root: {
      class: "inline-flex mx-2",
    },
    input: {
      root: {
        class: [
          "relative",

          //Font
          "font-sans",
          "leading-none",

          // Display
          "block",
          "flex-auto",

          // Colors
          "text-gray-600 dark:text-gray-200",
          "placeholder:text-gray-400 dark:placeholder:text-gray-500",
          "bg-gray-0 dark:bg-gray-900",
          "border border-gray-300 dark:border-gray-600",

          // Sizing and Spacing
          "w-[1%] max-w-[3rem]",
          "p-3 m-0",

          //Shape
          "rounded-md",

          // Transitions
          "transition",
          "duration-200",

          // States
          "hover:border-brand-500 dark:hover:border-brand-400",
          "focus:outline-none focus:shadow-none",
          "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-brand-500/50 dark:focus:ring-brand-400/50",

          // Misc
          "cursor-pointer",
          "overflow-hidden overflow-ellipsis",
          "whitespace-nowrap",
          "appearance-none",
        ],
      },
    },
  },
  jumptopagedropdown: {
    root: ({ props, state }) => ({
      class: [
        // Display and Position
        "inline-flex",
        "relative",

        // Shape
        "h-12",
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
          "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-brand-400/50 dark:focus:ring-brand-300/50":
            !state.focused,
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
    input: {
      class: [
        //Font
        "font-sans",
        "leading-none",

        // Display
        "block",
        "flex-auto",

        // Color and Background
        "bg-transparent",
        "border-0",
        "text-gray-800 dark:text-white/80",

        // Sizing and Spacing
        "w-[1%]",
        "p-3",

        //Shape
        "rounded-none",

        // Transitions
        "transition",
        "duration-200",

        // States
        "focus:outline-none focus:shadow-none",

        // Misc
        "relative",
        "cursor-pointer",
        "overflow-hidden overflow-ellipsis",
        "whitespace-nowrap",
        "appearance-none",
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
          "bg-gray-50 dark:bg-gray-600/60 text-gray-700 dark:text-white/80":
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
  },
};
