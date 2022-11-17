const followUsData = [
    {icon:"", text:"Twitter", link:"https://www.twitter.com/aplicar"},
    {icon:"", text:"Instagram", link:"https://www.instagram.com/aplicar"},
    {icon:"", text:"Slack", link:"https://www.slack.com/aplicar"},
    {icon:"", text:"Youtube", link:"https://www.youtube.com/aplicar"},
]

const IconButton = (props) => {
    const {text, icon} = props
    return <div className="cursor-pointer">
        <div>
            {icon}
        </div>
        <p className="text-xs text-grey400">{text}</p>
    </div>
    
}

const TertiaryButton = (props) =>{
        const {type, label, text, href} = props
        return (
            <a className={`${type==="secondary"?"btnSecondary":"btnPrimary"} p-3 rounded-md`} href={href}>
            <div>
              <p className="text-xs">{label}</p>
              <p className="font-bold">{text}</p>
            </div>
          </a>
        )
}

const H1 = (props) => {
    const {children, className} = props
    const defaultClassName = "text-5xl font-bold mb-10"
    return (
        <h1 className={`${defaultClassName} ${className}`}>{children}</h1>
    )
}

const BodyText = (props) => {
    const {children, className} = props
    const defaultClassName = "text-base text-grey400 font-semibold mb-2"
    return (
        <p className={`${defaultClassName} ${className}`}>{children}</p>
    )
}


const ContactUs = () => {
  return (
    <div className="md:px-24 px-6 mt-6 flex space-x-20 bg-background py-20">
      <div className="flex-auto w-32">
        <H1>Talk to Us</H1>
        <BodyText>
          Let us know how we can help and we will get right back to you
        </BodyText>
        <BodyText>
          Need technical support? Please visit the
          <a className="font-bold text-primaryMain cursor-pointer" href="https://www.slack.com/aplicar" target="_blank"> Aplicar community slack</a>
        </BodyText>
        <div className="flex space-x-5 my-10">
          <TertiaryButton label="Email Us" text="Support@applicar.com" href="mailto:support@applicar.com" />
          <TertiaryButton label="Call Us" text="+234 703 567 5617" href="tel:+2347035675617<" type="secondary" />
        </div>
        <p className="text-base text-grey400 font-bold mb-2">Follow Us</p>
        <div className="flex space-x-5">
            {followUsData.map(({icon,text, link},index)=><IconButton key={index} {...{icon,text, link}} />)}
        </div>
      </div>
      <div className="flex-auto w-68"></div>
    </div>
  );
};

export default ContactUs;
