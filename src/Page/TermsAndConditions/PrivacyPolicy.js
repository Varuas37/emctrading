import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PrivacyPolicy(props) {
	const [revealEmail, setRevealEmail] = useState(false);
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="w-4/5 ">
				<h1 className="text-2xl font-bold mt-5">Privacy Policy </h1>

				<p>
					Protecting your private information is our priority. This Statement of Privacy applies to
					stoffcapital.com, stoff.capital or Stoff Capital which governs data collection and usage. For the
					purposes of this Privacy Policy, unless otherwise noted, all references to Stoff Capital include
					stoffcapital.com. The Stoff Capital website is a financial education site. By using the Stoff
					Capital website, you consent to the data practices described in this statement.{' '}
				</p>

				<h1 className="text-2xl font-bold mt-5">Collection of your Personal Information </h1>
				<p>
					We do not collect any personal information about you unless you voluntarily provide it to us.
					However, you may be required to provide certain personal information to us when you elect to use
					certain products or services available on the Site. These may include: (a) registering for an
					account on our Site; (b) entering a sweepstakes or contest sponsored by us or one of our partners;
					(c) signing up for special offers from selected third parties; (d) sending us an email message; (e)
					submitting your credit card or other payment information when ordering and purchasing products and
					services on our Site. To wit, we will use your information for, but not limited to, communicating
					with you in relation to services and/or products you have requested from us. We also may gather
					additional personal or non-personal information in the future.{' '}
				</p>

				<h1 className="text-2xl font-bold mt-5">Sharing Information with Third Parties </h1>

				<p>Stoff Capital does not sell, rent or lease its customer lists to third parties. </p>

				<p>
					Stoff Capital may share data with trusted partners to help perform statistical analysis, send you
					email or postal mail, provide customer support, or arrange for deliveries. All such third parties
					are prohibited from using your personal information except to provide these services to Stoff
					Capital, and they are required to maintain the confidentiality of your information.{' '}
				</p>

				<p>
					Stoff Capital may disclose your personal information, without notice, if required to do so by law or
					in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or
					comply with legal process served on Stoff Capital or the site; (b) protect and defend the rights or
					property of Stoff Capital; and/or (c) act under exigent circumstances to protect the personal safety
					of users of Stoff Capital, or the public.{' '}
				</p>

				<h1 className="text-2xl font-bold mt-5">Tracking User Behavior </h1>
				<p>
					Stoff Capital may keep track of the websites and pages our users visit within Stoff Capital, in
					order to determine what Stoff Capital services are the most popular. This data is used to deliver
					customized content and advertising within Stoff Capital to customers whose behavior indicates that
					they are interested in a particular subject area.{' '}
				</p>

				<p>Automatically Collected Information </p>
				<p>
					Information about your computer hardware and software may be automatically collected by Stoff
					Capital. This information can include: your IP address, browser type, domain names, access times and
					referring website addresses. This information is used for the operation of the service, to maintain
					quality of the service, and to provide general statistics regarding use of the Stoff Capital
					website.{' '}
				</p>

				<h1 className="text-2xl font-bold mt-5">Use of Cookies </h1>
				<p>
					The Stoff Capital website may use "cookies" to help you personalize your online experience. A cookie
					is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run
					programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be
					read by a web server in the domain that issued the cookie to you.{' '}
				</p>

				<p>
					One of the primary purposes of cookies is to provide a convenience feature to save you time. The
					purpose of a cookie is to tell the Web server that you have returned to a specific page. For
					example, if you personalize Stoff Capital pages, or register with Stoff Capital site or services, a
					cookie helps Stoff Capital to recall your specific information on subsequent visits. This simplifies
					the process of recording your personal information, such as billing addresses, shipping addresses,
					and so on. When you return to the same Stoff Capital website, the information you previously
					provided can be retrieved, so you can easily use the Stoff Capital features that you customized.{' '}
				</p>

				<p>
					You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies,
					but you can usually modify your browser setting to decline cookies if you prefer. If you choose to
					decline cookies, you may not be able to fully experience the interactive features of the Stoff
					Capital services or websites you visit.{' '}
				</p>

				<h1 className="text-2xl font-bold mt-5">Links </h1>
				<p>
					This website contains links to other sites. Please be aware that we are not responsible for the
					content or privacy practices of such other sites. We encourage our users to be aware when they leave
					our site and to read the privacy statements of any other site that collects personally identifiable
					information.{' '}
				</p>

				<h1 className="text-2xl font-bold mt-5">Security of your Personal Information </h1>
				<p>
					Stoff Capital secures your personal information from unauthorized access, use, or disclosure. Stoff
					Capital uses the following methods for this purpose:{' '}
				</p>

				<h1 className="text-2xl font-bold mt-5"> - SSL Protocol </h1>

				<p>
					{' '}
					When personal information (such as a credit card number) is transmitted to other websites, it is
					protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.{' '}
				</p>

				<p>
					{' '}
					We strive to take appropriate security measures to protect against unauthorized access to or
					alteration of your personal information. Unfortunately, no data transmission over the Internet or
					any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect
					your personal information, you acknowledge that: (a) there are security and privacy limitations
					inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of
					any and all information and data exchanged between you and us through this Site cannot be
					guaranteed.{' '}
				</p>

				<h1 className="text-2xl font-bold mt-5"> Right to Deletion </h1>
				<p>
					Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:{' '}
				</p>
				<ul>
					<li>• Delete your personal information from our records; and</li>
					<li>• Direct any service providers to delete your personal information from their records.</li>
				</ul>

				<p>
					Please note that we may not be able to comply with requests to delete your personal information if
					it is necessary to:{' '}
				</p>
				<ul>
					<li>
						• Complete the transaction for which the personal information was collected, fulfill the terms
						of a written warranty or product recall conducted in accordance with federal law, provide a good
						or service requested by you, or reasonably anticipated within the context of our ongoing
						business relationship with you, or otherwise perform a contract between you and us;{' '}
					</li>
					<li>
						• Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal
						activity; or prosecute those responsible for that activity;{' '}
					</li>
					<li>• Debug to identify and repair errors that impair existing intended functionality; </li>
					<li>
						• Exercise free speech, ensure the right of another consumer to exercise his or her right of
						free speech, or exercise another right provided for by law;{' '}
					</li>
					<li>• Comply with the California Electronic Communications Privacy Act; </li>
					<li>
						• Engage in public or peer-reviewed scientific, historical, or statistical research in the
						public interest that adheres to all other applicable ethics and privacy laws, when our deletion
						of the information is likely to render impossible or seriously impair the achievement of such
						research, provided we have obtained your informed consent;{' '}
					</li>
					<li>
						• Enable solely internal uses that are reasonably aligned with your expectations based on your
						relationship with us;{' '}
					</li>
					<li>• Comply with an existing legal obligation; or </li>
					<li>
						• Otherwise use your personal information, internally, in a lawful manner that is compatible
						with the context in which you provided the information.{' '}
					</li>
				</ul>
				<h1 className="text-2xl font-bold mt-5">Children Under Thirteen </h1>
				<p>
					Stoff Capital does not knowingly collect personally identifiable information from children under the
					age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for
					permission to use this website.{' '}
				</p>

				<h1 className="text-2xl font-bold mt-5">External Data Storage Sites </h1>
				<p>
					We may store your data on servers provided by third party hosting vendors with whom we have
					contracted.{' '}
				</p>

				<h1 className="text-2xl font-bold mt-5"> Changes to this Statement </h1>
				<p>
					Stoff Capital reserves the right to change this Privacy Policy from time to time. We will notify you
					about significant changes in the way we treat personal information by sending a notice to the
					primary email address specified in your account, by placing a prominent notice on our site, and/or
					by updating any privacy information on this page. Your continued use of the Site and/or Services
					available through this Site after such modifications will constitute your: (a) acknowledgment of the
					modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.{' '}
				</p>

				<h1 className="text-2xl font-bold mt-5">Contact Information </h1>
				<p>
					Stoff Capital welcomes your questions or comments regarding this Statement of Privacy. If you
					believe that Stoff Capital has not adhered to this Statement, please contact Stoff Capital at:{' '}
				</p>

				<p>
					Email Address:{' '}
					{revealEmail ? (
                        <>
						<a href="mailto: ethan@stoffcapital.com">
							ethan@stoffcapital.com
						</a>
                        <p className="cursor-pointer" onClick={() => setRevealEmail(false)}> Hide</p>
                        </>
					) : (
						<button className="bg-primarybg rounded-lg p-2 text-white" onClick={() => setRevealEmail(true)}>
							Reveal
						</button>
					)}
				</p>

				<h1 className="text-xl font-bold mt-5 mb-20"> Effective as of January 29, 2021 </h1>
			</div>
		</div>
	);
}

PrivacyPolicy.propTypes = {};

export default PrivacyPolicy;
