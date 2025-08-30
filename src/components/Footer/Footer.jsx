// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return <div className="footer">Copyright © 2024 Chandan Kumar - All Rights Reserved</div>;
// };

// export default Footer;

import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://api.getcounter.dev/user/chandan-portfolio")
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(err => console.error("Visitor counter error:", err));
  }, []);

  return (
    <div className="footer">
      Copyright © 2024 Chandan Kumar - All Rights Reserved
      <br />
      Visitors Count: {count}
    </div>
  );
};

export default Footer;
