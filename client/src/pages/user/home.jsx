import React, { useState, useEffect } from "react";
import {
  Layout,
  Button,
  Form,
  Input,
  Radio,
  Col,
  DatePicker,
  Select,
  Space,
  notification,
  Row,
  Modal,
} from "antd";
import "../../css/home.css";
import Navbar from "../../components/navbar/MainNavbar";
import WRisk from "../../assets/whatisrisk.png";
import WhRisk from "../../assets/riskassesment.png";
import EasySolution from "../../assets/Aneasysolution.png";
import Money from "../../assets/money.png";
import Workplace from "../../assets/Workplace-hazards.png";
import Logo from "../../assets/tripgeni_logo.svg";

function home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="home-content">
        <div className="section1">
          <div className="sc1-1">
            <h3>What is a Risk</h3>
            <p>
              <b className="bold-large">R</b>isk is an inherent aspect of every
              decision we make, every action we take. It's the shadow that looms
              over the path to progress, embodying the potential for something
              adverse to occur. A risk represents the uncertain terrain we
              navigate as individuals and organizations, where the outcomes are
              not guaranteed and consequences may not always align with our
              aspirations. In essence, a risk encapsulates the possibility of
              undesirable events unfolding, casting a veil of uncertainty over
              the future. It encompasses the myriad of factors that could
              disrupt our plans, damage our reputation, or impede our
              objectives. Whether it's a technological endeavor, a healthcare
              initiative, a financial venture, or any other undertaking, risks
              lurk in the shadows, waiting to manifest their impact.
              <br />
              <br />
              Understanding risk involves recognizing the complex interplay
              between actions and consequences, between opportunities and
              threats. It's about acknowledging the potential for harm, loss, or
              failure that accompanies any endeavor. Risks come in various
              forms, ranging from strategic and operational risks to compliance
              and financial risks, each demanding careful consideration and
              mitigation strategies.Navigating the landscape of risk requires
              vigilance, foresight, and a systematic approach to risk
              management. It involves identifying, assessing, and prioritizing
              risks, as well as implementing measures to mitigate their impact.
              By embracing a proactive stance towards risk, organizations can
              safeguard their interests, enhance their resilience, and seize
              opportunities for growth amidst uncertainty.
            </p>
            <div className="sc1-1-btn">
              <Button>Learn More</Button>
            </div>
          </div>
          <div className="sc1-2">
            <img src={WRisk} alt="" />
          </div>
        </div>
        <div className="section2">
          <div className="sc2">
            <div className="sc2-img">
              <img src={WhRisk} alt="" />
            </div>
            <div className="sc2-content">
              <h3>Why Risk Assessments?</h3>
              <p>
                Risk assessments are a cornerstone of ensuring workplace health
                and safety, playing a vital role in safeguarding both employees
                and the organization as a whole. By systematically identifying
                potential hazards and evaluating associated risks, risk
                assessments empower businesses to proactively address and
                mitigate workplace dangers. Through a structured risk assessment
                process, hazards specific to the workplace environment are
                identified, analyzed, and prioritized for action. <br />
                <br />
                This proactive approach enables organizations to minimize the
                likelihood of accidents, injuries, and occupational illnesses,
                thereby fostering a safer and healthier work environment for
                all. By documenting the findings of risk assessments,
                organizations not only fulfill legal obligations but also
                demonstrate a commitment to ensuring the well-being of their
                workforce. Clear communication of health and safety information
                derived from risk assessments empowers employees to understand
                potential risks in their work environment and take necessary
                precautions to mitigate them.
              </p>
              <div className="sc1-1-btn">
                <Button>Learn More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="section3">
          <h2>Why Risk Assessments?</h2>
          <div className="section3-content">
            <div className="sc3-1">
              <div className="sc3-1-content">
                <img className="sc3-img" src={Workplace} alt="" />
                <h4>Identification of Potential Hazards</h4>
                <p>
                  In the realm of risk assessment, the identification of
                  potential hazards stands as a critical first step towards
                  ensuring workplace safety and operational integrity. Through
                  meticulous examination and analysis, risk assessment
                  methodologies uncover a spectrum of potential threats that
                  have the capacity to impact projects, processes, or systems
                  adversely. By pinpointing these hazards early on,
                  organizations can preemptively implement measures to mitigate
                  risks, thereby safeguarding against potential disruptions and
                  fortifying the resilience of their operations.
                </p>
              </div>
              <div class="vl"></div>
            </div>
            <div className="sc3-1">
              <div className="sc3-1-content">
                <h4>Cost Savings</h4>
                <p>
                  By identifying risks before they occur, organizations can take
                  proactive measures to prevent incidents or reduce their
                  impact. This proactive approach not only minimizes potential
                  damages to property, equipment, and assets but also mitigates
                  the financial burden associated with workplace accidents,
                  injuries, and legal liabilities. By investing in risk
                  assessments and implementing appropriate control measures,
                  organizations can ultimately save costs in the long run while
                  fostering a safer and more productive work environment.
                </p>
                <br />
                <br />
                <img className="sc3-img" src={Money} alt="" />
              </div>
              <div class="vl"></div>
            </div>
            <div className="sc3-1">
              <div className="sc3-1-content">
                <img className="sc3-img" src={EasySolution} alt="" />
                <h4>Compliance with Regulations</h4>
                <p>
                  Performing these assessments ensures organizations adhere to
                  pertinent laws and standards, mitigating the risk of fines,
                  penalties, and legal entanglements. Compliance with
                  regulations not only safeguards the organization's reputation
                  but also fosters trust among stakeholders. By proactively
                  addressing compliance requirements through thorough
                  assessments, businesses demonstrate their commitment to
                  ethical practices and legal responsibilities, bolstering their
                  standing in the industry and safeguarding against potential
                  liabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section4">
          <h3>Want to improve your knowledge?</h3>
          <p>
            Enhance your risk management skills with our comprehensive training
            session designed for individuals eager to identify, mitigate, and
            avoid risks effectively. Dive into the intricacies of risk
            assessment and learn valuable strategies for minimizing workplace
            hazards. Click the Quiz button to embark on an enlightening
            awareness session that will equip you with the tools and insights
            necessary to navigate potential risks with confidence and expertise.
            Don't miss this opportunity to bolster your understanding and
            strengthen your risk management capabilities.
          </p>
          <div className="sc1-1-btn">
            <Button>Take the Quiz</Button>
          </div>
        </div>
      </div>
      <div className="footer">
        <span className="footer-h1">
          Let’s Spread the Awareness <br />
          and Mitigate the Risks around us
        </span>
        <div className="footer-content">
          <br />
          <hr />
          <img className="sc3-img" src={Logo} alt="" />
          <p className="footer-text">
            Copyright © 2024 - 2025 GRC INSIGHT®. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default home;
