import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import Loader from '../loader';
function IndexPage({}) {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(' http://43.205.94.230/api/freevocal');

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

  console.log('Api', apiData[0]?.django_python_and_flask_experts);

  return (
    <div>
      <div className="homeMainContainer">
        {apiData == '' ? (
          <Loader />
        ) : (
          <div className="homeContainer">
            <div className="mobileContainer">
              <div className="vocalImg">
                <YouTube videoId="_OaOBettt_8" className="youtube2" />
              </div>
              <div className="VocalTexBox">
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.freevocal_media_app)[0]
                      .value,
                  }}
                />
              </div>
            </div>

            <Link href="/contactUs">
              <div className="buildYourQuoteBtn">
                <div style={{ cursor: 'pointer' }}>Get Free Quote</div>
              </div>
            </Link>

            <div className="OverviewGoals">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.your_branded_ios_aand_android_app
                    )[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.secure_protection_for_your_media_files
                    )[0].value,
                  }}
                />
              </div>
            </div>

            <div className="OverviewGoals">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.inbuild_user_management)[0]
                      .value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.in_app_purchases_management
                    )[0].value,
                  }}
                />
              </div>
            </div>

            <div className="OverviewGoals">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.subscription_management)[0]
                      .value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.freevocal_console)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="OverviewGoals">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.data_insights)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.extensions)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '30px 0px' }}>
              <div className="mobileTexBox">
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.freevocal_extensions)[0]
                      .value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.freevocal_site_image}></img>
              </div>
            </div>

            <div className="OverviewGoals">
              <div>
                <h1 className="leaderHeaderText">Audio / Podcasts / Music</h1>
                <p className="leaderParaText">
                  Self publish your music, audiobooks, podcasts & other audio
                  files through this extension on freevocal.
                </p>
              </div>
              <div>
                <h1 className="leaderHeaderText">Videos</h1>
                <p className="leaderParaText">
                  Self publish your videos, tutorials & other video files
                  through this extension on freevocal.{' '}
                </p>
              </div>
            </div>
            <div className="OverviewGoals">
              <div>
                <h1 className="leaderHeaderText">Video courses</h1>
                <p className="leaderParaText">
                  Self publish your learning content in the form of video
                  tutorials & configure drip content to your users through this
                  extension on freevocal.{' '}
                </p>
              </div>
              <div>
                <h1 className="leaderHeaderText">Gallery</h1>
                <p className="leaderParaText">
                  Self publish your images & PDF files through this extension on
                  freevocal.
                </p>
              </div>
            </div>
            <div className="OverviewGoals">
              <div>
                <h1 className="leaderHeaderText">Live Video</h1>
                <p className="leaderParaText">
                  Broadcast your live audio - video stream to all your users.
                </p>
              </div>
              <div>
                <h1 className="leaderHeaderText">eBooks</h1>
                <p className="leaderParaText">
                  Self publish your EPUB ebooks securely through this extension.
                </p>
              </div>
            </div>
            <div className="OverviewGoals">
              <div>
                <h1 className="leaderHeaderText">In app purchases</h1>
                <p className="leaderParaText">
                  Allow your users to purchase content directly from within your
                  freevocalapp with our in app purchase extension. Transaction &
                  payment gateway charges are applicable as per the selected
                  plan.
                </p>
              </div>
              <div>
                <h1 className="leaderHeaderText">Microsite</h1>
                <p className="leaderParaText">
                  Allow your users to purchase Audio & Video content from your
                  personalised micro website. All content purchased by users on
                  the micro website will be available on your users freevocal
                  apps. Transaction & payment gateway charges are applicable as
                  per the selected plan.
                </p>
              </div>
            </div>
            <div className="OverviewGoals">
              <div>
                <h1 className="leaderHeaderText">Subscriptions</h1>
                <p className="leaderParaText">
                  Allow your users to purchase Audio & Video content from your
                  personalised micro website. All content purchased by users on
                  the micro website will be available on your users freevocal
                  apps. This content can be sold via annual subscription.
                  Transaction & payment gateway charges are applicable as per
                  the selected plan.{' '}
                </p>
              </div>
              <div>
                <h1 className="leaderHeaderText">Quizzes</h1>
                <p className="leaderParaText">
                  Setup quizzes for your freevocal app users from the console.
                  Users will be able to appear for the quiz on their mobile
                  devices itself. Quiz results will be shown in the console.{' '}
                </p>
              </div>
            </div>
            <div className="OverviewGoals">
              <div>
                <h1 className="leaderHeaderText">eCommerce</h1>
                <p className="leaderParaText">
                  Selling exclusive merchandise? Easily setup a mobile ready
                  ecommerce storefront within your freevocal app. Users can buy
                  & pay for your exclusive goodies from the app itself.{' '}
                </p>
              </div>
              <div>
                <h1 className="leaderHeaderText">Tickets</h1>
                <p className="leaderParaText">
                  Selling exclusive tickets to your concerts? Easily setup a
                  mobile ready ticketing storefront within your freevocal app.
                  Users can buy & pay for your exclusive tickets from the app
                  itself.{' '}
                </p>
              </div>
            </div>
            <div className="OverviewGoals">
              <div>
                <h1 className="leaderHeaderText">Polls</h1>
                <p className="leaderParaText">
                  Selling exclusive merchandise? Easily setup a mobile ready
                  ecommerce storefront within your freevocal app. Users can buy
                  & pay for your exclusive goodies from the app itself.{' '}
                </p>
              </div>
              <div>
                <h1 className="leaderHeaderText">Google Drive</h1>
                <p className="leaderParaText">
                  Share files on Google Drive & have all your users access them
                  through their freevocalconsole.{' '}
                </p>
              </div>
            </div>
            <div className="OverviewGoals">
              <div>
                <h1 className="leaderHeaderText">Shared Calendar</h1>
                <p className="leaderParaText">
                  Share your event calendar on Google Calendar & have all your
                  users access them through their freevocal console.{' '}
                </p>
              </div>
              <div>
                <h1 className="leaderHeaderText">Group Chat</h1>
                <p className="leaderParaText">
                  Enterprise chat to allow your freevocalconsole users to
                  communicate with each other.{' '}
                </p>
              </div>
            </div>
            <div className="OverviewGoals">
              <div>
                <h1 className="leaderHeaderText">Facebook</h1>
                <p className="leaderParaText">
                  Embed your Facebook page stream directly inside your freevocal
                  app & keep your app users informed with your latest posts.{' '}
                </p>
              </div>
              <div>
                <h1 className="leaderHeaderText">Twitter</h1>
                <p className="leaderParaText">
                  Embed your Twitter feed directly inside your freevocal app &
                  keep your app users informed with your latest posts.
                </p>
              </div>
            </div>

            <div className="mobileContainer" style={{ marginTop: '100px' }}>
              <div className="mobileImg">
                <YouTube videoId="KJJeqr8POnE" className="youtube" />
              </div>
              <div
                className="mobileTexBox"
                style={{ marginLeft: '0px', marginLeft: '20px' }}
              >
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.customixation_pricing_and_exceptional_support
                    )[0].value,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndexPage;
