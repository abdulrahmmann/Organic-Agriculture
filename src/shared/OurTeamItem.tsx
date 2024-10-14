import {FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon} from "../assets";

type OurTeamItemProps = {
    instagramAccount?: string,
    facebookAccount?: string,
    twitterAccount?: string,

    name: string,
    job: string,
    image: string,
}
export const OurTeamItem = (props: OurTeamItemProps) => {
    const style = {
        image: {
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
        }
    }
    return (
        <div className={`rounded-[16px] bg-WhiteBackground w-fit`}>
            <img style={style.image} src={props.image} alt={'Team Image'} className={`w-[350px] h-[350px] object-cover`} />

            <div className={`flex justify-between items-end px-[2rem] py-[2.8rem]`}>
                <div className={``}>
                    <h3 className={`text-[2rem] text-PrimaryColor font-Roboto font-semibold block`}>
                        {props.name}
                    </h3>
                    <h3 className={`text-[1.8rem] text-SecondaryColor font-yellowtail font-medium block mt-[1rem]`}>
                        {props.job}
                    </h3>
                </div>

                <div className={`flex justify-center items-center gap-4`}>
                    {
                        props.instagramAccount && <img src={InstagramLogoIcon} alt={'Instagram Logo Icon'} className={`w-[18px] h-[18px]`} />
                    }
                    {
                        props.facebookAccount && <img src={FacebookLogoIcon} alt={'Facebook Logo Icon'} className={`w-[18px] h-[18px]`} />
                    }
                    {
                        props.twitterAccount && <img src={TwitterLogoIcon} alt={'Twitter Logo Icon'} className={`w-[18px] h-[18px]`} />
                    }
                </div>
            </div>
        </div>
    );
};

