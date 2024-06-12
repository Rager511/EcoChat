import React, { useState } from 'react';
import styles from '../../../styles/_questionnaire.module.css';
import { styled } from '@mui/material/styles';
import Link from 'next/link'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';



const questions = {
    environmental: [
        "Does your company have a policy to reduce carbon emissions?",
        "What percentage of your energy consumption comes from renewable sources?",
        "How does your company manage waste and recycling?",
        "Do you have targets for reducing water usage? If so, what are they?",
        "What initiatives has your company taken to improve energy efficiency?",
        "Are you tracking your company's carbon footprint? Please provide details.",
        "How do you ensure compliance with environmental regulations?"
    ],
    social: [
        "What diversity and inclusion initiatives does your company have in place?",
        "How does your company ensure employee health and safety?",
        "What are your company's policies on fair labor practices?",
        "How does your company support the local community?",
        "What measures are in place to ensure customer data privacy and protection?",
        "Does your company have a policy against workplace discrimination and harassment?",
        "What training programs are available for employee development?"
    ],
    governance: [
        "How is your board of directors structured in terms of independence and diversity?",
        "What policies are in place to prevent corruption and bribery?",
        "How does your company manage risk, including ESG-related risks?",
        "How are executive compensations linked to ESG performance?",
        "What is your company's approach to shareholder engagement?",
        "Are there any whistleblower policies in place? Please provide details.",
        "How does your company ensure transparency in its reporting and disclosures?"
    ]
};

const questions2 = [
    {
        title: "Strategic Planning",
        questions: [
            {
                question: "Have you conducted strategic planning in the last three years?",
                answers: ["No (1 pt)", "Yes (2 pts)"]
            },
            {
                question: "How often do you review your strategic planning?",
                answers: ["Not done (0 pts)", "Information not available (1 pt)", "Annually (2 pts)", "Quarterly (3 pts)", "Monthly (4 pts)"]
            }
        ]
    },
    {
        title: "Sales",
        questions: [
            {
                question: "Can you establish an annual sales budget using historical sales data?",
                answers: ["No (0 pts)", "Yes (1 pt)"]
            },
            {
                question: "Do you track actual sales against a budget?",
                answers: ["No (0 pts)", "Yes (1 pt)"]
            },
            {
                question: "How often do you monitor sales performance (actual versus budget)?",
                answers: ["No information available (0 pts)", "Annually (1 pt)", "Quarterly (2 pts)", "Monthly (3 pts)"]
            },
            {
                question: "How do you track sales and opportunities?",
                answers: ["Information not available (0 pts)", "Not done (1 pt)", "Consulting an expert (2 pts)", "Manual tracking (3 pts)", "Automated with software (4 pts)"]
            }
        ]
    },
    {
        title: "Revenue / Expenses",
        questions: [
            {
                question: "Can you establish an operating budget (revenue and expenses) using historical company data?",
                answers: ["No (0 pts)", "Yes (1 pt)"]
            },
            {
                question: "How often are your company's financial results available for analysis?",
                answers: ["Annually, upon production of financial statements (0 pts)", "Quarterly (1 pt)", "Monthly (2 pts)", "Real-time (3 pts)"]
            },
            {
                question: "Can you continuously measure your revenue performance by identifying variances with a budget forecast during the year?",
                answers: ["No (0 pts)", "Yes (1 pt)"]
            },
            {
                question: "Can you continuously measure your expense performance by identifying variances with a budget forecast during the year?",
                answers: ["No (0 pts)", "Yes (1 pt)"]
            },
            {
                question: "How often do you monitor company profitability?",
                answers: ["No information available (0 pts)", "Annually (1 pt)", "Quarterly (2 pts)", "Monthly (3 pts)"]
            }
        ]
    },
    {
        title: "Production",
        questions: [
            {
                question: "Are you able to track gross margins on your products and services?",
                answers: ["No (0 pts)", "Yes (1 pt)"]
            },
            {
                question: "How often do you track gross margins on your company's products and services?",
                answers: ["No information available (0 pts)", "Annually (1 pt)", "Quarterly (2 pts)", "Monthly (3 pts)", "Regularly (4 pts)"]
            },
            {
                question: "How do you track your margins?",
                answers: ["Information not available (0 pts)", "Not done (1 pt)", "Consulting an expert (2 pts)", "Manual tracking (3 pts)", "Automated with software (4 pts)"]
            }
        ]
    },
    {
        title: "Human Resources",
        questions: [
            {
                question: "Are you able to track your annual workforce planning in the company?",
                answers: ["No (0 pts)", "Yes (1 pt)"]
            },
            {
                question: "How often do you track workforce planning (employees and subcontractors) in the company?",
                answers: ["No information available (0 pts)", "Annually (1 pt)", "Quarterly (2 pts)", "Monthly (3 pts)"]
            },
            {
                question: "How do you track workforce changes affecting employees and subcontractors during the year?",
                answers: ["Not done (0 pts)", "Manual tracking (1 pt)", "Automated with software (2 pts)"]
            },
            {
                question: "Are you able to track salary and subcontractor costs compared to your annual forecasts?",
                answers: ["No (0 pts)", "Yes (1 pt)"]
            }
        ]
    },
    {
        title: "Assets / Liabilities / Investments",
        questions: [
            {
                question: "How are significant investment decisions made in your company?",
                answers: ["Not done (0 pts)", "Informally and based on experience (1 pt)", "After consulting an expert (2 pts)", "After conducting a comprehensive analysis and simulations (3 pts)"]
            },
            {
                question: "Are you able to simulate to determine the impact of an investment on assets, liabilities, or company cash flow in the future?",
                answers: ["No (0 pts)", "Yes (1 pt)"]
            },
            {
                question: "How do you conduct simulations for your investment and financing decisions?",
                answers: ["Not done (0 pts)", "Consulting an expert (1 pt)", "Manual simulation (2 pts)", "Automatically with software (3 pts)"]
            }
        ]
    },
    {
        title: "Liquidity",
        questions: [
            {
                question: "Are you able to establish a cash budget using your company's historical data?",
                answers: ["No (0 pts)", "Yes (1 pt)"]
            },
            {
                question: "How often is your company's cash budget available for analysis?",
                answers: ["Not done (0 pts)", "Annually, upon production of financial statements (1 pt)", "Quarterly (2 pts)", "Monthly (3 pts)", "Real-time (4 pts)"]
            },
            {
                question: "How do you track the company's cash budget?",
                answers: ["Not done (0 pts)", "Consulting an expert (1 pt)", "Manual tracking (2 pts)", "Automatically with software (3 pts)"]
            },
            {
                question: "Are you able to continuously measure liquidity performance by identifying variances with a budget forecast during the year?",
                answers: ["No (0 pts)", "Yes (1 pt)"]
            }
        ]
    },


];

const Checklist = {
    'Worker Health & Safety': [
        "Does the company have and adhere to an occupational health & safety (OHS) policy which sets out clear commitments and targets to improve worker health & safety?",
        "Does the company's OHS policy have executive and/or board-level commitment, support, and endorsement?",
        "Is the company's OHS policy regularly reviewed and updated accordingly?",
        "Does the company have a functional OHS management system?",
        "Has the OHS been externally certified and if so to what standard e.g. ISO 45001?",
        "Does the company provide employees and senior management with OHS induction/training where necessary?",
        "Do the company’s working conditions show high regard for its employees’ health and safety?",
        "Does the company embrace a culture of safety and has safety culture review been conducted across the organisation?",
        "Does the company have formal processes for regularly undertaking workplace risk assessments?",
        "Does the company monitor and report workplace incidents, accidents and near misses?",
    ],

    'Human Rights & Labour Practices': [
        "Do all employees have formal contracts of employment?",
        "Does the company have and adhere to a policy which sets out clear commitments and targets that covers sexual harassment?",
        "Does the company provide ESG training to employees?",
        "Is there a formal and functional grievance mechanism for employees and contractors?",
        "Are employees able to share their views and concerns and are they heeded and responded to?",
        "Does the company offer an employee benefits program?",
        "Do all employees meet minimum age standards and regulations?",
        "Do all employees meet minimum wage standards and regulations?",
        "Does the company have programs in place to reduce employee turnover and improve talent retention rates?",
        "Does the company have insurance policies in place for employees and industrial injury claims?",
    ],

    'Regulatory compliance - Social': [
        "The company has not been subject to any enforcement action by regulatory authorities for breaches of relevant employment, health & safety legislation in the last three years (note: 'Yes' confirms the absence of such enforcement actions in the past three years).",
        "The company has not had any serious social-related complaints, claims, enforcement actions associated with employees or key stakeholders such as customers or suppliers in the last three years (note: 'Yes' confirms the absence of any such complaints, claims, or enforcement actions).",
        "The company has not had any serious human rights or labour-related complaints, claims, enforcement actions in the last three years (note: 'Yes' confirms the absence of such complaints, claims or enforcement actions).",
        "The company’s suppliers have not had any serious human rights or labour-related complaints, claims, enforcement actions in the last three years (note: 'Yes' confirms the absence of such complaints, claims or enforcement actions).",
    ],

    'Community Involvement': [
        "Does the company provide community investments, sponsorships, or product donations?",
        "Are there any formal community relations programs in place to promote company involvement in the community",
        "The company has not been involved in any community or workforce unrest in the last three years (note: 'Yes' confirms the absence of such unrest).",
        "The company has not been involved in any negative NGO/media campaigns in the last three years (note: 'Yes' confirms the absence of such involvement).",
        "Does the company have formal programs in place to improve its social impact, internally and in the broader community?",
    ],

    'Consumer Safety & Product Safety': [
        "Does the company have policies in place to ensure the health and safety of consumers?",
        "Is the company compliant with any product or sector specific regulations that it is bound by e.g. food safety, pharma GMP, other?",
        "Is the company compliant with product/service information and fair disclosure/labelling it is bound by?",
        "The company has not been involved in any incidents of non-compliance concerning product or service information or fair disclosure/labelling in the past three years (note: 'Yes' confirms the absence of such involvement).",
        "Does the company take responsibility for the environmental impacts of its products throughout their lifecycle?",
    ],


}

const scalingQuestions = [
    "On a scale of 1 to 5, how committed is your company to reducing carbon emissions?",
    "On a scale of 1 to 5, how effective are your diversity and inclusion initiatives?",
    "On a scale of 1 to 5, how transparent is your company's governance structure?",
    "On a scale of 1 to 5, how well does your company manage environmental risks?",
    "On a scale of 1 to 5, how satisfied are you with your company's employee training programs?",
    "On a scale of 1 to 5, how effectively does your company engage with the community?",
    "On a scale of 1 to 5, how well does your company protect customer data?",
    "On a scale of 1 to 5, how transparent is your company about its financial performance?",
    "On a scale of 1 to 5, how committed is your company to ethical business practices?",
    "On a scale of 1 to 5, how satisfied are you with the company's overall ESG performance?"
];

const Questionnaire = () => {

    const [responses, setResponses] = useState({
        environmental: Array(questions.environmental.length).fill(''),
        social: Array(questions.social.length).fill(''),
        governance: Array(questions.governance.length).fill(''),
        scaling: Array(scalingQuestions.length).fill(3),
        checklist: {
            'Worker Health & Safety': Array(Checklist['Worker Health & Safety'].length).fill(''),
            'Human Rights & Labour Practices': Array(Checklist['Human Rights & Labour Practices'].length).fill(''),
            'Regulatory compliance - Social': Array(Checklist['Regulatory compliance - Social'].length).fill(''),
            'Community Involvement': Array(Checklist['Community Involvement'].length).fill(''),
            'Consumer Safety & Product Safety': Array(Checklist['Consumer Safety & Product Safety'].length).fill('')
        },
        questions2: Array(questions2.length).fill('')
    });

    const [page, setPage] = useState(0);
    const [submittedFirstQuestionnaire, setSubmittedFirstQuestionnaire] = useState(false);
    const [notification, setNotification] = useState({ message: '', visible: false });


    const handleChange = (category, index, value) => {
        setResponses(prevResponses => {
            const newResponses = { ...prevResponses };
            newResponses[category][index] = value;
    
            return newResponses;
        });
    };

    const showNotification = (message) => {
        setNotification({ message: message, visible: true });
        setTimeout(() => {
            setNotification({ ...notification, visible: false });
        }, 4000);
    };


    const Notification = ({ message, visible }) => {
        return (
            <Dialog open={visible} sx={{ backgroundColor: 'light blue', padding: '5px' }}>
                <DialogTitle sx={{ color: 'white', backgroundColor: '#9C1DE7' }}>Notification</DialogTitle>
                <DialogContentText sx={{ padding: '40px', fontSize: '1.1rem', color: 'black', textAlign: 'center' }}>
                    {message}
                </DialogContentText>
            </Dialog>
        );
    };



    const Img = styled('img')(({ theme }) => ({
        marginBottom: theme.spacing(10),
        [theme.breakpoints.down('lg')]: {
            height: 450,
            marginTop: theme.spacing(10)
        },
        [theme.breakpoints.down('md')]: {
            height: 400
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(13)
        }
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let emptyFields = [];
    
        switch (page) {
            case 1:
                emptyFields = Object.values(responses).filter(responseArray => {
                    return Array.isArray(responseArray) && responseArray.every(response => typeof response === 'string' && response.trim() === '');
                });
                break;
            case 2:
                emptyFields = Object.values(responses.checklist).filter(responseArray => {
                    return responseArray.some(response => typeof response === 'string' && response.trim() === '');
                });
                break;
            case 3:
                emptyFields = responses.scaling.filter(value => value === '');
                break;
            case 4:
                emptyFields = Object.values(responses.checklist).filter(responseArray => {
                    return responseArray.some(response => typeof response === 'string' && response.trim() === '');
                });
                break;
            case 5:
                emptyFields = responses.questions2.filter(response => typeof response === 'string' && response.trim() === '');
                break;
            default:
                break;
        }

        console.log('Empty Fields before filtering:', emptyFields);

        emptyFields = emptyFields.filter(responseArray => responseArray.every(field => field.trim() === ''));
        
        console.log('Empty Fields after filtering:', emptyFields);
        
        const areAnyEmptyFields = emptyFields.flat().every(field => field.trim() === '');

        console.log('Empty Fields:', emptyFields);
        console.log('Submitted First Questionnaire:', submittedFirstQuestionnaire);
        console.log('Page:', page);

        if (emptyFields > 0) {
            showNotification('Please fill in all the fields before submitting.');

            return;
        }
        if (!submittedFirstQuestionnaire) {
            setSubmittedFirstQuestionnaire(true);
        }

        if (page === 0) {
            setPage(1);
        } else if (page === 1 || page === 2 || page === 3 || page === 4) {
            setPage(page + 1);
        }
    };

    const calculateProgress = () => {
        switch (page) {
            case 0:
                return 0; // No progress on the first page
            case 1:
                return 25; // 25% progress on the second page
            case 2:
                return 50; // 50% progress on the third page
            case 3:
                return 75; // 75% progress on the fourth page
            case 4:
                return 100; // 100% progress on the final page
            default:
                return 0; // Default to 0 if page is out of range
        }
    };

    const progress = calculateProgress();


    const handleStart = () => {
        setPage(1);
    };

    const prevPage = () => {
        setPage(page - 1);
    };

    const nextPage = () => {
        setPage(page - 1);
    };

    return (
        <div>
            <Notification message={notification.message} visible={notification.visible} />

            {/* Progress Bar */}
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${progress}%` }}></div>
            </div>

            <form onSubmit={handleSubmit} className={styles.questionnaireForm}>
                {/* Introduction Section */}
                {page === 0 && (
                    <div className={styles.introSection}>
                        <h2>Welcome to the ESG Questionnaire</h2>
                        <hr />
                        <h3>Introduction: Assessing Your ESG Performance</h3>
                        <p>
                            In today's dynamic business landscape, Environmental, Social, and Governance (ESG) factors are increasingly recognized as critical indicators of a company's long-term sustainability and success.
                        </p>
                        <p>
                            This questionnaire is designed to help your company evaluate its ESG performance across key areas, enabling you to identify strengths, pinpoint areas for improvement, and enhance overall sustainability practices.
                        </p>
                        <p>
                            By participating in this assessment, you are taking a proactive step towards understanding and enhancing your company's impact on the environment, society, and governance structures.
                        </p>
                        <hr />
                        <h3>Why Assess ESG Performance?</h3>
                        <ul>
                            <li>Risk Mitigation: Identifying and addressing ESG risks can help mitigate potential financial, reputational, and regulatory risks, safeguarding your company's long-term viability.</li>
                            <li>Competitive Advantage: Demonstrating strong ESG performance can enhance your company's reputation, attract investors, and foster customer loyalty, providing a competitive edge in the market.</li>
                            <li>Stakeholder Engagement: Engaging with stakeholders, including investors, employees, customers, and communities, on ESG matters fosters transparency, trust, and long-term partnerships.</li>
                            <li>Sustainability Impact: Improving ESG performance contributes to positive environmental outcomes, promotes social equity and inclusion, and strengthens corporate governance, aligning with global sustainability goals.</li>
                        </ul>
                        <hr />
                        <h3>How to Use This Questionnaire</h3>
                        <p>
                            This questionnaire is divided into sections covering Environmental, Social, and Governance aspects, each containing specific questions related to your company's practices and policies. Please take the time to provide accurate and comprehensive responses based on your current operations and initiatives.
                        </p>
                        <p>
                            Your participation in this assessment is voluntary, and all responses will be kept confidential. The information gathered will be used solely for the purpose of evaluating your company's ESG performance and providing tailored recommendations for improvement.
                        </p>
                        <hr />
                        <h3>Thank You</h3>
                        <p>
                            Thank you for your commitment to sustainability and for participating in this assessment. Your input is invaluable in driving positive change and advancing responsible business practices. Let's work together to create a more sustainable and resilient future for all.
                        </p>
                        <h4>Please click the button below to start.</h4>
                        <button
                            type="button"
                            className={styles.startButton}
                            onClick={handleStart}
                        >
                            Start
                        </button>
                    </div>
                )}

                {/* Questionnaire Sections */}
                {page === 1 && (
                    <>
                        <div className={styles.categorySection}>
                            <h3 className={styles.categoryTitle}>Questionnaire</h3>
                            {Object.keys(questions).map(category => (
                                <div key={category} className={styles.categorySection}>
                                    <h3 className={category === "environmental" || category === "social" || category === "governance" ? styles.categorySubTitle : styles.categoryTitle}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </h3>
                                    {questions[category].map((question, index) => (
                                        <div key={index} className={styles.questionItem}>
                                            <label className={styles.questionLabel}>{question}</label>
                                            <textarea
                                                className={styles.questionTextarea}
                                                value={responses[category][index]}
                                                onChange={(e) => handleChange(category, index, e.target.value)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        {/* Pagination Buttons */}
                        <div className={styles.paginationButtons}>
                            <button type="button" className={styles.paginationButton} onClick={prevPage}>
                                Previous
                            </button>
                            <button type="submit" className={styles.paginationButton} onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </>
                )}


                {/* Checklist Section */}
                {page === 2 && (
                    <>
                        <div className={styles.categorySection}>
                            <h3 className={styles.categoryTitle}>Checklist</h3>
                            {Object.keys(Checklist).map(category => (
                                <div key={category} className={styles.categorySection}>
                                    <h3 className={category === "Worker Health & Safety" || category === "Human Rights & Labour Practices" || category === "Regulatory compliance - Social" || category === "Community Involvement" || category === "Consumer Safety & Product Safety" ? styles.categorySubTitle : styles.categoryTitle}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </h3>
                                    {Checklist[category].map((question, index) => (
                                        <div key={index} className={styles.checklistItem}>
                                            <label className={styles.questionLabel}>{question}</label>
                                            <div className={styles.checklistOptions}>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`checklist-${category}-${index}`}
                                                        value="Yes"
                                                        checked={responses.checklist[category][index] === "Yes"}
                                                        onChange={(e) => handleChecklistChange(category, index, e.target.value)}
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`checklist-${category}-${index}`}
                                                        value="No"
                                                        checked={responses.checklist[category][index] === "No"}
                                                        onChange={(e) => handleChecklistChange(category, index, e.target.value)}
                                                    />
                                                    No
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`checklist-${category}-${index}`}
                                                        value="NA"
                                                        checked={responses.checklist[category][index] === "NA"}
                                                        onChange={(e) => handleChecklistChange(category, index, e.target.value)}
                                                    />
                                                    NA
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        {/* Pagination Buttons */}
                        <div className={styles.paginationButtons}>
                            <button type="button" className={styles.paginationButton} onClick={prevPage}>
                                Previous
                            </button>
                            <button type="submit" className={styles.paginationButton} onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </>
                )}

                {/* Scaling Questions Section */}
                {page === 3 && (
                    <div className={styles.categorySection}>
                        <h3 className={styles.categoryTitle}>Scaling Questions</h3>
                        {scalingQuestions.map((question, index) => (
                            <div key={index} className={styles.questionItem}>
                                <label className={styles.questionLabel}>{question}</label>
                                <div>
                                    {[1, 2, 3, 4, 5].map(value => (
                                        <label key={value}>
                                            <input
                                                type="radio"
                                                name={`scaling-${index}`}
                                                value={value}
                                                checked={responses.scaling[index] === value}
                                                onChange={(e) => handleChange('scaling', index, Number(e.target.value))}
                                            />
                                            {value}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {/* Pagination Buttons */}
                        <div className={styles.paginationButtons}>
                            <button type="button" className={styles.paginationButton} onClick={prevPage}>
                                Previous
                            </button>
                            <button type="submit" className={styles.paginationButton} onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                )}
                {page === 4 && (
                    <>
                        <div className={styles.categorySection}>
                            <h3 className={styles.categoryTitle}>Additional Questions</h3>
                            {questions2.map((section, index) => (
                                <div key={index} className={styles.categorySection}>
                                    <h3 className={styles.categorySubTitle}>{section.title}</h3>
                                    {section.questions.map((question, qIndex) => (
                                        <div key={qIndex} className={styles.questionItem}>
                                            <label className={styles.questionLabel}>{question.question}</label>
                                            <div>
                                                {question.answers.map((answer, aIndex) => (
                                                    <label key={aIndex}>
                                                        <input
                                                            type="radio"
                                                            name={`questions2-${index}-${qIndex}`}
                                                            value={answer}
                                                            checked={responses.questions2[index] === answer}
                                                            onChange={(e) => handleChange('questions2', index, e.target.value)}
                                                        />
                                                        {answer}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        {/* Pagination Buttons */}
                        <div className={styles.paginationButtons}>
                            <button type="button" className={styles.paginationButton} onClick={prevPage}>
                                Previous
                            </button>
                            <button type="submit" className={styles.paginationButton} onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </>
                )}
                {/* Final Thank You Page */}
                {page === 5 && (
                    <div className={styles.thankYouPage}>
                        <h2 className={styles.centerText}>Thank You!</h2>
                        <p className={styles.centerText}>Your questionnaire responses have been successfully submitted.</p>
                        <p className={styles.centerText}>We appreciate your participation and commitment to sustainability.</p>
                        <Img className={styles.marginLeft} height='400' alt='Thank You Image' src='/images/pages/401.png' />
                        <div>
                            <Link href='/dashboard/' passHref>
                                <button type="button" className={styles.goBackButton} onClick={nextPage}>
                                    Go Back
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Questionnaire;