import React, {useEffect, useState} from 'react';
import {Switch, useHistory, useParams} from "react-router-dom";
import StepSingleQuestion from "./steps/StepSingleQuestion";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import StepMultiQuestion from "./steps/StepMultiQuestion";
import './details.scss'
import axios from "axios";

const questionsCooking = [
    {
        "single": false,
        "preview": true,
        "headImg": "https://cdn.achareh.co/production.achareh.ir/listings/services/6c1d25ad-2078-41d8-88d1-a350a7c578e2/image.jpg",
        "required": true,
        "title": "آشپزی",
        "summery": "ارائه خدمات آشپزی در محل شما",
        "description": "این سرویس برای وقتی که مهمانی دارید و نمی خواهید غذا از بیرون بگیرید بسیار مفید است. معمولا شما یک نفر را نیاز دارید که در آشپزخانه کنار شما باشد تا غذاها راحت تر و زودتر آماده شود. این فرد یک متخصص آشپزی آچاره است که به منزل شما می آید و خودش می تواند غذاهای مدنظر شما را در آشپزخانه شما آماده کند.\n" +
            "جهت استفاده بهتر از این سرویس لطفا به موارد زیر توجه فرمایید:\n" +
            "\n" +
            "هزینه ارائه این سرویس توسط متخصصین آقا برای حداقل 4 ساعت و کمتر 180.000 تومان و به ازای هر ساعت اضافه 25.000 تومان به هزینه اضافه میگردد. همچنین ارائه این سرویس توسط متخصصین خانم برای حد اقل 4 ساعت 210.000 تومان و به ازای هر ساعت اضافه 30.000 تومان به هزینه اضافه میگردد.\n" +
            "\n" +
            "**- برخی از مناطق به دلیل سختی رفت و آمد بین 20.000 الی 30.000 تومان مشمول هزینه ایاب و ذهاب شده که این مبلغ بر مجموع هزینه اضافه شده و در پایان ثبت سفارش به شما اعلام می شود.\n" +
            "\n" +
            "- در صورتی که خدمات درخواستی شما بیشتر از ساعت 20 شب به‌ طول بیانجامد، هزینه برگشت نیروی ارسالی تا سقف 25.000 تومان برعهده‌ی شما(مشتری) خواهد بود.\n" +
            "\n" +
            "\n" +
            "گر نیرو در زمانی کمتر از زمان درخواستی شما کار مورد نظر را به اتمام برساند، هزینه دریافتی تغیبری نخواهد کرد.\n" +
            "\n" +
            "پخت انواع خورش، غذای کبابی، آش، سوپ و تهیه انواع پیش غذا و دسر قابل ارائه می‌باشد.\n" +
            "\n" +
            "جهت انجام با کیفیت هر چه بیشتر سفارش، بهتر است حداقل یک روز قبل از زمان مورد نظر اقدام به ثبت سفارش نمایید.\n" +
            "\n" +
            "تهیه لوازم مورد نیاز جهت ارائه سرویس مناسب توسط متخصص، بر عهده مشتری می‌باشد.\n" +
            "\n" +
            "در صورتیکه به هردلیلی پس از مراجعه نیرو از انجام سفارش منصرف شدید هزینه ایاب و ذهاب به مبلغ 40.000 تومان باید به متخصص پرداخت کردد.",
        "options": [
            {
                "label": "گزینه یک",
                "value": "1"
            },
            {
                "label": "گزینه دو",
                "value": "2"
            }
        ],
        "id": "0"
    },
    {
        "single": false,
        "preview": false,
        "required": true,
        "title": "Specialist",
        "summery": "Product Infrastructure Coordinator",
        "description": "Et hic quo eos aut consectetur laborum velit laborum. Beatae dolorum nulla soluta maxime culpa. Deserunt dignissimos ex saepe quo et esse sunt quasi mollitia. Consequatur sed rerum eum quidem aut omnis facilis eius id. Inventore sequi perspiciatis sit quisquam veritatis iure et soluta. Excepturi quaerat aperiam ut fugit quam iusto cupiditate eligendi cupiditate.\n \rFugiat incidunt dolore sint eius. Voluptate a velit et qui perspiciatis qui et ea nobis. Ullam provident sit. Eius voluptas debitis.\n \rQui dolor ut reprehenderit dolore dolores. Id aut iusto quaerat non aut. Modi enim ipsam. Necessitatibus eaque natus labore.",
        "options": [
            {
                "label": "گزینه یک",
                "value": "1"
            },
            {
                "label": "گزینه دو",
                "value": "2"
            }
        ],
        "id": "1"
    },
    {
        "single": false,
        "preview": false,
        "required": true,
        "title": "Designer",
        "summery": "Corporate Brand Planner",
        "description": "Et quis quo veniam quia sunt maiores excepturi veniam. Facilis sit aliquam veritatis vitae. Reiciendis unde inventore id enim ipsa maiores et recusandae non. Quia eius consequatur possimus. Delectus magnam enim ut sint quisquam neque ea veritatis facere.\n \rUt alias alias sed deserunt voluptates aliquam praesentium nisi. Ut quo beatae ut. Aut dolorum saepe eligendi sunt. Et fugit delectus et.\n \rOmnis qui error nobis modi nostrum sint exercitationem nam ipsum. Quia rerum et et soluta. Quia sequi quasi dolor rerum enim animi velit. Provident sint quidem. Quia nulla saepe sit. Impedit iure possimus amet.",
        "options": [
            {
                "label": "گزینه یک",
                "value": "1"
            },
            {
                "label": "گزینه دو",
                "value": "2"
            }
        ],
        "id": "2"
    },
    {
        "single": true,
        "preview": false,
        "required": false,
        "title": "Strategist",
        "summery": "Future Communications Architect",
        "description": "Et sapiente voluptas. Et adipisci sed doloremque reiciendis ut. Facere odio qui.\n \rRerum et corrupti voluptatem quae ex. Enim in nihil. Voluptatibus eaque eum accusamus eaque debitis harum est.\n \rMaxime aliquid quasi occaecati itaque architecto rerum consequatur. Sit dignissimos illum hic sed occaecati voluptate officiis consectetur. Tempore sed quam. Sint et molestiae. Doloribus optio nobis illo officiis sit eaque impedit tempore. Ratione incidunt officiis sed rerum nostrum quod.",
        "options": [
            {
                "label": "گزینه یک",
                "value": "1"
            },
            {
                "label": "گزینه دو",
                "value": "2"
            }
        ],
        "id": "3"
    },
    {
        "single": true,
        "required": true,
        "preview": false,
        "title": "Administrator",
        "summery": "Forward Solutions Developer",
        "description": "Cupiditate qui atque facere pariatur. Sint consectetur occaecati repudiandae ut illum dolorem deleniti consequatur est. Voluptas et ea quaerat nihil.\n \rEveniet debitis illo voluptas aliquid aut consequatur. Excepturi quo pariatur odio facere nam aut in natus. Nemo ipsa qui nam delectus aperiam hic praesentium rerum. Quisquam ut accusamus. Culpa illo vitae ut dolorem. Delectus ad aut harum.\n \rEum tempore id. Et esse sint ea velit assumenda similique nostrum officiis. Omnis voluptas eaque nam magnam voluptatum nam et sit. Reiciendis qui dolore aspernatur nihil. Veritatis possimus sed eos quia neque.",
        "options": [
            {
                "label": "گزینه یک",
                "value": "1"
            },
            {
                "label": "گزینه دو",
                "value": "2"
            }
        ],
        "id": "4"
    },
    {
        "single": false,
        "required": true,
        "preview": false,
        "title": "Orchestrator",
        "summery": "National Intranet Technician",
        "description": "Animi voluptates nostrum sit sit. Minus quia quos cumque. Dolorem ut facere tempore similique et. Quia natus et autem eum. Assumenda consectetur ut corrupti mollitia architecto dolor.\n \rIn rerum similique sint. Beatae saepe quis reiciendis aspernatur. Numquam saepe qui. Vero perferendis aut iure ratione vitae assumenda porro. Non rerum harum ut. Provident nulla rerum nesciunt et aliquam possimus rerum.\n \rOfficia eum sequi cum et accusamus. Qui aut incidunt distinctio eos perferendis cum. Eum dolores ex vitae rerum. Sapiente architecto autem.",
        "options": [
            {
                "label": "گزینه یک",
                "value": "1"
            },
            {
                "label": "گزینه دو",
                "value": "2"
            }
        ],
        "id": "5"
    },
    {
        "single": true,
        "required": false,
        "preview": false,
        "title": "Facilitator",
        "summery": "Investor Mobility Producer",
        "description": "Laudantium est aut. Quos ut ea rerum voluptatum iusto nulla esse repudiandae modi. Autem dolores sed sed veniam. Voluptatem voluptas corrupti ex et.\n \rId quia veritatis aut aspernatur et facilis. Itaque est quasi ratione perspiciatis pariatur molestiae nam omnis rerum. Sed dolores quae hic ducimus sed porro dolor. Voluptatum et quae numquam ipsum ut qui et. Officiis eum sit omnis totam ex labore nostrum.\n \rQuidem eveniet iure impedit vero soluta repellendus. Non fuga est expedita expedita. Sunt beatae repellendus eos. Quo ipsa inventore quis nemo aut dolor et alias.",
        "options": [
            {
                "label": "گزینه یک",
                "value": "1"
            },
            {
                "label": "گزینه دو",
                "value": "2"
            }
        ],
        "id": "6"
    },
    {
        "single": true,
        "required": false,
        "preview": false,
        "title": "Executive",
        "summery": "Corporate Solutions Planner",
        "description": "Sed molestias et laudantium. Porro quod aut quam aliquid ad. Officiis ad ut. Minus corporis possimus quas odio enim aperiam et. Iste autem doloribus rerum dolorem.\n \rBeatae et sit atque voluptates quas beatae in molestiae illo. Eum vero dolores. Reiciendis a quaerat ex. Veniam et vel odit ea aut adipisci aliquam maiores et.\n \rEt totam in sint. Aut asperiores dolores. Quia quisquam consequatur corrupti qui rem sint nostrum deleniti.",
        "options": [
            {
                "label": "گزینه یک",
                "value": "1"
            },
            {
                "label": "گزینه دو",
                "value": "2"
            }
        ],
        "id": "7"
    },
    {
        "single": false,
        "required": true,
        "preview": false,
        "title": "Developer",
        "summery": "Corporate Identity Executive",
        "description": "Non rem voluptas. Impedit praesentium laudantium ratione tempora dolores rem. Qui autem velit dignissimos est est officiis doloribus aliquid dolores. Dolor illo ut odio.\n \rQuo qui impedit rerum sint odit eum amet aspernatur temporibus. Debitis nihil velit alias laudantium. Accusantium voluptates deserunt temporibus enim. Excepturi ullam fugit quidem recusandae.\n \rEa quo est sint facilis. Assumenda quia minus sit. Porro aut nostrum culpa voluptatem assumenda unde deleniti tempore.",
        "options": [
            {
                "label": "گزینه یک",
                "value": "1"
            },
            {
                "label": "گزینه دو",
                "value": "2"
            }
        ],
        "id": "8"
    },
    {
        "single": false,
        "required": false,
        "title": "Orchestrator",
        "preview": false,
        "summery": "Forward Program Administrator",
        "description": "Voluptatem fugiat architecto voluptas voluptatem autem ea unde ut. Sapiente excepturi autem ipsa totam quos consequuntur nulla molestiae quam. Quam laborum fuga eligendi blanditiis eligendi quis. Magnam dolorem sed dolorem minima non ad.\n \rEst ab quos sunt quia quia qui sapiente. Voluptates quaerat suscipit rem vel et rerum in. Est natus nisi nam consectetur odit porro excepturi. Ipsum non quia ut vero at ullam tenetur exercitationem voluptas. Cupiditate ad sed. Fugiat animi nihil rerum earum deserunt.\n \rRem earum molestias veritatis quas sequi aspernatur quia. Accusantium maxime facere est molestias ullam nisi nemo enim. A eius totam aut voluptates voluptas ea ipsa deserunt. Ducimus molestias laboriosam minus voluptas aspernatur.",
        "options": [
            {
                "label": "گزینه یک",
                "value": "1"
            },
            {
                "label": "گزینه دو",
                "value": "2"
            }
        ],
        "id": "9"
    },
    {
        "single": false,
        "required": false,
        "preview": false,
        "title": "Strategist",
        "summery": "Lead Accountability Administrator",
        "description": "Sunt ipsam reprehenderit suscipit nisi doloribus. Amet quibusdam magnam est nobis voluptatem. Aliquid iste atque voluptatem sed atque sed. Sunt qui omnis autem nihil qui voluptatem quod facilis. Et ea facilis nostrum. Iusto dignissimos cum facilis omnis dolor ipsa eius sit.\n \rCommodi modi qui atque sint nihil quisquam laboriosam corrupti incidunt. Nesciunt porro excepturi. Officia necessitatibus omnis enim aperiam ipsam harum impedit quas recusandae. Tempore non aperiam a ab molestias. Ab perspiciatis minus et optio maxime.\n \rNumquam natus adipisci rerum dolores ducimus voluptates aliquam. Sequi enim et esse sequi quis et quaerat. Molestias explicabo hic nesciunt ea cupiditate.",
        "options": [
            {
                "label": "گزینه یک",
                "value": "1"
            },
            {
                "label": "گزینه دو",
                "value": "2"
            }
        ],
        "id": "10"
    }
]

const Details = (props) => {
    const {id: pageId, step = 0} = useParams()
    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        /*axios.get(`https://61c216589dbcca0017c8232b.mockapi.io/api/v1/${pageId}`, {}).then(res => {
        })*/
        setTimeout(() => {
            setQuestions(questionsCooking)
        }, 1500);
    }, [])
    const onChangeQuestionValue = (value) => {
        const lastQuestion = [...questions];
        lastQuestion[step].value = value;
        setQuestions(lastQuestion)
    }
    const generateContent = () => {

        const question = questions[step];
        if (!question)
            return <p>loading questions... </p>
        if (question.preview === true)
            return <div className={"body-preview"} style={{backgroundColor: "#f5f5f5"}}>
                <Container>
                    <Row className={"preview-section"}>
                        <Col xs={12}>
                            <div className={"d-flex"}>
                                <Image src={question.headImg} width={50} height={"auto"}
                                       className={"img-fluid"}></Image>
                                <h4 className={"me-4"}><b>{question.title}</b></h4>
                            </div>
                        </Col>
                        <Col xs={12} className={"bg-white border mt-4 preview-content"}>
                            <div>
                                <h6 className={"mb-4"}><b>{question.summery}</b></h6>
                                <p className={"preview-desc"}>
                                    {question.description}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        if (question.single === true)
            return <StepSingleQuestion question={question}
                                       value={questions[step].value}
                                       setValue={onChangeQuestionValue}/>
        else if (question.single === false)
            return <StepMultiQuestion question={question}/>
    }

    const QuestionLayout = (props) => {
        function handleNextStep() {
            if (step < questions.length - 1)
                history.push(`/Details/${pageId}/${+step + 1}`)
        }

        return <>
            {props.children}
            <div className={"nav-down py-3 d-flex justify-content-around"}>
                <Button onClick={() => step > 0 && history.push(`/Details/${pageId}/${step - 1}`)}>بازگشت</Button>
                <Button
                    onClick={handleNextStep}
                >مرحله
                    بعد</Button>
            </div>
        </>
    }


    return <QuestionLayout>
        {generateContent()}
    </QuestionLayout>
};

export default Details;
