import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import styles from "./style";

const App: React.FC = () => {
  const [record, setRecord] = useState({});

  // fetch record
  const fetchRecord = async () => {
    try {
      const res = await axios.post("/api/queryData", {
        traceLogId: `site_${Date.now()}`,
      });
      setRecord(res?.data?.result || {});
    } catch (err) {
      setRecord({});
    }
  };

  // init
  useEffect(() => {
    fetchRecord();
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar data={record} />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats data={record} />
          <Business data={record} />
          <Billing />
          <CardDeal />
          <Testimonials data={record} />
          <Clients data={record} />
          <CTA />
          <Footer data={record} />
        </div>
      </div>
    </div>
  );
};

export default App;
