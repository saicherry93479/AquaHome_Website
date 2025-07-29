const PrivacyPolicies = () => {
    return (
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white">
                {/* Header */}
                <div className="py-6 px-4 sm:px-6 border-b">
                    <h1 className="text-3xl font-bold text-gray-900 text-center">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 text-center mt-2">
                        This Privacy Policy explains how Aqua Home collects, uses, stores, and protects your personal information when you sign up for our subscription-based water purifier rental service.
                    </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    <div className="prose max-w-none text-gray-700">
                        {/* Section 1 */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                1. Information We Collect
                            </h2>
                            <p>Personal Information You Provide:</p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Name</li>
                                <li>Mobile number</li>
                                <li>Email address</li>
                                <li>Postal and delivery address</li>
                                <li>AutoPay authorization for monthly rental payments</li>
                            </ul>
                            <p className="mt-2">
                                We collect this information when you subscribe, manage your account, or contact us for support.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                2. How We Use Your Information
                            </h2>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Manage your subscription and billing</li>
                                <li>Deliver and service the water purifier</li>
                                <li>Process payments via AutoPay</li>
                                <li>Provide customer support</li>
                            </ul>
                            <p className="mt-3">
                                We <strong>do not</strong> use cookies or tracking technologies, and we <strong>do not</strong> sell or share your personal information with any third parties.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                3. Data Storage and Security
                            </h2>
                            <p>
                                All personal data is stored securely in our internal database. We follow commercially reasonable data protection measures to safeguard your information against unauthorized access or disclosure.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                4. Data Retention
                            </h2>
                            <p>
                                We retain your data for the period necessary to provide services and comply with applicable legal obligations. Once your account is terminated and no further obligations remain, your personal information will be deleted from our active systems.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                5. Your Rights
                            </h2>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Request access to the personal information we hold about you</li>
                                <li>Request corrections or updates to your data</li>
                                <li>Request deletion of your data, subject to legitimate business or legal requirements</li>
                            </ul>
                            <p className="mt-3">
                                To exercise these rights, please contact us at the email address below. We will respond within a reasonable timeframe.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                6. Updates to This Policy
                            </h2>
                            <p>
                                We may update our Privacy Policy from time to time. Any changes will be posted here with an updated effective date. Your continued use of our services after changes constitute your acceptance of the revised policy.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                Contact Information
                            </h2>
                            <p>
                                If you have any questions regarding this Privacy Policy or wish to make requests regarding your personal data, please contact us at:
                            </p>
                            <div className="ml-4 mt-2">
                                <p className="font-medium">Aqua Home Support</p>
                                <p>Email: <span className="text-blue-600 font-semibold">aquahomepurifiers@gmail.com</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t mt-8">
                    <p className="text-sm text-gray-500 text-center">
                        Last updated: July 2025 | Aqua Home Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicies;
