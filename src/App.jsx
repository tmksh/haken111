import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Screen } from "./screens/Screen";
import { Screen as Screen1 } from "./screens/Screen1";
import { Screen3 } from "./screens/Screen3";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";
import { Screen8 } from "./screens/Screen8";
import { Screen9 } from "./screens/Screen9";
import { ScreenScreen } from "./screens/ScreenScreen";
import { ScreenWrapper } from "./screens/ScreenWrapper";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Screen />,
  },
  {
    path: "/企業向け",
    element: <Screen1 />,
  },
  {
    path: "/u12488u12483u12501u12442u12504u12442u12540u12471u12441",
    element: <Screen />,
  },
  {
    path: "/u21033u29992u35215u32004",
    element: <ScreenScreen />,
  },
  {
    path: "/u12467u12521u12512u35352u20107u35443u32048",
    element: <ScreenWrapper />,
  },
  {
    path: "/u36578u32887u30456u35527u12377u12427",
    element: <Screen3 />,
  },
  {
    path: "/u36578u32887u20107u20363u12504u12442u12540u12471u12441",
    element: <Screen4 />,
  },
  {
    path: "/u36578u32887u30456u35527u12504u12442u12540u12471u12441",
    element: <Screen5 />,
  },
  {
    path: "/u12362u21839u12356u21512u12431u12379",
    element: <Screen6 />,
  },
  {
    path: "/u12467u12521u12512u19968u35239",
    element: <Screen7 />,
  },
  {
    path: "/u27714u20154u35443u32048",
    element: <Screen8 />,
  },
  {
    path: "/u27714u20154u35443u32048u35443u32048",
    element: <Screen9 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
