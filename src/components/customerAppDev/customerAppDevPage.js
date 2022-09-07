import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { tw } from 'twind';
import Loader from '../loader';

function IndexPage({}) {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(' http://43.205.94.230/api/custom_app');

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        setApiData(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, []);
  return (
    <div>
      <div className={tw(`homeMainContainer mt-20`)}>
        {apiData == '' ? (
          <Loader />
        ) : (
          <div className="homeContainer">
            <div className="mobileContainer">
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_App_image}></img>
              </div>

              <div
                className="mobileTexBox"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(
                    apiData[0]?.web_and_mobile_app_devlopment
                  )[0].value,
                }}
              />
            </div>
            <Link href="/pricing">
              <div className="buildYourQuoteBtn">
                <div style={{ cursor: 'pointer' }}>Get Free Quote</div>
              </div>
            </Link>

            <div>
              <h1
                style={{ textAlign: 'center', margin: '60px 0px' }}
                className="clientDevHeaderText"
              >
                Our Product Development Process
              </h1>
            </div>

            <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
              <pre
                className="agileContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.discovery_phase)[0].value,
                }}
              />

              <div className="aligeImg">
                <img src={apiData[0]?.discovery_phage_image}></img>
              </div>
            </div>

            <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
              <pre
                className="agileContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.engineering_phase)[0].value,
                }}
              />

              <div className="aligeImg">
                <img src={apiData[0]?.engineering_phage_image}></img>
              </div>
            </div>

            <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
              <pre
                className="agileContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.lunch_phase)[0].value,
                }}
              />

              <div className="aligeImg">
                <img src={apiData[0]?.launch_phage_image}></img>
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '30px 0px' }}>
              <div
                className="mobileTexBox"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                  margin: '30px 0px',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(
                    apiData[0]?.a_new_apporch_to_software_engineering
                  )[0].value,
                }}
              />

              <div className="mobileImg">
                <img src={apiData[0]?.crm_screen_image}></img>
              </div>
            </div>

            <div className="AppDevMainContainer">
              <div className="AppDevContainer">
                <h1 className="clientDevHeaderText">Technology & Strategy</h1>
                <p className="clientDevParaText">
                  Our consulting is structured around{' '}
                </p>
                <ul className="leaderUl">
                  <li>
                    Cutting down your costs and creating a technology framework
                    that will allow you to scale your business operations.
                  </li>
                  <li>Assessment of your business operational challenges.</li>
                  <li>Identification of your risk ratios.</li>
                  <li>
                    Addressing issues related to cash flow and unlocking your
                    balance sheet using technology.
                  </li>
                </ul>
              </div>

              <div className="AppDevContainer">
                <h1 className="clientDevHeaderText">
                  Minimum Viable Product Development
                </h1>
                <ul className="leaderUl">
                  <li>
                    Ensure the viability of your product with our MVP
                    development services
                  </li>
                  <li>
                    Request early adopter feedback at less than 1/3rd of the
                    cost & time required to develop a fully scaled software
                    product
                  </li>
                  <li>
                    Get a prototype of your product to attract investor
                    attention.
                  </li>
                </ul>
              </div>

              <div className="AppDevContainer">
                <h1 className="clientDevHeaderText">Mobile & Desktop Apps</h1>
                <p className="clientDevParaText">
                  We provide the following cross-platform mobile application
                  development solutions for Android, iOS, and Windows devices:
                </p>
                <ul className="leaderUl">
                  <li>Digital Commerce</li>
                  <li>Content distribution</li>
                  <li>CRM</li>
                  <li>ERP</li>
                  <li>Point of sale</li>
                  <li>Bespoke utility applications</li>
                </ul>
              </div>
            </div>

            <div className="AppDevMainContainer">
              <div className="AppDevContainer">
                <h1 className="clientDevHeaderText">Web & Cloud Apps</h1>
                <p className="clientDevParaText">
                  We offer customized software solutions for
                </p>
                <ul className="leaderUl">
                  <li>Web portals & eCommerce stores</li>
                  <li>Content management software</li>
                  <li>Customized web applications </li>
                  <li>Order processing</li>
                  <li>Inventory management</li>
                  <li>Accounting solutions</li>
                </ul>
              </div>

              <div className="AppDevContainer">
                <h1 className="clientDevHeaderText">User Experience Design</h1>
                <ul className="leaderUl">
                  <li>Responsive designs for a wide range of users</li>
                  <li>Designs that are consistent across different devices</li>
                  <li>
                    Include wearable devices, such as the Apple Watch, to mobile
                    devices, such as the iPhone, the high-resolution iMac 5k,
                    etc.
                  </li>
                </ul>
              </div>

              <div className="AppDevContainer">
                <h1 className="clientDevHeaderText">Cloud Deployment</h1>
                <p className="clientDevParaText">
                  EC Infosolutions is an implementation partner for:
                </p>

                <ul className="leaderUl">
                  <li>AWS Cloud</li>
                  <li>Google Cloud Platform</li>
                  <li>Azure</li>
                  <li>Zoho Creator</li>
                  <li>Shopify</li>
                </ul>
              </div>
            </div>

            <div className="AppDevMainContainer">
              <div className="AppDevContainer">
                <h1 className="clientDevHeaderText">Analytics & Insights</h1>
                <ul className="leaderUl">
                  <li>
                    Measure business KPI by using Analytics tools such as Google
                    Analytics & Glew
                  </li>
                  <li>
                    Predict business outcomes by incorporating statistical &
                    data science models
                  </li>
                  <li>Leverage the power of Machine Learning</li>
                </ul>
              </div>

              <div className="AppDevContainer">
                <h1 className="clientDevHeaderText">Internet of Things</h1>
                <ul className="leaderUl">
                  <li>
                    Incorporate IoT enabled sensors and relays in your factories
                    and smart devices
                  </li>
                  <li>
                    Capture PLC data & other device data using AWS IoT Platform
                  </li>
                  <li>Build tools for smart monitoring & control</li>
                </ul>
              </div>

              <div className="AppDevContainer">
                <h1 className="clientDevHeaderText">Blockchain</h1>
                <p className="clientDevParaText">
                  We focus on building the next generation of applications using
                  blockchain and smart contract technology & have experience in
                  working on both major DLT platforms - IBM Hyperledger &
                  Enterprise Ethereum.{' '}
                </p>
              </div>
            </div>

            <div className="AppDevMainContainer">
              <div className="AppDevContainer">
                <h1 className="clientDevHeaderText">AI, ML & Data Science</h1>
                <ul className="leaderUl">
                  <li>
                    Use technologies such as automatic speech recognition (ASR),
                  </li>
                  <li>
                    natural language understanding (NLU) to understand the
                    intent of the text & build the next generation of chat bots,
                    informational bots & productivity bots
                  </li>
                  <li>Use technology to respond to your users in speech.</li>
                </ul>
              </div>

              <div className="AppDevContainer">
                <h1 className="clientDevHeaderText">Digital Marketing</h1>
                <ul className="leaderUl">
                  <li>
                    Solutions to drive traffic to your website, brick-and-mortar
                    stores, etc. to facilitate lead generation.
                  </li>
                  <li>
                    Consultancy on lead nurturing & how to convert them into
                    paying customers.
                  </li>
                  <li>Identification & optimization of your sales funnel.</li>
                </ul>
              </div>

              <div className="AppDevContainer">
                <h1 className="clientDevHeaderText">QA & Cyber Security</h1>
                <p className="clientDevParaText">
                  We help companies secure their data from external
                  vulnerabilities, competitors, and data loss.
                </p>
                <ul className="leaderUl">
                  <li>Cybersecurity</li>
                  <li>Ethical hacking</li>
                  <li>Penetration testing services</li>
                  <li>Technical consultancy</li>
                </ul>
              </div>
            </div>

            <div className="mobileContainer">
              <div className="mobileImg">
                <img src={apiData[0]?.screen_image_2}></img>
              </div>
              <div
                className="mobileTexBox"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.experiance_does_count)[0]
                    .value,
                }}
              />
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.digital_e_commerse_apps)[0]
                      .value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image}></img>
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image_2}></img>
              </div>

              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.digital_mobile_apps)[0]
                      .value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.digital_operations_management_app
                    )[0].value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image_3}></img>
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="mobileImg">
                <img src={apiData[0]?.desktop_image}></img>
              </div>

              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.industry_4_apps)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.erp_implimentations)[0]
                      .value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image_4}></img>
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image_5}></img>
              </div>

              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.iot_smart_devices)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.fintech_applications)[0]
                      .value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image_6}></img>
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image_7}></img>
              </div>

              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.system_integration_and_interfacing
                    )[0].value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ marginTop: '100px' }}>
              <pre
                className="mobileTexBox"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                  marginLeft: '0px',
                  marginRight: '20px',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(
                    apiData[0]?.globle_delivary_and_exceptional_support
                  )[0].value,
                }}
              />

              <div className="mobileImg">
                <YouTube videoId="KJJeqr8POnE" className="youtube" />
              </div>
            </div>
            <Link href="/pricing">
              <div className="buildYourQuoteBtn">
                <div style={{ cursor: 'pointer' }}>Get Free Quote</div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndexPage;
