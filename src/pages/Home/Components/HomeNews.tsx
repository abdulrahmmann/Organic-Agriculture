import {CSSProperties} from "react";
import {Person, Spinach, Tomato} from "../../../assets";
import {HomeNewsBlogs} from "../../../constants";
import styled from "styled-components";
import {ButtonWithArrow} from "../../../shared/ButtonWithArrow.tsx";

const ButtonWithArrowStyle = styled(ButtonWithArrow) `
        color: white;
        background-color: #274c5b;
        transition: 150ms linear;
        border: 2px solid #274c5b;
        padding-right: 2.4rem;
        padding-left: 2.4rem;
        display: block;
        margin-top: 3.2rem;
        &:hover {
            color: #274c5b;
            background-color: white;
        }
    &:hover img {
        transition: 0.2s linear;
        transform: translateX(2px);
    }
    `;
export const HomeNews = () => {
    const style = {
        blog1: {
            backgroundImage: `url(${Spinach})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '25px',
            boxShadow: '0 2px 18px rgba(0, 0, 0, .14)'
        },
        blog2: {
            backgroundImage: `url(${Tomato})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '25px',
            boxShadow: '0 2px 18px rgba(0, 0, 0, .14)'
        },
    }

    const blog = HomeNewsBlogs;
    return (
        <section id={'news-section'} className={`relative`}>
            <div className={`w-full bg-white py-[10rem]`}>
                <div className={`max-w-[1400px] mx-auto px-[1.6rem] ss:px-[3.2rem] lg:px-[20rem]`}>
                    <div className={`flex justify-between items-end`}>
                        <div>
                            <h3 className={`text-SecondaryColor text-[3rem] font-yellowtail font-medium mb-2`}>
                                News
                            </h3>
                            <p className={`text-PrimaryColor text-[4rem] font-Roboto font-bold mb-4 leading-tight`}>
                                Discover The Recent Content <br /> About Organic Products
                            </p>
                        </div>
                        <ButtonWithArrowStyle className={`sm:block absolute bottom-[2rem] left-[50%] translate-x-[-50%]`}>More News</ButtonWithArrowStyle>
                    </div>

                    <div className={`my-8 grid grid-cols-1 md:grid-cols-2 gap-8`}>
                        <NewsBlog key={blog[0].id} style={style.blog1} date={blog[0].date}
                                  author={blog[0].author} title={blog[0].title} content={blog[0].content} />

                        <NewsBlog key={blog[1].id} style={style.blog2} date={blog[1].date}
                                  author={blog[1].author} title={blog[1].title} content={blog[1].content} />
                    </div>

                </div>
            </div>
        </section>
    );
};

type NewsBlogProps = {
    style: CSSProperties,
    date: string,
    author: string,
    title: string,
    content: string
}

const ButtonWithArrowStyleItem = styled(ButtonWithArrow) `
        color: #274c5b;
        background-color: #efd372;
        transition: 150ms linear;
        border: 2px solid #efd372;
        padding-right: 2.4rem;
        padding-left: 2.4rem;
        display: block;
        &:hover {
            color: #274c5b;
            background-color: white;
        }
    &:hover img {
        transition: 0.2s linear;
        transform: translateX(2px);
    }
    `;
export const NewsBlog = ({style, date, author, title, content}: NewsBlogProps) => {
    return (
        <div style={style} className={`px-[30px] py-[20px] relative`}>
            <div
                className={`w-[60px] h-[60px] rounded-full bg-YellowColor text-center flex justify-center items-center p-2 mb-[30px]`}>
                <h3 className={`text-[1.2rem] text-PrimaryColor font-Roboto font-bold text-center whitespace-break-spaces`}>
                    {date}
                </h3>
            </div>

            <div className={`bg-white px-[20px] py-[10px] rounded-[25px]`}>
                <div className={`rounded-[25px] p-8`}>
                    <div className={`flex items-center`}>
                        <img src={Person} alt="Person Icon" className={`mr-6`}/>
                        <h3 className={`text-[1.4rem] text-PrimaryColor font-medium font-Roboto hover:text-YellowColor`}>
                            {author}
                        </h3>
                    </div>

                    <h3 className={`text-[1.8rem] text-PrimaryColor font-Roboto font-[600] mb-2 hover:text-YellowColor my-[1.6rem]`}>
                        {title}
                    </h3>

                    <p className={`text-[1.4rem] text-ParagraphColor font-Roboto font-normal mb-4 hover:text-YellowColor leading-[1.6] mt-[1.2rem]`}>
                        {content}
                    </p>

                    <ButtonWithArrowStyleItem >Read More</ButtonWithArrowStyleItem>
                </div>
            </div>
        </div>
    );
};