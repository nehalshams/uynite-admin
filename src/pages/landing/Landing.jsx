import { statisticsCardsData } from "@/data";
import { StatisticsCard } from "@/widgets/cards";
import { Typography } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleCardCLick = () => {
    navigate('/dashboard/home')
  }
  return (
    <div className="flex h-screen items-start justify-center bg-gray-400">
      <div className="xl:m-20 m-10 mb-12 grid w-full gap-y-10 xl:gap-y-20 xl:mt-32 gap-10 xl:gap-x-20 md:grid-cols-2 xl:grid-cols-3">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            handleCardCLick={handleCardCLick}
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={footer.map((item) => {
              return (
                <Typography className="font-normal me-3
                 text-blue-gray-600 border-r border-gray-200">
                  <strong className={item.color}>{item.value}</strong>
                  &nbsp;{item.label}
                </Typography>
              );
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
