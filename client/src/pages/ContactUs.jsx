import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const followUsData = [
  { icon: "", text: "Twitter", link: "https://www.twitter.com/aplicar" },
  { icon: "", text: "Instagram", link: "https://www.instagram.com/aplicar" },
  { icon: "", text: "Slack", link: "https://www.slack.com/aplicar" },
  { icon: "", text: "Youtube", link: "https://www.youtube.com/aplicar" },
];

const IconButton = (props) => {
  const { text, icon } = props;
  return (
    <div className="cursor-pointer flex space-y-2 items-center">
      <div className="flex items-center flex-col">
        <div className="h-14 w-14 flex items-center border-1 border-[#DCDCDC] rounded-full">
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              className="absolute top-0 right-0 p-3 text-grey400"
            />
          )}
        </div>
        <p className="text-xs text-grey400">{text}</p>
      </div>
    </div>
  );
};

const TertiaryButton = (props) => {
  const { type, label, text, href } = props;
  return (
    <a
      className={`${
        type === "secondary" ? "btnSecondary" : "btnPrimary"
      } p-3 rounded-md min-w-[200px] md:min-w-0`}
      href={href}
    >
      <div className="overflow-hidden">
        <p className="text-xs font-bold">{label}</p>
        <p className="font-bold">{text}</p>
      </div>
    </a>
  );
};

const H1 = (props) => {
  const { children, className } = props;
  const defaultClassName = "text-5xl font-semibold mb-5";
  return <h1 className={`${defaultClassName} ${className}`}>{children}</h1>;
};

const BodyText = (props) => {
  const { children, className } = props;
  const defaultClassName = "text-base text-grey400 font-semibold mb-2";
  return <p className={`${defaultClassName} ${className}`}>{children}</p>;
};

const FollowUsLinks = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <p className="text-base text-grey400 font-bold mb-2">Follow Us</p>
      <div className="flex space-x-5">
        {followUsData.map(({ icon, text, link }, index) => (
          <IconButton key={index} {...{ icon, text, link }} />
        ))}
      </div>
    </div>
  );
};

const Input = (props) => {
  const {
    value,
    onChange,
    labelText,
    icon,
    endIcon,
    helperText,
    alertType,
    placeholder,
    holderClassName,
    fullWidth,
    id,
    type,
    required,
  } = props;

  return (
    <div className={`${holderClassName} text-grey400`}>
      <label for={id} className="text-grey400 text-sm mb-2">
        {labelText}
      </label>
      <div className="relative text-grey400">
        <FontAwesomeIcon
          icon={["fas", "user"]}
          className="absolute top-0 left-0 p-3 "
        />
        <input
          className={`py-2 ${
            endIcon ? "px-10" : "pl-10 pr-3"
          } w-full rounded outline-none border-[#CAD0DD] focus:border-[#6D6D6D] border-[1px]`}
          {...{ value, onChange, placeholder, type, required }}
        />
        {endIcon && (
          <FontAwesomeIcon
            icon={["fas", "user"]}
            className="absolute top-0 right-0 p-3 text-grey400"
          />
        )}
      </div>
      <p>{helperText}</p>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 mt-6 md:flex md:space-x-10 lg:space-x-20  py-20">
        <div className="md:flex-auto md:w-1/2 lg:w-1/3">
          <H1>Talk to Us</H1>
          <BodyText>
            Let us know how we can help and we will get right back to you
          </BodyText>
          <div className="flex flex-col md:flex-row items-start md:space-x-5 space-y-5 md:space-y-0 my-10">
            <TertiaryButton
              label="Email Us"
              text="Aplicarorg@gmail.com"
              href="mailto:aplicarorg@gmail.com"
            />
            <TertiaryButton
              label="Call Us"
              text="+234 703 567 5617"
              href="tel:+2347035675617<"
              type="secondary"
            />
          </div>
          <FollowUsLinks className="md:block hidden" />
        </div>
        <div className="md:flex-auto md:w-1/2 lg:w-2/3">
          <div className="bg-[#fff] rounded-lg p-1 py-4 mb-5">
            <form className="flex flex-col space-y-3">
              <Input labelText="Full Name" placeholder="John Doe" />
              <Input labelText="Email Address" placeholder="abcd@gmail.com" />
              <Input labelText="Phone Number" placeholder="+234 819 345 3214" />
            </form>
          </div>
        </div>
        <FollowUsLinks className="block md:hidden" />
      </div>
    </div>
  );
};

export default ContactUs;
