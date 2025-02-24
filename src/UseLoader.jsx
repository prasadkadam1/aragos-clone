import { useEffect, useState } from "react";
import Loader from "./Loader";

const UseLoader = (WrappedComponent) => {
  return function ComponentWithLoader(props) {
    const [isLoading, setIsLoading] = useState(true);

    console.log(WrappedComponent);
    
    useEffect(() => {
      setTimeout(() => setIsLoading(false), 4000);
    }, []);

    return isLoading ? (
      <div>
        <Loader></Loader>
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};

export default UseLoader