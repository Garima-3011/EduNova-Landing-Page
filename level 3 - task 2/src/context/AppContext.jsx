
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    setEnrolledCourses((previous) =>
      previous.includes(course)
        ? previous
        : [...previous, course]
    );
  };

  return (
    <AppContext.Provider
      value={{
        userName,
        setUserName,
        enrolledCourses,
        enrollCourse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
