import React from "react";
import Button from "./Button";
import styles, { layout } from "../style";

type BusinessType = {
  data: {
    features?: FeatureItemType[];
  };
};

type FeatureItemType = {
  id?: string;
  icon?: string;
  title?: string;
  content?: string;
};

type FeatureCardType = {
  icon?: string;
  title?: string;
  content?: string;
  index?: number;
  data: {
    features?: FeatureItemType[];
  };
};

const FeatureCard: React.FC<FeatureCardType> = ({
  icon,
  title,
  content,
  index,
  data,
}) => {
  const { features = [] } = data;

  const wrapperCls = `flex flex-row p-6 rounded-[20px] ${
    index !== features.length - 1 ? "mb-6" : "mb-0"
  } feature-card`;

  return (
    <div className={wrapperCls}>
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business: React.FC<BusinessType> = ({ data }) => {
  const { features = [] } = data;

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature: FeatureItemType, index: number) => (
          <FeatureCard
            key={feature.id}
            {...feature}
            index={index}
            data={data}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
