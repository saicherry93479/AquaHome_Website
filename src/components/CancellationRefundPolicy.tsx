const CancellationRefundPolicy = () => {
    return (
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white">
                {/* Header */}
                <div className="py-6 px-4 sm:px-6 border-b">
                    <h1 className="text-3xl font-bold text-gray-900 text-center">
                        Cancellation & Refund Policy
                    </h1>
                    <p className="text-gray-600 text-center mt-2">
                        This policy outlines your rights and obligations when cancelling your Aqua Home subscription and any refund eligibility.
                    </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    <div className="prose max-w-none text-gray-700">
                        {/* Section 1 */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                1. Cancellation Process
                            </h2>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>You may <strong>cancel your subscription at any time</strong>—no minimum period.</li>
                                <li>Cancellations can be requested via <strong>phone call</strong> or any preferred method of communication.</li>
                                <li>
                                    Once cancelled, your service <strong>remains active until the next billing date</strong>,
                                    typically within <strong>30 days</strong> of cancellation.
                                </li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                2. Refund Terms
                            </h2>
                            <ul className="list-disc ml-6 space-y-2">
                                <li><strong>No refunds</strong> will be issued for early termination of the subscription.</li>
                                <li>
                                    The <strong>caution deposit</strong> is fully refundable only if:
                                    <ul className="list-disc ml-6 space-y-1 mt-2">
                                        <li>Cancellation occurs <strong>within the first 12 months</strong></li>
                                        <li>The purifier is returned in <strong>good, undamaged, working condition</strong></li>
                                    </ul>
                                </li>
                                <li>
                                    If the subscription continues beyond 12 months, the deposit becomes <strong>non-refundable</strong>, regardless of device return.
                                </li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                3. Device Return Requirements
                            </h2>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>The water purifier must be returned following cancellation.</li>
                                <li>Returned devices must be free of damage and in proper working order.</li>
                                <li>Failure to meet these conditions may result in partial or no refund of the deposit.</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                4. Refund Processing
                            </h2>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Refunds are processed based on your <strong>original payment method</strong> or another method you prefer.</li>
                                <li>The processing time may vary depending on banking/payment procedures.</li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                5. No Free Trials
                            </h2>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>We do not offer free trials for our subscription service.</li>
                                <li>Once you subscribe, billing begins immediately according to your selected plan.</li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                📌 Recovery & Support Center
                            </h2>
                            <p>
                                If you need assistance with cancellation, returning the purifier, or your refund status, please contact our customer care:
                            </p>
                            <div className="ml-4 mt-2">
                                <p className="font-medium">Aqua Home Support</p>
                                <p>Email: <span className="text-blue-600 font-semibold">aquahomepurifiers@gmail.com</span></p>
                                <p>Phone: <span className="text-blue-600 font-semibold">9494739090</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t mt-8">
                    <p className="text-sm text-gray-500 text-center">
                        Last updated: July 2025 | Aqua Home Cancellation & Refund Policy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CancellationRefundPolicy;
