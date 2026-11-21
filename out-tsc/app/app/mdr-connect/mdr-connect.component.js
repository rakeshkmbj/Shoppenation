import { __awaiter } from "tslib";
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "src/app/services/api.service";
import * as i3 from "../services/getname";
import * as i4 from "ngx-toastr";
import * as i5 from "@angular/forms";
import * as i6 from "../razorpay.service";
import * as i7 from "../services/payment-status.service";
import * as i8 from "@angular/common";
import * as i9 from "ngx-bootstrap/tabs";
function MdrConnectComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1, "Manufacturer/Producer");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 62);
    i0.ɵɵtext(1, "Distributor/CNF");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 63);
    i0.ɵɵtext(1, "Retailer/Wholeseller");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 64);
    i0.ɵɵtext(1, "Pharma & Medicos");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 65);
    i0.ɵɵtext(1, "HoReCa (Hotel /Restaurant/Caterer)");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 67);
    i0.ɵɵtext(1, "Exporter/Importer");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 68);
    i0.ɵɵtext(1, "School/University");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1, "Doctors/Clinics/Hospitals/Labs");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 70);
    i0.ɵɵtext(1, "Fitness & Health Organization");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 71);
    i0.ɵɵtext(1, "Dropship Intermediatory");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 72);
    i0.ɵɵtext(1, "Productivity Tool provider");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 73);
    i0.ɵɵtext(1, "Contact Centres");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 74);
    i0.ɵɵtext(1, "Logistic & 3PL Providers");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 75);
    i0.ɵɵtext(1, "HoReCa (Hotel /Restaurant/Caterer)");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 76);
    i0.ɵɵtext(1, "Automobile Service Provider Org");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 77);
    i0.ɵɵtext(1, "Recruitment And Skill Development Org");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 78);
    i0.ɵɵtext(1, "Travel & Tour Operators");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 79);
    i0.ɵɵtext(1, "Facility Management Service Provider");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 80);
    i0.ɵɵtext(1, "Real Estate Developers and Services Org ");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 81);
    i0.ɵɵtext(1, "Lisoning Organization");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 82);
    i0.ɵɵtext(1, "Business Consulting Organization");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 83);
    i0.ɵɵtext(1, "CA & Auditing Organization");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 84);
    i0.ɵɵtext(1, "Advertisement & Medi Firm");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 85);
    i0.ɵɵtext(1, "Hardware Seller and Maintenance Organization ");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 86);
    i0.ɵɵtext(1, "Softwae Development and Maintenece Organization");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 87);
    i0.ɵɵtext(1, "Office Furniture and Infrastructure Organization");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 88);
    i0.ɵɵtext(1, "Event Management Organization");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 89);
    i0.ɵɵtext(1, "Banking And Financial Organization");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 141);
    i0.ɵɵtext(1, "Other Corporate Service Organization");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 142);
    i0.ɵɵtext(1, "PSU/Govt. Organization");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 143);
    i0.ɵɵtext(1, "NGO/Trust");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 144);
    i0.ɵɵtext(1, "Spiritual & Mental wellness Organizations ");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 145);
    i0.ɵɵtext(1, "Investment Organizations");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_186_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 146);
    i0.ɵɵtext(1, "Premium ");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_187_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 147);
    i0.ɵɵtext(1, "Classic ");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_188_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 148);
    i0.ɵɵtext(1, "Standard ");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_div_215_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "label");
    i0.ɵɵtext(2, "Member Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 149);
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_div_216_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "label");
    i0.ɵɵtext(2, "Franchisee Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 150);
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_option_233_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 151);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r48 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r48.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", country_r48.CNTRY_NM, " ");
} }
function MdrConnectComponent_option_240_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 151);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r49 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r49.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r49.STATE_NM);
} }
function MdrConnectComponent_option_247_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 151);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r50 = ctx.$implicit;
    i0.ɵɵproperty("value", city_r50.CITY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(city_r50.CITY_NM);
} }
function MdrConnectComponent_option_254_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 151);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const zip_r51 = ctx.$implicit;
    i0.ɵɵproperty("value", zip_r51.Id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(zip_r51.Value);
} }
function MdrConnectComponent_div_281_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 152)(1, "p", 153);
    i0.ɵɵtext(2, "Register your organization Directly and once you get an officai intimation of your membership with your membership id than you can pay annaul fee & other pending payments if any at the Payments section");
    i0.ɵɵelementEnd()();
} }
function MdrConnectComponent_div_290_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "p", 123);
    i0.ɵɵtext(2, " Services ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 123);
    i0.ɵɵtext(4, " This Contract applies to All-Day MDR-Connect, and other MDR-Connect related apps for using our Shoppenation partner Solution or AD-Connect Solution and other services that state that they are offered under this Contract (\u201CServices\u201D), including the offsite collection of data for those Services, such as via our ads or any of our services plugins. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 122);
    i0.ɵɵtext(6, "MDR-Connect");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 123);
    i0.ɵɵtext(8, " You are entering into this Contract with MDR-Connect (also referred to as \u201Cwe\u201D and \u201Cus\u201D). ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 123);
    i0.ɵɵtext(10, " As a Member of our Services, the collection, use, and sharing of your personal & business data is subject to our ");
    i0.ɵɵelementStart(11, "span", 154);
    i0.ɵɵtext(12, "Data Protection and Privacy Policy");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, ". You acknowledge and have read our ");
    i0.ɵɵelementStart(14, "span", 154);
    i0.ɵɵtext(15, "Data Protection and Privacy Policy");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16, ". ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "ul", 155)(18, "li")(19, "strong", 156);
    i0.ɵɵtext(20, "Platform Membership");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "p", 157);
    i0.ɵɵtext(22, "This Contract applies to Members of the platform with unique Membership identity .");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p", 157);
    i0.ɵɵtext(24, "When you register and join the MDR-Connect and on approval by our back office, you become a \u201CMember\u201D. You will have an obligation to pay your annual membership fee as per your selected plan within 10 (Ten) days after getting an approval from our back office. As a member your membership will be carried forward to avail MDR-Connect Platform Membership year on year with subscription of your annual membership fee. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "p", 157);
    i0.ɵɵtext(26, "You can be a seller, buyer or seller or Buyer both in our platform for availing an e-commerce store-based services at our MDR-Connect Home store or at our member stores available at MDR-connect Marketplace. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "p", 157)(28, "strong");
    i0.ɵɵtext(29, "As a Seller:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30, " You will have an obligation to buy minimum one set of 5 SKUs (Five) Online Shelf space. You have an option to keep your SKUs on a Platform (MDR-Connect) Home Store or you can own your own online store as per your service selection. for certain Verticals (Like Real Estate Property sale listings, Automobiles Vehicles sales listing and Lage Medical Equipment Sales listing) the SKUs of the member organizations will be listed and will be having an online commerce only through MDR-Connect Home Store. As a seller and opted for your own online store you will also be provided an access to MDR-Connect eCommerce functionality module of the platform. The Platform also deduct a transaction fee for seller which are mentioned in our membership plan ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p", 157)(32, "strong");
    i0.ɵɵtext(33, "As a Buyer:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(34, " You will have an obligation to see the credentials of the Sellers SKUs on seller online store in particular about the authenticity /genuineness certifications and supporting information about the warranties and product durability as MDR-Connect takes no responsibility and assumes no liability for any certifications or supporting information and serviceability provided by member online store. As a buyer if you wish to use the Escrow account settlement provided by the platform than you can initiate a process to submit your contract signed with the buyer and on buyer-seller agreement and their contract you can avail the facility of escrow settlement Process. Please see our ");
    i0.ɵɵelementStart(35, "span", 154);
    i0.ɵɵtext(36, "Escrow Settlement Process");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(37, " for more detail. You have an obligation to pay a platform convenience fee as per your membership plan on the transaction which will be added over and above the store sale invoice. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "p", 157)(39, "strong");
    i0.ɵɵtext(40, "Seller & Buyer both:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(41, " You can be seller and Buyer both and can avail the membership benefits on sellers and buyers\u2019 transactional fees along with keeping your SKU\u2019s on MDR-Connect Store or on your Individual Store ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "li")(43, "strong", 158);
    i0.ɵɵtext(44, "Changes in Contract");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "p", 157);
    i0.ɵɵtext(46, " We may make changes to this Contract. We may modify this Contract, from time to time. If required by applicable law or we make material changes to this Contract, we will provide you notice through our Services, or by other means, to provide you the opportunity to review the changes before they become effective. We agree that changes cannot be retroactive. If you object to any of these changes, you may choose to withdraw your membership and close an account. Your continued use of our Services after we publish or send a notice about our changes to these terms means that you are consenting to the updated terms as of their effective date. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "li")(48, "strong", 159);
    i0.ɵɵtext(49, "Platform Membership fees & Services based Payments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "ul", 160)(51, "li");
    i0.ɵɵtext(52, "You\u2019ll honor your payment obligations and you are okay with us storing your payment information. You understand that there may be fees and taxes that are added to our prices.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "li");
    i0.ɵɵtext(54, "Refunds are subject to our policy, and we may modify our prices prospectively.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "li");
    i0.ɵɵtext(56, "If you are registering to our membership and other opted services, you agree to pay us the applicable fees and taxes as per your membership type subscribed and services based on fees and on approval of your membership you agree to the below mentioned ");
    i0.ɵɵelementStart(57, "span", 154);
    i0.ɵɵtext(58, "Members & Your Obligations");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(59, " mentioned below. Failure to pay membership and services fees will result in the termination of your membership. Also, you agree that. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "li");
    i0.ɵɵtext(61, "Your purchase may be subject to Special foreign land fees or differences in prices based on location/Geography (e.g., exchange rates and geography market multiplier factor). ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "li");
    i0.ɵɵtext(63, "We may store and continue billing your Preferred payment method (e.g., credit card /UPI or debit Card), even after it has expired, to avoid interruptions in your paid Services and to use it to pay for other Services you may buy. You may update or change your payment method.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "li");
    i0.ɵɵtext(65, "We may modify our Annual Membership fee or any of our service prices effective prospectively upon reasonable notice to the extent allowed under the law. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "li");
    i0.ɵɵtext(67, "All of your Membership Subscription are subject to Membership policy. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "li");
    i0.ɵɵtext(69, "We may calculate taxes payable by you based on the billing of the services opted by you from the platform ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "li");
    i0.ɵɵtext(71, "You can get a copy of your Platform invoice through your Shoppenation MDR-Connect account settings under \u201C");
    i0.ɵɵelementStart(72, "span", 154);
    i0.ɵɵtext(73, "Member Account Purchase Management");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(74, "\u201D.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(75, "li")(76, "strong", 156);
    i0.ɵɵtext(77, "Notices & Messages to Members of the Platforms");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "ul", 161)(79, "li", 162);
    i0.ɵɵtext(80, " we will provide notices and messages to you in the following ways: (1) within the Platform or (2) sent to the contact information you provided us (e.g., email, mobile number, physical address). ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "li", 162);
    i0.ɵɵtext(82, "You agree to keep your contact information up to date.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(83, "strong", 158);
    i0.ɵɵtext(84, "You Agree as a Member & Your Obligations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "ul", 161)(86, "strong");
    i0.ɵɵtext(87, "For Membership Eligibility");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(88, "p", 158);
    i0.ɵɵtext(89, "Here are some promises and you agree to following terms and conditions as a member of MDR-Connect ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(90, "ul", 163)(91, "li");
    i0.ɵɵtext(92, "You\u2019re eligible to enter into this Contract and you are at least our \u201CMinimum Age.\u201D");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(93, "li");
    i0.ɵɵtext(94, "The Services are not for use by anyone under the age of 18.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(95, "li");
    i0.ɵɵtext(96, "you will have one Membership account for one business, which must be in your organization name and you must be registered as Promoter or Director or Partner or Sole proprietor or a key management person of an organization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(97, "li");
    i0.ɵɵtext(98, "your organization is not already restricted by MDR-Connect from using the Services. Creating an account with false information is a violation of our terms, including accounts registered on behalf of others or persons under the age of 18.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(99, "li");
    i0.ɵɵtext(100, "You will be doing a commerce activity for your products and services listed on SKUs from platform marketplace only and for keeping your business interest and money secured as per mutual business contracts between member organizations, platform will be providing a transaction on escrow-based settlements ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "li");
    i0.ɵɵtext(102, " This platform is also a community building platform and we believe in our ancient philosophy of: ");
    i0.ɵɵelementStart(103, "ul", 160)(104, "li");
    i0.ɵɵtext(105, "\"");
    i0.ɵɵelementStart(106, "strong");
    i0.ɵɵtext(107, "VasudhaIva Kutumbakam");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(108, "\u201D and wish to have life time connection and business relationships. So, core of our community building is based on Referral based businesses and every member enrolled with us should make a promise to provide referrals and to encourage this referral-based community building. To Promote the same platform takes initiative to provide a discount of 100% Annual Membership Fee /Pro-rata basis discounting in Annual fee with following Annual referrals provided by a member in combination of below parameters to promote businesses of fellow members ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(109, "li")(110, "strong");
    i0.ɵɵtext(111, "Referral to build Business Community Every Member is expected to Provide following in combinations to avail 100% Annual fee exemption");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(112, "ul", 164)(113, "li");
    i0.ɵɵtext(114, "20(Twenty or more) member Inductions Annually to the platform ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(115, "li");
    i0.ɵɵtext(116, "50 (Fifty) Posts of Other stores Sharing to a group of 5 or More Members/Outside Platform community Annually ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(117, "li");
    i0.ɵɵtext(118, "50 (Fifty) Marketplace Stores Sharing to a Group of 5 or More members for promoting member stores for Sales & revenue growth Annually ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(119, "li");
    i0.ɵɵtext(120, "You and Your organization agrees and make promise that you will publish content from Platform posts management for member organizations and are bound by the laws of the land following media display Content restrictions or limitations imposed by the Nations/States/Geographies/locations/Religions/communities based/ Prohibited Contents for Public Interest/ Third Parties Prohibited sectors based Contents or contents which may promote Tabacco/Alcohol /Drugs /Act of terror / Act of Sex and Pornographic material including sex Toys /child abuse & Slavery /Bonded Labour/Non-permissible Health Drinks and Health care Products /Vulgar and abusive languages and Slangs hurting person or group of person /Women & Child abuse and Promoting illegal Products and activities as mentioned by the Laws as illegal products & activities which includes arms and ammunitions and anti-national content and third party copyright contents and images/Logos /Trademarks without permissions . In addition, MDR-Connect in its sole and absolute discretion may elect to not exhibit or present any Content which they may think is not relevant to display publicly on the screens or on sectors-based screens Promotion or other content at any location where the content is determined not to be appropriate or permitted in consultation with location or other Third-Party locations that are set forth ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(121, "li");
    i0.ɵɵtext(122, " Member and Member Organization registered with our Platform agrees that MDR-Connect will not be held responsible and accountable for any legality/compliances of the displayed content and member /his or her organization listed will remain solely responsible for any liability arising from the displayed Content or Advertising, including but not limited to liability arising from any laws relating to obscenity, defamation, trade libel, the right of publicity or likeness, the right of or to privacy, any laws relating to intellectual property, and any laws relating to advertising. If any Advertiser Content or Advertising is rejected by MDR-Connect or a location, we will promptly replace the Member Organization Content. ");
    i0.ɵɵelementStart(123, "ul", 160)(124, "li");
    i0.ɵɵtext(125, "Members organization may offer their own products and services through our Services, and we aren\u2019t responsible for those Members organizations activities and serviceability.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(126, "li");
    i0.ɵɵtext(127, "Others\u2019 Members Content: By using the Platform Services, you may encounter content or other information that might be inaccurate, incomplete, delayed, misleading, illegal, offensive/obscene, or otherwise harmful. You agree that we are not responsible for content or other information made available through or within the Services by others, including Members. While we apply automated tools to review much of the content and other information presented in the Services, we cannot always prevent misuse of our Services, and you agree that we are not responsible for any such misuse. You also acknowledge the risk that others may share inaccurate or misleading information about you or your organization, and that you or your organization may be mistakenly associated with content about others, for example, when we let connections and followers know you or your organization were mentioned in the news. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(128, "li");
    i0.ɵɵtext(129, "We\u2019ll honor the choices you make about who gets to see your content, including how it can be used for referring and sharing to others and for your business promotions.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(130, "li");
    i0.ɵɵtext(131, "You agree and promise to only provide content and other information that you have the right to share and that your MDR-Connect profile will be truthful. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(132, "li");
    i0.ɵɵtext(133, "You agree that any share information/Content on our Services shared by you can be seen, copy, saved, Re-forwaded and processed to be re- used as an information by other members or non-members of MDR-Connect.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(134, "li");
    i0.ɵɵtext(135, "Our Services allow sharing of information (including content) in many ways, such as through your profile, posts, articles, group posts, links to news articles, , messages, and In-person Responses and Messages. Depending on the feature and choices you make, information that you share may be seen by other Members, or others (on or off of the Services). ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(136, "li");
    i0.ɵɵtext(137, "You agree and grant MDR-Connect and our affiliates the following non-exclusive license to the content and other information you provide (e.g., share, post, upload, and/or otherwise submit) to our Services:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(138, "li");
    i0.ɵɵtext(139, "You agree and grant MDR-Connect worldwide, transferable and sub-licensable right to use, copy, modify, distribute, publicly perform and display, host, and process your content and other information you submit on our posts management and communication desk module without any further consent, notice and/or compensation to you or others ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(140, "li");
    i0.ɵɵtext(141, "We will not include your content in advertisements for the products and services of third parties to others without your separate consent (including sponsored content). However, without compensation to you or others, ads may be served near your content and other information, and your platform actions may be visible and included with ads, as noted in the Data Protection and Privacy Policy. If you use a Service feature, we may mention that with your name or photo to promote that feature within our Services, subject to your choice of settings ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(142, "li");
    i0.ɵɵtext(143, "You agree that we will provide notices and messages to you in the following ways: (1) within the Services or (2) sent to the contact information you provided us (e.g., email, mobile number, physical address). You agree to keep your contact information up to date.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(144, "li");
    i0.ɵɵtext(145, "MDR-Connect Service Availability: You agree to the following ");
    i0.ɵɵelementStart(146, "ul", 160)(147, "li");
    i0.ɵɵtext(148, "MDR-Connect may change or limit the availability of some features, or end any Services of the platform.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(149, "li");
    i0.ɵɵtext(150, "We may change, suspend or discontinue any of our Services. We may also limit the availability of features, content and other information so that they are not available to all Members (e.g., by country or by subscription-based access).");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(151, "li");
    i0.ɵɵtext(152, "We don\u2019t promise to store or show (or keep showing) any information (including content) that you\u2019ve shared. MDR-Connect I is not a storage service so we will not be responsible for your content storage. You agree that we have no obligation to store, maintain or provide you a copy of any content or other information that you or others provide, except to the extent required by applicable law and as noted in our Data Protection and Privacy Policy.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(153, "li");
    i0.ɵɵtext(154, "You agrees that MDR-Connect platform does not guarantee you the availability of its platform services 100% of the time or does not guarantee an error free / without malfunctions services or any of the Platform services are prevented, in whole or in part, from performing any required functional obligations or condition hereunder, or from exercising its rights by reason or as a result of any force majeure than MDR-Connect Will be excused from performing such obligations or conditions due to a reason such as acts of God, acts of government, acts of terrorism, strikes, lockouts, or other industrial disturbances, acts of a public enemy, blockades, wars, insurrections or riots, terrorism, epidemics, landslides, fires, storms, floods, explosions, technological failures, breaches, hacks, system vulnerabilities or incompatibilities, or other similar causes beyond the control of such Social , Technological and environmental conditions .");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(155, "li");
    i0.ɵɵtext(156, "You will keep your password for platforms applications a secret ");
    i0.ɵɵelementStart(157, "ul", 160)(158, "li");
    i0.ɵɵtext(159, "You will not share your account with anyone else outside your organization resources and will follow our policies and the law. You will be given a single user access but on request you will be provided a module to generate role based multi-user access. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(160, "li");
    i0.ɵɵtext(161, "Members are account holders. You agree to: (1) protect against wrongful access to your account (e.g., use a strong password and keep it confidential); (2) not share or transfer your account or any part of it (e.g., sell or transfer the personal data of others by transferring your connections); and (3) follow the law, our list of Dos and Don\u2019ts (below), and ");
    i0.ɵɵelementStart(162, "span", 154);
    i0.ɵɵtext(163, "Our Social Community Membership Policy");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(164, " You are responsible for anything that happens through your account unless you close it or report misuse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(165, "li");
    i0.ɵɵtext(166, "As between you and others (including your employers /partners or subsidiaries), your account belongs to you. However, if the Services were made available by becoming members by another party for you to use (e.g., your parent company or your organization Mentor or your non-working Director as your stakeholder or employer), the party having membership registered under his name for such Service has the right to control access to and get reports on your use of such paid Membership Service; and they have the rights to your Account personal and business data of registered organization by virtue of membership of MDR-Connect ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(167, "li");
    i0.ɵɵtext(168, "You are responsible for all activities that occur under your organization's membership Account and any associated user accounts (if and when applicable), regardless of whether the activities are undertaken by you, your employees or a third party (including your contractors or agents). Except to the extent caused by our breach of these Terms, we and our affiliates are not responsible for unauthorized access to your Membership Account or business user accounts (if applicable). You are solely responsible for maintaining the security of your password. You may not disclose your password to any third party (other than third parties authorized by you to use your Membership Account or associated business user accounts, if applicable, in accordance with these Terms) and are solely responsible for any use or action taken under your password. You will contact us immediately if you believe an unauthorized third party may be using your Membership Account or associated Platform user accounts, if applicable, or if your Membership Account or any user account information, if applicable, is lost or stolen.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(169, "li");
    i0.ɵɵtext(170, "You agree that MDR-Connect is a Technology Platform that provides you the tools and services eco-solution to connect and optimize your business processes so that the platform is utilized to expand your markets and businesses with industry partners /peers and service providers. The Platform will support your business expansion and shows a trend of positive increase in revenue and overall growth. In no way MDR-connect claims that after becoming member of the Platform the organization or your business on an immediate basis will show automatically positive results for businesses and revenues. This platform is a Technology & business connection platform and will assist/help you to grow your business network and in process expand your market & distribution reach and revenues. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(171, "li");
    i0.ɵɵtext(172, "You agree that the sellers may provide you access to discounts for SkUs listing on their Individual stores or on MDR-Connect Home store. In these instances, the available price on the SKUs will reflect this discount. You agree not to manually copy or use any data mining, scraping, or similar data gathering and extraction tools with respect to such pricing or discounts.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(173, "li");
    i0.ɵɵtext(174, "MDR-Connect Platform provide you the Zero Balance maintained wallet facility on the platform for members to be used internal to the platform in a closed loop model. The same can be used for internal Purposes to provide direct discounts or payback benefits to the members of the platform through platform transactions. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(175, "li");
    i0.ɵɵtext(176, "You agree that MDR-Connect have the right to limit how you connect and interact on our Services and we reserve the right to limit your use of the Services, including the number of your connections and your ability to contact other Members. MDR-Connect reserves the right to restrict, suspend, or terminate your account if you breach this Contract or the law or are misusing the Services (e.g., violating any of the Dos and Don\u2019ts or used any un-professional and unethical images /Videos or texts which violates any of the above-mentioned terms and conditions agreed by you)");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(177, "li")(178, "strong", 159);
    i0.ɵɵtext(179, "MDR-Connect Marketplace");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(180, "ul", 165)(181, "li");
    i0.ɵɵtext(182, "These terms and conditions govern your access to and use of a set of features, services, and functionality on the Business-to-Business marketplace section of MDR-Connect Marketplace for registered Members pf the platform to Sell and Buy products for business purposes (\"MDR-Connect Marketplace \"). ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(183, "li");
    i0.ɵɵtext(184, "These Terms constitute an agreement between Member & All-Day MDR-Connect that the products and services sold on MDR-Connect Marketplace is purely a business transaction between the members organizations and MDR-Connect is not responsible for ay defects /Service Response / Delivery Commitments or quality and genuine/originality of the products or services sold by a member organization. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(185, "li");
    i0.ɵɵtext(186, "Returns. Refund /Delivery commitment of the Transactions is the responsibility of the seller organization unless or until the store digital transaction on Ecommerce Payment Transaction state that the responsibility of Return / Refund and Delivery lies with MDR-Connect. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(187, "li")(188, "strong", 159);
    i0.ɵɵtext(189, "No Warranty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(190, "p", 159)(191, "strong");
    i0.ɵɵtext(192, "All-Day MDR-Connect and its Affiliates");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(193, "ul", 165)(194, "li");
    i0.ɵɵtext(195, "MAKE NO REPRESENTATION OR WARRANTY ABOUT THE SERVICES, INCLUDING ANY REPRESENTATION THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, AND PROVIDE THE SERVICES (INCLUDING CONTENT / INFORMATION AND MARKETPLACE STORES) ON AN \u201CAS IS\u201D AND \u201CAS AVAILABLE\u201D BASIS. TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(196, "li");
    i0.ɵɵtext(197, "DISCLAIM ANY IMPLIED OR STATUTORY WARRANTY, INCLUDING ANY IMPLIED WARRANTY OF TITLE, ACCURACY OF DATA, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(198, "li")(199, "strong", 159);
    i0.ɵɵtext(200, "Limitation of Liability");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(201, "p", 159);
    i0.ɵɵtext(202, "UNDER NO CIRCUMSTANCES WILL ");
    i0.ɵɵelementStart(203, "strong");
    i0.ɵɵtext(204, "All-Day MDR-Connect");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(205, " BE LIABLE FOR ANY CONSEQUENTIAL, INCIDENTAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO ANY LOST PROFITS THAT RESULT FROM YOUR CONTENT & INFORMATION DISPLAYED OR SELLING / PURCHASE OF ANY PRODUCTS ON ");
    i0.ɵɵelementStart(206, "strong");
    i0.ɵɵtext(207, "All-Day MDR-Connect");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(208, ", EVEN IF MDR-Connect HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. All-Day MDR-Connect LIABILITY IN ALL EVENTS IS LIMITED TO THE TRANSACTION FEE CHARGED ON THE SALES TRANSACTION FOR THE PRODUCT SALES THAT GIVES RISE TO ANY LIABILITY ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(209, "p", 159)(210, "strong")(211, "u");
    i0.ɵɵtext(212, "Please do note in particular");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(213, "p", 159)(214, "strong");
    i0.ɵɵtext(215, "It is expressly agreed for purposes hereof, during the term of the Agreement, MDR-Connect shall indemnify and hold harmless from any claim, loss, liability or expense (including court costs and reasonable attorneys' fees) arising out of, or based upon any claim for indemnification, reinstatement or other legal or equitable remedy brought by Members in-appropriate Content display for Posts Management or purchase Transaction for false Promises /Delivery commitments done for the customers with in the online sales process on MDR-Connect Marketplace .");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(216, "li")(217, "strong", 159);
    i0.ɵɵtext(218, "Intellectual Property Rights");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(219, "ul", 165)(220, "li");
    i0.ɵɵtext(221, "We\u2019re providing you notice about our worldwide intellectual property rights. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(222, "li");
    i0.ɵɵtext(223, "All-Day MDR-Connect reserves all of its intellectual property rights for the Platform services Trademarks and logos used by our members organizations on the platform profile are the trademarks of their respective Organizations. MDR-Connect, and \u201CMDR\u201D logos and other All-Day MDR-Connect trademarks, service marks, graphics and logos used for our Platforms are trademarks or registered trademarks of MDR-Connect");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(224, "li")(225, "strong", 159);
    i0.ɵɵtext(226, "Termination");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(227, "p", 159);
    i0.ɵɵtext(228, "We can each end this Contract, but some rights and obligations survive. Both you and MDR-Connect may terminate this Contract at any time with notice to the other. On termination, you lose the right to access or use the Services. The following shall survive termination:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(229, "ul", 163)(230, "li");
    i0.ɵɵtext(231, "Our rights to use and disclose your feedback.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(232, "li");
    i0.ɵɵtext(233, "Content already circulated or shared by you on the platform remains with the member organizations and will continue to be used by the platform.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(234, "li");
    i0.ɵɵtext(235, "Any amount owed by either party prior to termination will remain payable after termination.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(236, "li");
    i0.ɵɵtext(237, "Any product sold, deliveries, or service commitments must be fulfilled to the member organization based on your transaction details of the marketplace.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(238, "li");
    i0.ɵɵtext(239, "You can visit our Backoffice Help Centre for more details on closing your membership account.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(240, "li")(241, "strong", 159);
    i0.ɵɵtext(242, "Disputes Resolution, Governing Law & Jurisdiction");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(243, "ul", 163)(244, "li");
    i0.ɵɵtext(245, "These Terms and Conditions shall be governed by and construed in accordance with the laws of India.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(246, "li");
    i0.ɵɵtext(247, "Any difference, dispute, conflict, or controversy, including any question as to its existence, validity, or termination, arising out of or in connection with these Terms and Conditions (\u201CDispute\u201D) shall, if not amicably settled within 90 (ninety) days after the receipt of written notice by the parties (Member Organization & MDR-Connect), be referred to resolution.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(248, "li");
    i0.ɵɵtext(249, "Such dispute shall be resolved in accordance with the Arbitration and Conciliation Act, 1996 by a sole arbitrator duly appointed by MDR-Connect. The seat and venue of arbitration shall be New Delhi, and the arbitration shall be conducted in English. The award of the arbitrator shall be final and binding upon the parties. Each party shall bear its own cost of arbitration.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(250, "li");
    i0.ɵɵtext(251, "The Courts at New Delhi shall have sole and exclusive jurisdiction over any matters related to these Terms and Conditions.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(252, "li")(253, "strong", 159);
    i0.ɵɵtext(254, "General Terms");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(255, "ul", 166)(256, "li");
    i0.ɵɵtext(257, "This Contract (including additional terms that may be provided by us when you engage with a feature of the other paid Services of the platform) is the only agreement between us regarding the Services and supersedes all prior agreements for the Services.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(258, "li");
    i0.ɵɵtext(259, "If we don't act to enforce a breach of this Contract, that does not mean that MDR-Connect has waived its right to enforce this Contract.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(260, "li");
    i0.ɵɵtext(261, "You may not assign or transfer this Contract (or your membership or use of Services of the platform) to anyone without our consent. However, you agree that MDR-Connect may assign this Contract to its affiliates or a party after Merger & Acquisition without your consent. There are no third-party beneficiaries to this Contract. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(262, "li");
    i0.ɵɵtext(263, "You agree that the only way to provide us legal notice is at the email or through a digital copy provided to us at our Back Office.");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(264, "div", 159)(265, "strong");
    i0.ɵɵtext(266, "Contact Us");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(267, "address", 159)(268, "p", 167);
    i0.ɵɵtext(269, "Garima Kapoor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(270, "p", 167);
    i0.ɵɵtext(271, "Head Compliances Control \u2013 All-day MDR-Connect");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(272, "p", 167);
    i0.ɵɵtext(273, "Garima.k@all-day.in");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(274, "p", 167);
    i0.ɵɵtext(275, "Plot no. 530 Udyog Vihar Phase 5");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(276, "p", 167);
    i0.ɵɵtext(277, "Gurugram - 122016");
    i0.ɵɵelementEnd()()()();
} }
function MdrConnectComponent_small_301_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 117);
    i0.ɵɵtext(1, " You must accept the terms and conditions to proceed. ");
    i0.ɵɵelementEnd();
} }
function MdrConnectComponent_div_314_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 168)(1, "p")(2, "strong");
    i0.ɵɵtext(3, "RegId:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p")(6, "strong");
    i0.ɵɵtext(7, "Status:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r45.trackResponse.RegId, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r45.trackResponse.Message, "");
} }
function MdrConnectComponent_div_316_div_11_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 187)(1, "label");
    i0.ɵɵtext(2, "Member Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 188);
    i0.ɵɵlistener("ngModelChange", function MdrConnectComponent_div_316_div_11_div_21_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r57 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r57.memberType = $event); });
    i0.ɵɵelementStart(4, "option", 148);
    i0.ɵɵtext(5, "Basic");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 147);
    i0.ɵɵtext(7, "Standard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 146);
    i0.ɵɵtext(9, "Premium");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 189);
    i0.ɵɵlistener("click", function MdrConnectComponent_div_316_div_11_div_21_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r58); const ctx_r59 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r59.updateMembershipType()); });
    i0.ɵɵtext(11, "Update Type");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r56 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r56.memberType);
} }
function MdrConnectComponent_div_316_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 177)(1, "p")(2, "strong");
    i0.ɵɵtext(3, "Allocated Storecode:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 117);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p")(7, "strong");
    i0.ɵɵtext(8, "Selected Membership:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 178);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 179)(12, "a", 180);
    i0.ɵɵtext(13, "Want to Change Membership Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 181)(15, "label", 182);
    i0.ɵɵtext(16, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 183);
    i0.ɵɵlistener("ngModelChange", function MdrConnectComponent_div_316_div_11_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r61); const ctx_r60 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r60.changeType = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "label", 184);
    i0.ɵɵtext(19, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 185);
    i0.ɵɵlistener("ngModelChange", function MdrConnectComponent_div_316_div_11_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r61); const ctx_r62 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r62.changeType = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(21, MdrConnectComponent_div_316_div_11_div_21_Template, 12, 1, "div", 186);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r52.storeCode);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r52.selectedMembership);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r52.changeType);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r52.changeType);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r52.changeType === "yes");
} }
function MdrConnectComponent_div_316_hr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function MdrConnectComponent_div_316_div_13_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 193)(1, "p")(2, "strong");
    i0.ɵɵtext(3, "Service Price:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementStart(5, "span", 194);
    i0.ɵɵtext(6, "(Premium Membership)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p")(8, "strong");
    i0.ɵɵtext(9, "Discount:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p")(12, "strong");
    i0.ɵɵtext(13, "GST:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r63 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" INR ", ctx_r63.serviceDiscount.ServicePrice, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r63.serviceDiscount.Discount_Percntg, "%");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r63.serviceDiscount.GST_Percntg, "%");
} }
function MdrConnectComponent_div_316_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "h6", 117);
    i0.ɵɵtext(2, "Payment for Service: ");
    i0.ɵɵelementStart(3, "span", 190);
    i0.ɵɵtext(4, "New Member Annual Fee");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "button", 191);
    i0.ɵɵlistener("click", function MdrConnectComponent_div_316_div_13_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r65); const ctx_r64 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r64.showPrice()); });
    i0.ɵɵtext(6, "Show Price & Discounts");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, MdrConnectComponent_div_316_div_13_div_7_Template, 15, 3, "div", 192);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r54.showPriceDetails === true);
} }
function MdrConnectComponent_div_316_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 195)(1, "button", 196);
    i0.ɵɵlistener("click", function MdrConnectComponent_div_316_div_14_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r66.cartCheckout()); });
    i0.ɵɵtext(2, "Check Out");
    i0.ɵɵelementEnd()();
} }
function MdrConnectComponent_div_316_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 169)(2, "div", 170)(3, "button", 171);
    i0.ɵɵlistener("click", function MdrConnectComponent_div_316_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r69); const ctx_r68 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r68.viewOpenCart()); });
    i0.ɵɵtext(4, " View Open Cart ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label");
    i0.ɵɵtext(6, "Member Registration ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 172)(8, "input", 173);
    i0.ɵɵlistener("ngModelChange", function MdrConnectComponent_div_316_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r70 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r70.memberId = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 174);
    i0.ɵɵlistener("click", function MdrConnectComponent_div_316_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r69); const ctx_r71 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r71.showPaymentDetails()); });
    i0.ɵɵtext(10, "Enter");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(11, MdrConnectComponent_div_316_div_11_Template, 22, 5, "div", 175);
    i0.ɵɵtemplate(12, MdrConnectComponent_div_316_hr_12_Template, 1, 0, "hr", 124);
    i0.ɵɵtemplate(13, MdrConnectComponent_div_316_div_13_Template, 8, 1, "div", 124);
    i0.ɵɵtemplate(14, MdrConnectComponent_div_316_div_14_Template, 3, 0, "div", 176);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r46 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngModel", ctx_r46.memberId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r46.showDetails === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r46.showDetails === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r46.showDetails === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r46.showPriceDetails === true);
} }
function MdrConnectComponent_div_317_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 197)(2, "div")(3, "p")(4, "strong");
    i0.ɵɵtext(5, "Cart ID :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p")(8, "strong");
    i0.ɵɵtext(9, "Service ID :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div")(12, "button", 198);
    i0.ɵɵlistener("click", function MdrConnectComponent_div_317_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r73); const ctx_r72 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r72.deleteCart()); });
    i0.ɵɵtext(13, "Delete CART");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 199)(15, "div", 200)(16, "p")(17, "strong");
    i0.ɵɵtext(18, "Membership Name :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 200)(21, "p")(22, "strong");
    i0.ɵɵtext(23, "Quantity :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 193)(26, "p")(27, "strong");
    i0.ɵɵtext(28, "Per Unit Cost :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span", 117);
    i0.ɵɵtext(30);
    i0.ɵɵpipe(31, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "p")(33, "strong");
    i0.ɵɵtext(34, "Discount % :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p")(37, "strong");
    i0.ɵɵtext(38, "GST Charged :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(39);
    i0.ɵɵpipe(40, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "p")(42, "strong");
    i0.ɵɵtext(43, "Currency :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 177)(46, "p")(47, "strong");
    i0.ɵɵtext(48, "Total Cost Before Discount :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(49);
    i0.ɵɵpipe(50, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "p")(52, "strong");
    i0.ɵɵtext(53, "Discount Amount :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(54);
    i0.ɵɵpipe(55, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "p")(57, "strong");
    i0.ɵɵtext(58, "GST Amount :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(59);
    i0.ɵɵpipe(60, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "h5", 201)(62, "strong");
    i0.ɵɵtext(63, "Total to Pay Amount :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "span", 190);
    i0.ɵɵtext(65);
    i0.ɵɵpipe(66, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "div", 195)(68, "button", 202);
    i0.ɵɵlistener("click", function MdrConnectComponent_div_317_Template_button_click_68_listener() { i0.ɵɵrestoreView(_r73); const ctx_r74 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r74.payment()); });
    i0.ɵɵtext(69, "PAY");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r47 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", (ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_SERVICE_CARTID) || "\u2014", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", (ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_CART_FOR_SERVICEID) || "\u2014", "");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_STORE_MEMBRSHIP_NAME, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_SERVICE_QUANTITY, "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(31, 13, ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_PER_UNIT_SERVICE_COST, "1.2-2"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_SERVICE_MEMBR_DISCNT_PERCNTG, "%");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(40, 16, ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_CART_GST_CHARGED_AMT, "1.2-2"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_SERVICE_CURRENCY, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(50, 19, ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_PER_UNIT_SERVICE_COST, "1.2-2"), "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(55, 22, ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_SERVICE_DISCNT_AMT, "1.2-2"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(60, 25, ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_CART_GST_CHARGED_AMT, "1.2-2"), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(66, 28, ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_CART_TOTAL_TO_PAY_AMT, "1.2-2"), " ", ctx_r47.cartDetials == null ? null : ctx_r47.cartDetials.MDR_CONCT_SERVICE_CURRENCY, " ");
} }
export class MdrConnectComponent {
    constructor(bsModalRef, apiService, locationNames, toastr, fb, modalService, razorpayService, paymentStatusService) {
        this.bsModalRef = bsModalRef;
        this.apiService = apiService;
        this.locationNames = locationNames;
        this.toastr = toastr;
        this.fb = fb;
        this.modalService = modalService;
        this.razorpayService = razorpayService;
        this.paymentStatusService = paymentStatusService;
        // skusValue: number = 10;
        this.minValue = 10;
        this.maxValue = 500;
        this.step = 5;
        this.hasGstin = true;
        this.showTooltip = false;
        this.refferedBy = "";
        this.MdrReg = {
            MDRS_CategoryId: 0,
            Seller_Flg: false,
            Buyer_Flg: false,
            Seller_Buyer_Flg: false,
            DomainId: 0,
            SKU_Pack_Count: 0,
            Org_Name: '',
            Org_Type: '',
            GSTIN_Numbr: 'temp',
            Reg_Email: '',
            Reg_Mobile_Numbr: '',
            Country: '',
            State: '',
            City: '',
            PIN: '',
            Address: '',
            Landmark: '',
            First_Name: '',
            Last_Name: '',
            MDR_REGISTRD_ON_PRODUCT_FLG: false,
            MDR_REGISTRD_ON_SERVICE_FLG: false,
            MDR_REGSITRD_MEMBERSHIP_PLANID: '',
            MDR_REGISTRD_PINCODE: '',
            MDR_STORE_MAIN_PROFILE_CREATED_FLG: false,
            MDR_BO_STORE_MADE_AND_ACTIVE_FLG: false
        };
        this.showmore = false;
        this.showpayment = false;
        this.countryEvent = new EventEmitter();
        this.stateEvent = new EventEmitter();
        this.cityEvent = new EventEmitter();
        this.pincodeEvent = new EventEmitter();
        this.baseUrl = "https://www.shoppenation.in/alcoolretail/carryr/retail";
        this.showCart = false;
        this.showDetails = false;
        this.memberId = '';
        this.storeCode = '';
        this.selectedMembership = '';
        this.changeType = 'no';
        this.memberType = 'MDR01';
        this.PlanId = '';
        this.showPriceDetails = false;
        this.trackForm = this.fb.group({
            regId: ['', Validators.required]
        });
        this.getlogindata = localStorage.getItem('logindata');
        this.getlogindata = JSON.parse(this.getlogindata);
        console.log("Login data: ", this.getlogindata);
        this.MdrRegistration = new FormGroup({
            entityType: new FormControl('', Validators.required),
            registeringAs: new FormControl('', Validators.required),
            skusValue: new FormControl({ value: 0, disabled: true }, [Validators.pattern("^[0-9]+$")]),
            industry: new FormControl('', Validators.required),
            companyType: new FormControl('', Validators.required),
            gstin: new FormControl({ value: '', disabled: false }, [
                Validators.required,
                Validators.maxLength(30)
            ]),
            organizationName: new FormControl('', Validators.required),
            promoterFirstName: new FormControl('', Validators.required),
            promoterLastName: new FormControl('', Validators.required),
            Country: new FormControl('', Validators.required),
            State: new FormControl('', Validators.required),
            City: new FormControl('', Validators.required),
            PinCode: new FormControl('', [Validators.required]),
            mobile: new FormControl('', [
                Validators.required,
                Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
            ]),
            email: new FormControl('', [Validators.required, Validators.email]),
            address: new FormControl('', Validators.required),
            landmark: new FormControl('', Validators.required),
            plan: new FormControl('', Validators.required),
            termsCheck: new FormControl(false, Validators.requiredTrue)
        });
    }
    ngOnInit() {
        this.getCountry();
        this.paymentStatusService.paymentStatus$.subscribe((status) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (status) {
                this.paymentStatus = status;
                if (status.success) {
                    try {
                        const payload = {
                            Cartid: (_a = this.cartDetials) === null || _a === void 0 ? void 0 : _a.MDR_CONCT_SERVICE_CARTID,
                            Confirnflg: 1,
                            RazrPay_ordrerid: (_b = this.cartDetials) === null || _b === void 0 ? void 0 : _b.Id
                        };
                        console.log("payload: ", payload);
                        this.apiService.postCall(this.apiService.baseURL + '/Service7-MakePayments', payload)
                            .subscribe(data => {
                            console.log(data);
                            this.toastr.success(data);
                        }, (error) => {
                            console.log(error);
                            this.toastr.error(error, '', {
                                timeOut: 5000,
                            });
                        });
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                console.log("Payment status: ", this.paymentStatus);
            }
        }));
    }
    more() {
        this.showmore = !this.showmore;
    }
    onSubmitTrack() {
        if (this.trackForm.valid) {
            const regId = this.trackForm.value.regId;
            const payload = {
                Mobile: regId
            };
            this.apiService.postCall(this.apiService.baseURL + '/TrackFormMDR', payload)
                .subscribe(data => {
                console.log(data);
                this.trackResponse = data;
            }, (error) => {
                console.log("Error: ", error);
                this.toastr.error(error.error, '', {
                    timeOut: 5000,
                });
            });
        }
    }
    RegisterMyOrg() {
        const formValues = this.MdrRegistration.getRawValue();
        const payload = {
            MDRS_CategoryId: formValues.entityType,
            Seller_Flg: this.MdrReg.Seller_Flg,
            Buyer_Flg: this.MdrReg.Buyer_Flg,
            Seller_Buyer_Flg: this.MdrReg.Seller_Buyer_Flg,
            DomainId: formValues.industry,
            SKU_Pack_Count: formValues.skusValue && formValues.gstin !== 0 ? formValues.skusValue : 1,
            Org_Name: formValues.organizationName,
            Org_Type: formValues.companyType,
            GSTIN_Numbr: formValues.gstin && formValues.gstin.trim() !== "" ? formValues.gstin : "ABHPH7777RHCZ0",
            Reg_Email: formValues.email,
            Reg_Mobile_Numbr: formValues.mobile,
            Country: formValues.Country,
            State: formValues.State,
            City: formValues.City,
            PIN: formValues.PinCode,
            Address: formValues.address,
            Landmark: formValues.landmark,
            First_Name: formValues.promoterFirstName,
            Last_Name: formValues.promoterLastName,
            MDR_REGISTRD_ON_PRODUCT_FLG: this.MdrReg.MDR_REGISTRD_ON_PRODUCT_FLG,
            MDR_REGISTRD_ON_SERVICE_FLG: this.MdrReg.MDR_REGISTRD_ON_SERVICE_FLG,
            MDR_REGSITRD_MEMBERSHIP_PLANID: formValues.plan,
            MDR_REGISTRD_PINCODE: formValues.PinCode,
            MDR_STORE_MAIN_PROFILE_CREATED_FLG: this.MdrReg.MDR_STORE_MAIN_PROFILE_CREATED_FLG,
            MDR_BO_STORE_MADE_AND_ACTIVE_FLG: this.MdrReg.MDR_BO_STORE_MADE_AND_ACTIVE_FLG
        };
        console.log("Payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/RegisterMDRForm', payload)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data);
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
        this.close();
    }
    close() {
        this.bsModalRef.hide();
    }
    selectPlan(event) {
        var _a;
        const selectedValue = event.target.value;
        console.log(selectedValue);
        (_a = this.MdrRegistration.get('plan')) === null || _a === void 0 ? void 0 : _a.setValue(selectedValue);
        this.MdrReg.MDR_REGSITRD_MEMBERSHIP_PLANID = selectedValue;
    }
    selectCategory(event) {
        const selectedValue = event.target.value;
        this.category = selectedValue;
        if (selectedValue === '0') {
            this.MdrReg.MDR_REGISTRD_ON_PRODUCT_FLG = true;
            this.MdrReg.MDR_REGISTRD_ON_SERVICE_FLG = false;
        }
        else if (selectedValue === '1') {
            this.MdrReg.MDR_REGISTRD_ON_PRODUCT_FLG = false;
            this.MdrReg.MDR_REGISTRD_ON_SERVICE_FLG = true;
        }
        else {
            this.MdrReg.MDR_REGISTRD_ON_PRODUCT_FLG = false;
            this.MdrReg.MDR_REGISTRD_ON_SERVICE_FLG = false;
        }
    }
    onSelectRegisteringAs(event) {
        var _a, _b, _c;
        const selectedValue = event.target.value;
        console.log('Registering As:', selectedValue);
        if (selectedValue === 's' || selectedValue === 'sb') {
            this.MdrReg.Seller_Flg = selectedValue === 's';
            this.MdrReg.Buyer_Flg = false;
            this.MdrReg.Seller_Buyer_Flg = selectedValue === 'sb';
            (_a = this.MdrRegistration.get('skusValue')) === null || _a === void 0 ? void 0 : _a.setValue(10);
        }
        else if (selectedValue === 'b') {
            this.MdrReg.Seller_Flg = false;
            this.MdrReg.Buyer_Flg = true;
            this.MdrReg.Seller_Buyer_Flg = false;
            (_b = this.MdrRegistration.get('skusValue')) === null || _b === void 0 ? void 0 : _b.setValue(0);
        }
        else {
            this.MdrReg.Seller_Flg = false;
            this.MdrReg.Buyer_Flg = false;
            this.MdrReg.Seller_Buyer_Flg = false;
            (_c = this.MdrRegistration.get('skusValue')) === null || _c === void 0 ? void 0 : _c.setValue(0);
        }
    }
    increment() {
        var _a, _b;
        if (this.MdrReg.Seller_Flg == true || this.MdrReg.Seller_Buyer_Flg == true) {
            const currentValue = ((_a = this.MdrRegistration.get('skusValue')) === null || _a === void 0 ? void 0 : _a.value) || this.minValue;
            if (currentValue + this.step <= this.maxValue) {
                (_b = this.MdrRegistration.get('skusValue')) === null || _b === void 0 ? void 0 : _b.setValue(currentValue + this.step);
            }
        }
    }
    decrement() {
        var _a, _b;
        if (this.MdrReg.Seller_Flg == true || this.MdrReg.Seller_Buyer_Flg == true) {
            const currentValue = ((_a = this.MdrRegistration.get('skusValue')) === null || _a === void 0 ? void 0 : _a.value) || this.minValue;
            if (currentValue - this.step >= this.minValue) {
                (_b = this.MdrRegistration.get('skusValue')) === null || _b === void 0 ? void 0 : _b.setValue(currentValue - this.step);
            }
        }
    }
    gstinOwner(event) {
        // const selectedValue = (event.target as HTMLSelectElement).value;
        // if (selectedValue === 'false') {
        //   this.hasGstin = false;
        //   this.MdrRegistration.get('gstin')?.disable();
        //   this.MdrRegistration.get('gstin')?.setValue('');
        // } else {
        //   this.hasGstin = true;
        //   this.MdrRegistration.get('gstin')?.enable();
        // }
    }
    refferedby(event) {
        const selectedValue = event.target.value;
        if (selectedValue === 'bm') {
            this.refferedBy = 'bm';
        }
        else if (selectedValue === 'bf') {
            this.refferedBy = 'bf';
        }
        else if (selectedValue === 'sf') {
            this.refferedBy = 'sf';
        }
        else {
            this.refferedBy = '';
        }
    }
    showMakePayment() {
        this.showpayment = !this.showpayment;
    }
    getCountry() {
        this.apiService.CountryList().subscribe((res) => {
            console.log("Country List: ", res);
            this.countryList = res;
            //   this.getState();
        });
    }
    changeCountry(e) {
        this.countryID = e.target.value;
        this.countryEvent.emit(this.countryID);
        console.log(this.countryID);
        if (this.countryID) {
            this.getState();
        }
        else {
            this.stateList = null;
            this.cityList = null;
            this.zipList = null;
        }
    }
    getState() {
        this.apiService.StateList(this.countryID).subscribe((res) => {
            this.stateList = res;
            console.log("State List: ", res);
        });
    }
    changeState(e) {
        this.stateID = e.target.value;
        this.stateEvent.emit(this.stateID);
        this.stateName = e.target.options[e.target.options.selectedIndex].text;
        if (this.stateID) {
            this.getCity();
            this.cityList = null;
            this.zipList = null;
        }
        else {
            this.cityList = null;
            // this.zipList = null;
        }
    }
    getCity() {
        this.apiService.CityList(this.countryID, this.stateID).subscribe((res) => {
            this.cityList = res;
            console.log("City List: ", res);
        });
    }
    changeCity(e) {
        this.cityID = e.target.value;
        console.log(this.cityID);
        this.cityEvent.emit(this.cityID);
        this.cityName = e.target.options[e.target.options.selectedIndex].text;
        this.getZip();
    }
    getZip() {
        this.apiService.ZipList(this.stateName, this.cityName).subscribe((res) => {
            this.zipList = res;
            console.log(this.zipList);
        });
    }
    changePin(e) {
        // this.pinID =e.target.value;
        this.pinID = e.target.options[e.target.options.selectedIndex].text;
        console.log(this.pinID);
        this.pincodeEvent.emit(this.pinID);
    }
    closeCheckout() {
        this.showCart = false;
    }
    showPaymentDetails() {
        const payload = {
            MemberRegid: this.memberId,
            FreshMembershipFlg: true,
            ReActivationFlg: false
        };
        this.apiService.postCall(this.apiService.baseURL + '/GetStorecode_Memberplan', payload)
            .subscribe(data => {
            console.log(data);
            this.storeCode = data.Storecode;
            this.selectedMembership = data.PlanName;
            this.PlanId = data.PlanId;
            this.showDetails = true;
        }, (error) => {
            console.log("Error: ", error);
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
            this.showDetails = false;
        });
    }
    updateMembershipType() {
        const payload = {
            Storecode: this.storeCode,
            MemberPlanId: this.memberType
        };
        this.apiService.postCall(this.apiService.baseURL + '/Update_inRegistration_MemberPlan', payload)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data.Message);
            this.showDetails = false;
            this.memberId = '';
            this.storeCode = '';
            this.selectedMembership = '';
            this.changeType = 'no';
            this.memberType = 'MDR01';
            this.PlanId = '';
            this.showPriceDetails = false;
            this.serviceDiscount = null;
        }, (error) => {
            console.log("Error: ", error);
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
            this.showDetails = false;
        });
    }
    openCart() {
        this.showCart = true;
    }
    viewOpenCart() {
        const payload = {
            Storecode: "1001070099",
            Serviceid: "7"
        };
        this.apiService.postCall(this.apiService.baseURL + '/Display-OpenCart', payload)
            .subscribe(data => {
            var _a;
            console.log(data);
            if (data.Message === 'No Open cart Found for the Store') {
                this.toastr.error("No Open cart Found for the Store");
                return;
            }
            this.cartDetials = data;
            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
            this.showCart = true;
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    payment() {
        // this.razorpayService.payWithRazorpay(this.cartDetials.Id, this.cartDetials.MDR_CONCT_CART_TOTAL_TO_PAY_AMT_IN_PAISA);
        this.razorpayService.payWithRazorpay(this.cartDetials.Id, this.cartDetials.MDR_CONCT_CART_TOTAL_TO_PAY_AMT_IN_PAISA, this.cartDetials.MDR_PG_LIVE_KEY_FLG, this.cartDetials.PlateformName, this.cartDetials.email, this.cartDetials.Contact);
    }
    showPrice() {
        const payload = {
            Storecode: "1001070099",
            Serviceid: "7"
        };
        console.log("For get: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/Get-Service-Discount-Price', payload)
            .subscribe(data => {
            console.log(data);
            this.serviceDiscount = data;
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
        this.showPriceDetails = true;
    }
    cartCheckout() {
        var _a, _b, _c, _d, _e;
        const payload = {
            Storecode: "1001070099",
            MemberPlanId: (_a = this.serviceDiscount) === null || _a === void 0 ? void 0 : _a.MDR_STORE_MEMBRSHIP_PLAN_ID,
            PlanName: (_b = this.serviceDiscount) === null || _b === void 0 ? void 0 : _b.MDR_MEMBERSHIP_PLAN_NAME,
            ServiceId: "7",
            ServicePrice: (_c = this.serviceDiscount) === null || _c === void 0 ? void 0 : _c.ServicePrice,
            Quantity: "1",
            DiscountPercent: (_d = this.serviceDiscount) === null || _d === void 0 ? void 0 : _d.Discount_Percntg,
            GstPercent: (_e = this.serviceDiscount) === null || _e === void 0 ? void 0 : _e.GST_Percntg,
            Currency: "INR",
            Login_Subacctid: this.subaccountid,
            Login_Storeid: this.storeid
        };
        console.log("Payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/MDRCheckout', payload)
            .subscribe(data => {
            console.log(data);
            this.cartDetials = data;
            this.showCart = true;
        }, (error) => {
            console.log("Error: ", error);
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    deleteCart() {
        var _a;
        const payload = {
            Storecode: "1001070099",
            ServiceId: "7",
            CartId: (_a = this.cartDetials) === null || _a === void 0 ? void 0 : _a.MDR_CONCT_SERVICE_CARTID
        };
        this.apiService.postCall(this.apiService.baseURL + '/Delete_MDR_ServiceCart', payload)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data.Message);
            this.showCart = false;
            this.cartDetials = null;
        }, (error) => {
            console.log("Error: ", error);
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
}
MdrConnectComponent.ɵfac = function MdrConnectComponent_Factory(t) { return new (t || MdrConnectComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef), i0.ɵɵdirectiveInject(i2.ApiService), i0.ɵɵdirectiveInject(i3.LocationService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.FormBuilder), i0.ɵɵdirectiveInject(i1.BsModalService), i0.ɵɵdirectiveInject(i6.RazorpayService), i0.ɵɵdirectiveInject(i7.PaymentStatusService)); };
MdrConnectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MdrConnectComponent, selectors: [["app-mdr-connect"]], outputs: { countryEvent: "countryEvent", stateEvent: "stateEvent", cityEvent: "cityEvent", pincodeEvent: "pincodeEvent" }, decls: 318, vars: 53, consts: [[1, "modal-header", "custom-header"], [1, "header-left"], [1, "img-container"], ["src", "../../assets/images/mdr-connect-ind.png", 1, "mdrimg"], [1, "title-wrapper"], [1, "modal-title"], [1, "modal-title", "subtitle"], ["type", "button", 1, "close-btn", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["heading", "Registration"], ["novalidate", "", 3, "formGroup"], [1, "form-row"], [1, "form-group", "col-md-6"], [1, "form-control", 3, "change"], ["value", ""], ["value", "0"], ["value", "1"], ["formControlName", "entityType", 1, "form-control"], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "3", 4, "ngIf"], ["value", "4", 4, "ngIf"], ["value", "5", 4, "ngIf"], ["value", "7", 4, "ngIf"], ["value", "8", 4, "ngIf"], ["value", "9", 4, "ngIf"], ["value", "10", 4, "ngIf"], ["value", "11", 4, "ngIf"], ["value", "12", 4, "ngIf"], ["value", "13", 4, "ngIf"], ["value", "14", 4, "ngIf"], ["value", "15", 4, "ngIf"], ["value", "16", 4, "ngIf"], ["value", "17", 4, "ngIf"], ["value", "18", 4, "ngIf"], ["value", "19", 4, "ngIf"], ["value", "20", 4, "ngIf"], ["value", "21", 4, "ngIf"], ["value", "22", 4, "ngIf"], ["value", "23", 4, "ngIf"], ["value", "24", 4, "ngIf"], ["value", "25", 4, "ngIf"], ["value", "26", 4, "ngIf"], ["value", "27", 4, "ngIf"], ["value", "28", 4, "ngIf"], ["value", "29", 4, "ngIf"], ["value", "30", 4, "ngIf"], ["value", "31", 4, "ngIf"], ["value", "32", 4, "ngIf"], ["value", "33", 4, "ngIf"], ["value", "34", 4, "ngIf"], ["formControlName", "registeringAs", 1, "form-control", 3, "change"], ["value", "s"], ["value", "b"], ["value", "sb"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["formControlName", "skusValue", "readonly", "", 1, "form-control", "text-center"], [1, "input-group-append"], ["formControlName", "industry", 1, "form-control"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["value", "26"], ["value", "27"], ["value", "28"], ["value", "29"], ["formControlName", "companyType", 1, "form-control"], ["type", "text", "formControlName", "organizationName", 1, "form-control"], ["value", "MDR03", 4, "ngIf"], ["value", "MDR02", 4, "ngIf"], ["value", "MDR01", 4, "ngIf"], [1, "text-success", "d-block", "mt-1"], ["disabled", "", 1, "form-control", 3, "change"], ["value", "true"], ["type", "text", "formControlName", "gstin", 1, "form-control"], ["value", "bm"], ["value", "bf"], ["value", "sf"], ["class", "form-group col-md-6", 4, "ngIf"], ["type", "text", "formControlName", "promoterFirstName", 1, "form-control"], ["type", "text", "formControlName", "promoterLastName", 1, "form-control"], [1, "form-group", "col-md-3"], ["formControlName", "Country", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "State", 1, "form-control", 3, "change"], ["formControlName", "City", 1, "form-control", 3, "change"], ["selected", "", "value", ""], ["formControlName", "PinCode", 1, "form-control", 3, "change"], ["type", "address", "formControlName", "address", 1, "form-control"], ["type", "address", "formControlName", "landmark", 1, "form-control"], ["type", "text", "formControlName", "mobile", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], [1, "form-group", "col-md-12"], [1, "text-danger"], [1, "d-flex", "align-items-center", "mb-3", "mt-2"], ["type", "button", 1, "btn", "btn-warning", 2, "position", "relative", 3, "click"], ["class", "makepayment mb-3", 4, "ngIf"], [1, "rounded-border"], [1, "mt-3", "mdr-heading", "b-2"], [1, "mt-3", "mb-3"], [4, "ngIf"], [1, "readmore"], [3, "click"], [1, "form-check", "mt-3"], ["type", "checkbox", "id", "termsCheck", "formControlName", "termsCheck", 1, "form-check-input"], ["for", "termsCheck", 1, "form-check-label"], ["href", "#", "target", "_blank"], ["class", "text-danger", 4, "ngIf"], [1, "bottom-btn"], ["type", "submit", 1, "btn", "custom-btn", 3, "disabled", "click"], ["heading", "Track your Registration Status"], [3, "formGroup", "ngSubmit"], ["for", "regId"], ["id", "regId", "type", "text", "formControlName", "regId", "placeholder", "Enter your registered mobile number", 1, "form-control"], ["type", "submit", 1, "btn", "custom-btn", "mt-3", 3, "disabled"], ["class", "alert alert-info mt-3", 4, "ngIf"], ["heading", "Payments"], ["value", "30"], ["value", "31"], ["value", "32"], ["value", "33"], ["value", "34"], ["value", "MDR03"], ["value", "MDR02"], ["value", "MDR01"], ["type", "text", "formControlName", "memberid", 1, "form-control"], ["type", "text", "formControlName", "franchiseeid", 1, "form-control"], [3, "value"], [1, "makepayment", "mb-3"], [1, ""], [2, "color", "blue", "text-decoration", "underline", "cursor", "default"], [1, "mt-3", "mb-3", "ml-3", 2, "list-style-type", "upper-roman"], [1, "ml-3", "mb-2", "mt-2"], [1, "mt-2", "ml-3", "mb-2"], [1, "ml-3", "mt-2", "mb-2"], [1, "ml-3"], [1, "mb-3", "ml-3", 2, "list-style-type", "lower-alpha"], [1, "mb-2", "mt-2", "ml-3", 2, "list-style-type", "lower-alpha"], [1, "mb-2"], [1, "ml-3", 2, "list-style-type", "lower-roman"], [1, "mb-3", "ml-3", 2, "list-style-type", "lower-roman"], [1, "ml-3", 2, "list-style-type", "disc"], [1, "ml-3", 2, "list-style-type", "lower-alpha"], [1, "block"], [1, "alert", "alert-info", "mt-3"], [1, "form-group"], [1, "w-100", "d-flex", "justify-content-end"], [1, "btn", "btn-success", "btn-sm", "px-3", "ml-2", 3, "click"], [1, "d-flex"], ["type", "text", "placeholder", "Enter Member ID", 1, "form-control", "w-50", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-warning", "ml-2", 3, "click"], ["class", "mt-3", 4, "ngIf"], ["class", "text-center mt-3", 4, "ngIf"], [1, "mt-3"], [1, "text-primary"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0)", 1, "text-info"], [1, "ml-2"], [1, "mr-1"], ["type", "radio", "name", "changeType", "value", "no", 3, "ngModel", "ngModelChange"], [1, "ml-2", "mr-1"], ["type", "radio", "name", "changeType", "value", "yes", 3, "ngModel", "ngModelChange"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2"], [1, "form-control", "w-50", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "mt-2", 3, "click"], [1, "text-dark"], [1, "btn", "btn-warning", "btn-sm", "mb-2", 3, "click"], ["class", "border p-2 rounded bg-light", 4, "ngIf"], [1, "border", "p-2", "rounded", "bg-light"], [1, "text-muted"], [1, "text-center", "mt-3"], [1, "btn", "btn-dark", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "btn", "btn-danger", "btn-sm", "px-3", 3, "click"], [1, "row"], [1, "col-md-6"], [1, "text-danger", "mt-3"], [1, "btn", "btn-danger", "px-4", "py-2", "font-weight-bold", 3, "click"]], template: function MdrConnectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵelement(3, "img", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4)(5, "h4", 5);
        i0.ɵɵtext(6, "MDR-Connect");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "h4", 6);
        i0.ɵɵtext(8, "Connecting Businesses");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(9, "button", 7);
        i0.ɵɵlistener("click", function MdrConnectComponent_Template_button_click_9_listener() { return ctx.close(); });
        i0.ɵɵelementStart(10, "span", 8);
        i0.ɵɵtext(11, "\u00D7");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(12, "div", 9)(13, "tabset")(14, "tab", 10)(15, "form", 11)(16, "div", 12)(17, "div", 13)(18, "label");
        i0.ɵɵtext(19, "Category");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "select", 14);
        i0.ɵɵlistener("change", function MdrConnectComponent_Template_select_change_20_listener($event) { return ctx.selectCategory($event); });
        i0.ɵɵelementStart(21, "option", 15);
        i0.ɵɵtext(22, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "option", 16);
        i0.ɵɵtext(24, "Product Based");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "option", 17);
        i0.ɵɵtext(26, "Service Based");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(27, "div", 13)(28, "label");
        i0.ɵɵtext(29, "I am");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "select", 18)(31, "option", 15);
        i0.ɵɵtext(32, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(33, MdrConnectComponent_option_33_Template, 2, 0, "option", 19);
        i0.ɵɵtemplate(34, MdrConnectComponent_option_34_Template, 2, 0, "option", 20);
        i0.ɵɵtemplate(35, MdrConnectComponent_option_35_Template, 2, 0, "option", 21);
        i0.ɵɵtemplate(36, MdrConnectComponent_option_36_Template, 2, 0, "option", 22);
        i0.ɵɵtemplate(37, MdrConnectComponent_option_37_Template, 2, 0, "option", 23);
        i0.ɵɵtemplate(38, MdrConnectComponent_option_38_Template, 2, 0, "option", 24);
        i0.ɵɵtemplate(39, MdrConnectComponent_option_39_Template, 2, 0, "option", 25);
        i0.ɵɵtemplate(40, MdrConnectComponent_option_40_Template, 2, 0, "option", 26);
        i0.ɵɵtemplate(41, MdrConnectComponent_option_41_Template, 2, 0, "option", 27);
        i0.ɵɵtemplate(42, MdrConnectComponent_option_42_Template, 2, 0, "option", 28);
        i0.ɵɵtemplate(43, MdrConnectComponent_option_43_Template, 2, 0, "option", 29);
        i0.ɵɵtemplate(44, MdrConnectComponent_option_44_Template, 2, 0, "option", 30);
        i0.ɵɵtemplate(45, MdrConnectComponent_option_45_Template, 2, 0, "option", 31);
        i0.ɵɵtemplate(46, MdrConnectComponent_option_46_Template, 2, 0, "option", 32);
        i0.ɵɵtemplate(47, MdrConnectComponent_option_47_Template, 2, 0, "option", 33);
        i0.ɵɵtemplate(48, MdrConnectComponent_option_48_Template, 2, 0, "option", 34);
        i0.ɵɵtemplate(49, MdrConnectComponent_option_49_Template, 2, 0, "option", 35);
        i0.ɵɵtemplate(50, MdrConnectComponent_option_50_Template, 2, 0, "option", 36);
        i0.ɵɵtemplate(51, MdrConnectComponent_option_51_Template, 2, 0, "option", 37);
        i0.ɵɵtemplate(52, MdrConnectComponent_option_52_Template, 2, 0, "option", 38);
        i0.ɵɵtemplate(53, MdrConnectComponent_option_53_Template, 2, 0, "option", 39);
        i0.ɵɵtemplate(54, MdrConnectComponent_option_54_Template, 2, 0, "option", 40);
        i0.ɵɵtemplate(55, MdrConnectComponent_option_55_Template, 2, 0, "option", 41);
        i0.ɵɵtemplate(56, MdrConnectComponent_option_56_Template, 2, 0, "option", 42);
        i0.ɵɵtemplate(57, MdrConnectComponent_option_57_Template, 2, 0, "option", 43);
        i0.ɵɵtemplate(58, MdrConnectComponent_option_58_Template, 2, 0, "option", 44);
        i0.ɵɵtemplate(59, MdrConnectComponent_option_59_Template, 2, 0, "option", 45);
        i0.ɵɵtemplate(60, MdrConnectComponent_option_60_Template, 2, 0, "option", 46);
        i0.ɵɵtemplate(61, MdrConnectComponent_option_61_Template, 2, 0, "option", 47);
        i0.ɵɵtemplate(62, MdrConnectComponent_option_62_Template, 2, 0, "option", 48);
        i0.ɵɵtemplate(63, MdrConnectComponent_option_63_Template, 2, 0, "option", 49);
        i0.ɵɵtemplate(64, MdrConnectComponent_option_64_Template, 2, 0, "option", 50);
        i0.ɵɵtemplate(65, MdrConnectComponent_option_65_Template, 2, 0, "option", 51);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(66, "div", 12)(67, "div", 13)(68, "label");
        i0.ɵɵtext(69, "Registering as");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(70, "select", 52);
        i0.ɵɵlistener("change", function MdrConnectComponent_Template_select_change_70_listener($event) { return ctx.onSelectRegisteringAs($event); });
        i0.ɵɵelementStart(71, "option", 15);
        i0.ɵɵtext(72, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(73, "option", 53);
        i0.ɵɵtext(74, "Seller");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(75, "option", 54);
        i0.ɵɵtext(76, "Buyer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(77, "option", 55);
        i0.ɵɵtext(78, "Seller & Buyer both");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(79, "div", 13)(80, "label");
        i0.ɵɵtext(81, "SKUs Listing Pack");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(82, "div", 56)(83, "div", 57)(84, "button", 58);
        i0.ɵɵlistener("click", function MdrConnectComponent_Template_button_click_84_listener() { return ctx.decrement(); });
        i0.ɵɵtext(85, "\u2212");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(86, "input", 59);
        i0.ɵɵelementStart(87, "div", 60)(88, "button", 58);
        i0.ɵɵlistener("click", function MdrConnectComponent_Template_button_click_88_listener() { return ctx.increment(); });
        i0.ɵɵtext(89, "+");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(90, "div", 12)(91, "div", 13)(92, "label");
        i0.ɵɵtext(93, "Industry");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(94, "select", 61)(95, "option", 15);
        i0.ɵɵtext(96, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(97, "option", 17);
        i0.ɵɵtext(98, "Wine & Liquor");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(99, "option", 62);
        i0.ɵɵtext(100, "Hotel Restaurant & Catering");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(101, "option", 63);
        i0.ɵɵtext(102, "FMCG/Kirana & Grocery");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(103, "option", 64);
        i0.ɵɵtext(104, "Fashion /Beauty Products /Footwear");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(105, "option", 65);
        i0.ɵɵtext(106, "Electronics /Consumer Appliances");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(107, "option", 66);
        i0.ɵɵtext(108, "Furnitures ( Office /Hospital/Home)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(109, "option", 67);
        i0.ɵɵtext(110, "Pharma & Medicos");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(111, "option", 68);
        i0.ɵɵtext(112, "Home Decors & Office Furnishings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(113, "option", 69);
        i0.ɵɵtext(114, "Medicine (Human/Pets)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(115, "option", 70);
        i0.ɵɵtext(116, "Facility Management Services");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(117, "option", 71);
        i0.ɵɵtext(118, "Farming / Agro And Agro Care");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(119, "option", 72);
        i0.ɵɵtext(120, "Automobiles & Vehicles");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(121, "option", 73);
        i0.ɵɵtext(122, "Health Care /Clinics /Hospitals");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(123, "option", 74);
        i0.ɵɵtext(124, "Office /Home Infrastructure Services");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(125, "option", 75);
        i0.ɵɵtext(126, "Automobile Spare Parts");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(127, "option", 76);
        i0.ɵɵtext(128, "Kitchen & Dining");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(129, "option", 77);
        i0.ɵɵtext(130, "Electrical & Lighting");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(131, "option", 78);
        i0.ɵɵtext(132, "Entertainment & Mobility");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(133, "option", 79);
        i0.ɵɵtext(134, "Sanitary Paints /Cements and Infra Furnishings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(135, "option", 80);
        i0.ɵɵtext(136, "Logistic and transportation");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(137, "option", 81);
        i0.ɵɵtext(138, "Banking /Finance and Accounting");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(139, "option", 82);
        i0.ɵɵtext(140, "Business Consulting & Liasoning");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(141, "option", 83);
        i0.ɵɵtext(142, "Travel & Tourism");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(143, "option", 84);
        i0.ɵɵtext(144, "Hardware /Software Providers");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(145, "option", 85);
        i0.ɵɵtext(146, "Real Estate and development");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(147, "option", 86);
        i0.ɵɵtext(148, "Media & Advertisement");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(149, "option", 87);
        i0.ɵɵtext(150, "Event Management");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(151, "option", 88);
        i0.ɵɵtext(152, "Corporate Services /professional services");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(153, "option", 89);
        i0.ɵɵtext(154, "Skill Development /Trainings & recruitments");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(155, "div", 13)(156, "label");
        i0.ɵɵtext(157, "Type");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(158, "select", 90)(159, "option", 15);
        i0.ɵɵtext(160, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(161, "option", 17);
        i0.ɵɵtext(162, "Public Limited");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(163, "option", 62);
        i0.ɵɵtext(164, "Private Limited");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(165, "option", 63);
        i0.ɵɵtext(166, "LLP");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(167, "option", 64);
        i0.ɵɵtext(168, "Non-Profit/NGO/Trust");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(169, "option", 65);
        i0.ɵɵtext(170, "Sole Proprietory");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(171, "option", 66);
        i0.ɵɵtext(172, "Independent 1 Person company");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(173, "option", 67);
        i0.ɵɵtext(174, "Partnership Firm");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(175, "div", 12)(176, "div", 13)(177, "label");
        i0.ɵɵtext(178, "Organization Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(179, "input", 91);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(180, "div", 13)(181, "label");
        i0.ɵɵtext(182, "Membership Plan");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(183, "select", 14);
        i0.ɵɵlistener("change", function MdrConnectComponent_Template_select_change_183_listener($event) { return ctx.selectPlan($event); });
        i0.ɵɵelementStart(184, "option", 15);
        i0.ɵɵtext(185, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(186, MdrConnectComponent_option_186_Template, 2, 0, "option", 92);
        i0.ɵɵtemplate(187, MdrConnectComponent_option_187_Template, 2, 0, "option", 93);
        i0.ɵɵtemplate(188, MdrConnectComponent_option_188_Template, 2, 0, "option", 94);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(189, "small", 95);
        i0.ɵɵtext(190, " \uD83C\uDF89 15% off for Premium & Classic Memberships for first 100 customers! ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(191, "div", 12)(192, "div", 13)(193, "label");
        i0.ɵɵtext(194, "GSTIN Holder / Valid Govt. Approved Registration Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(195, "select", 96);
        i0.ɵɵlistener("change", function MdrConnectComponent_Template_select_change_195_listener($event) { return ctx.gstinOwner($event); });
        i0.ɵɵelementStart(196, "option", 97);
        i0.ɵɵtext(197, "Yes");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(198, "div", 13)(199, "label");
        i0.ɵɵtext(200, "GSTIN / Registration Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(201, "input", 98);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(202, "div", 12)(203, "div", 13)(204, "label");
        i0.ɵɵtext(205, "Referred By");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(206, "select", 14);
        i0.ɵɵlistener("change", function MdrConnectComponent_Template_select_change_206_listener($event) { return ctx.refferedby($event); });
        i0.ɵɵelementStart(207, "option", 15);
        i0.ɵɵtext(208, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(209, "option", 99);
        i0.ɵɵtext(210, "By Member");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(211, "option", 100);
        i0.ɵɵtext(212, "By Franchisee");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(213, "option", 101);
        i0.ɵɵtext(214, "Self Found");
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(215, MdrConnectComponent_div_215_Template, 4, 0, "div", 102);
        i0.ɵɵtemplate(216, MdrConnectComponent_div_216_Template, 4, 0, "div", 102);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(217, "div", 12)(218, "div", 13)(219, "label");
        i0.ɵɵtext(220, "Promoter First Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(221, "input", 103);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(222, "div", 13)(223, "label");
        i0.ɵɵtext(224, "Last Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(225, "input", 104);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(226, "div", 12)(227, "div", 105)(228, "label");
        i0.ɵɵtext(229, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(230, "select", 106);
        i0.ɵɵlistener("change", function MdrConnectComponent_Template_select_change_230_listener($event) { return ctx.changeCountry($event); });
        i0.ɵɵelementStart(231, "option", 15);
        i0.ɵɵtext(232, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(233, MdrConnectComponent_option_233_Template, 2, 2, "option", 107);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(234, "div", 105)(235, "label");
        i0.ɵɵtext(236, "State");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(237, "select", 108);
        i0.ɵɵlistener("change", function MdrConnectComponent_Template_select_change_237_listener($event) { return ctx.changeState($event); });
        i0.ɵɵelementStart(238, "option", 15);
        i0.ɵɵtext(239, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(240, MdrConnectComponent_option_240_Template, 2, 2, "option", 107);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(241, "div", 105)(242, "label");
        i0.ɵɵtext(243, "City");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(244, "select", 109);
        i0.ɵɵlistener("change", function MdrConnectComponent_Template_select_change_244_listener($event) { return ctx.changeCity($event); });
        i0.ɵɵelementStart(245, "option", 110);
        i0.ɵɵtext(246, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(247, MdrConnectComponent_option_247_Template, 2, 2, "option", 107);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(248, "div", 105)(249, "label");
        i0.ɵɵtext(250, "PIN");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(251, "select", 111);
        i0.ɵɵlistener("change", function MdrConnectComponent_Template_select_change_251_listener($event) { return ctx.changePin($event); });
        i0.ɵɵelementStart(252, "option", 110);
        i0.ɵɵtext(253, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(254, MdrConnectComponent_option_254_Template, 2, 2, "option", 107);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(255, "div", 12)(256, "div", 13)(257, "label");
        i0.ɵɵtext(258, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(259, "input", 112);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(260, "div", 13)(261, "label");
        i0.ɵɵtext(262, "Landmark");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(263, "input", 113);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(264, "div", 12)(265, "div", 13)(266, "label");
        i0.ɵɵtext(267, "Mobile No.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(268, "div", 56);
        i0.ɵɵelement(269, "input", 114);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(270, "div", 13)(271, "label");
        i0.ɵɵtext(272, "Email ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(273, "input", 115);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(274, "div", 12)(275, "div", 116)(276, "small", 117);
        i0.ɵɵtext(277, "** Please enter the correct credentials, as they will be validated and linked to your membership account.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(278, "div", 118)(279, "button", 119);
        i0.ɵɵlistener("click", function MdrConnectComponent_Template_button_click_279_listener() { return ctx.showMakePayment(); });
        i0.ɵɵtext(280, " Make Payments ");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(281, MdrConnectComponent_div_281_Template, 3, 0, "div", 120);
        i0.ɵɵelementStart(282, "div", 121)(283, "p", 122);
        i0.ɵɵtext(284, "Terms & Condition All-Day MDR-Connect Membership");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(285, "p", 123);
        i0.ɵɵtext(286, " By creating a membership account or accessing or using our Services (described below), you are agreeing to enter into a legally binding contract with ");
        i0.ɵɵelementStart(287, "strong");
        i0.ɵɵtext(288, "All-Day MDR-Connect");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(289, " (even if you are using third party credentials or using our Services on behalf of a company). If you do not agree to this contract (\u201CContract\u201D or \u201CUser Agreement\u201D), do not create a membership account or access or otherwise use any of our Services. If you wish to terminate this Contract at any time, you can do so by closing your Membership account citing your reasons to dis-continue and surrendering your system passwords on a formal basis or for using our Services of our MDR-connect eco solution Platform ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(290, MdrConnectComponent_div_290_Template, 278, 0, "div", 124);
        i0.ɵɵelementStart(291, "div", 125)(292, "p", 126);
        i0.ɵɵlistener("click", function MdrConnectComponent_Template_p_click_292_listener() { return ctx.more(); });
        i0.ɵɵtext(293);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(294, "div", 127);
        i0.ɵɵelement(295, "input", 128);
        i0.ɵɵelementStart(296, "label", 129);
        i0.ɵɵtext(297, " I accept all the ");
        i0.ɵɵelementStart(298, "a", 130);
        i0.ɵɵtext(299, "terms and conditions");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(300, " of MDR-Connect. ");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(301, MdrConnectComponent_small_301_Template, 2, 0, "small", 131);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(302, "div", 132)(303, "button", 133);
        i0.ɵɵlistener("click", function MdrConnectComponent_Template_button_click_303_listener() { return ctx.RegisterMyOrg(); });
        i0.ɵɵtext(304, " Register my Organization ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(305, "tab", 134)(306, "form", 135);
        i0.ɵɵlistener("ngSubmit", function MdrConnectComponent_Template_form_ngSubmit_306_listener() { return ctx.onSubmitTrack(); });
        i0.ɵɵelementStart(307, "div", 12)(308, "div", 13)(309, "label", 136);
        i0.ɵɵtext(310, "Enter Mobile number:");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(311, "input", 137);
        i0.ɵɵelementStart(312, "button", 138);
        i0.ɵɵtext(313, " Track Application ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(314, MdrConnectComponent_div_314_Template, 9, 2, "div", 139);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(315, "tab", 140);
        i0.ɵɵtemplate(316, MdrConnectComponent_div_316_Template, 15, 5, "div", 124);
        i0.ɵɵtemplate(317, MdrConnectComponent_div_317_Template, 70, 31, "div", 124);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        let tmp_34_0;
        let tmp_35_0;
        let tmp_36_0;
        let tmp_46_0;
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("formGroup", ctx.MdrRegistration);
        i0.ɵɵadvance(18);
        i0.ɵɵproperty("ngIf", ctx.category === "0");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "0");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "0");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "0");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.category === "1");
        i0.ɵɵadvance(121);
        i0.ɵɵproperty("ngIf", ((tmp_34_0 = ctx.MdrRegistration.get("entityType")) == null ? null : tmp_34_0.value) != 32);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_35_0 = ctx.MdrRegistration.get("entityType")) == null ? null : tmp_35_0.value) != 32);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_36_0 = ctx.MdrRegistration.get("entityType")) == null ? null : tmp_36_0.value) == 32);
        i0.ɵɵadvance(27);
        i0.ɵɵproperty("ngIf", ctx.refferedBy === "bm");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.refferedBy === "bf");
        i0.ɵɵadvance(17);
        i0.ɵɵproperty("ngForOf", ctx.countryList);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.stateList);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.cityList);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.zipList);
        i0.ɵɵadvance(27);
        i0.ɵɵproperty("ngIf", ctx.showpayment === true);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.showmore == true);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.showmore == false ? "... read more" : "... read less");
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", ((tmp_46_0 = ctx.MdrRegistration.get("termsCheck")) == null ? null : tmp_46_0.touched) && ((tmp_46_0 = ctx.MdrRegistration.get("termsCheck")) == null ? null : tmp_46_0.invalid));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.MdrRegistration.invalid);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formGroup", ctx.trackForm);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("disabled", ctx.trackForm.invalid);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.trackResponse);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showCart === false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCart === true);
    } }, dependencies: [i8.NgForOf, i8.NgIf, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.CheckboxControlValueAccessor, i5.SelectControlValueAccessor, i5.RadioControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.FormGroupDirective, i5.FormControlName, i5.NgModel, i9.TabDirective, i9.TabsetComponent, i8.DecimalPipe], styles: [".login-field[_ngcontent-%COMP%] {\r\n  padding: 0 10px;\r\n}\r\n\r\nlabel.form-forget[_ngcontent-%COMP%] {\r\n  float: right;\r\n  color: #007bff;\r\n  font-size: 12px;\r\n  padding: 3px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], form-control[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n  height: 40px;\r\n}\r\n\r\n\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0 1rem;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.login-field[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\nbutton.reg-close[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  font-size: 30px;\r\n}\r\n\r\nbutton.btn.custom-btn[type=\"submit\"][_ngcontent-%COMP%] {\r\n  background: #ba080b;\r\n}\r\n\r\n.login-field[_ngcontent-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  min-width: 130px;\r\n}\r\n\r\n.highlight[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  color: #d49100;\r\n  text-align: center;\r\n  margin-top: 30px;\r\n  text-decoration: underline;\r\n  text-decoration-thickness: 3px;\r\n  text-underline-offset: 6px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.mdr-heading[_ngcontent-%COMP%] {\r\n  font-size: larger;\r\n  font-weight: 600;\r\n}\r\n\r\n.mdr-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  font-family: Arial, sans-serif;\r\n  font-size: x-small;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  border: 1px solid #999;\r\n  padding: 8px;\r\n  text-align: left;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #f2c100;\r\n}\r\n\r\n.section-header[_ngcontent-%COMP%] {\r\n  background-color: #f9f9f9;\r\n  font-weight: bold;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  \r\n}\r\n\r\n.mdrimg[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n}\r\n\r\n.readmore[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100%;\r\n\r\n  p {\r\n    text-decoration: black;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.makepayment[_ngcontent-%COMP%] {\r\n  p {\r\n    font-size: medium;\r\n    color: #d49100;\r\n    font-weight: 600;\r\n  }\r\n\r\n  border: 1px solid #f74a4a;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n  .nav-tabs > li > a {\r\n  font-size: 8.7px; \r\n}\r\n\r\n.rounded-border[_ngcontent-%COMP%] {\r\n  border: 1.5px solid #ccc; \r\n  border-radius: 8px;     \r\n  padding: 12px;          \r\n}\r\n\r\n.membership-checkout[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n}\r\n\r\n.membership-checkout[_ngcontent-%COMP%]   .btn-warning[_ngcontent-%COMP%] {\r\n  background-color: #ff9900;\r\n  border: none;\r\n  color: #fff;\r\n  font-weight: 500;\r\n}\r\n\r\n.membership-checkout[_ngcontent-%COMP%]   .btn-dark[_ngcontent-%COMP%] {\r\n  background-color: #000;\r\n  color: #fff;\r\n  font-weight: 600;\r\n}\r\n\r\n.cart-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 4px;\r\n  font-size: 14px;\r\n}\r\n\r\n.cart-summary[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\r\n  background-color: #c00;\r\n  border: none;\r\n  font-weight: 600;\r\n}\r\n\r\n.cart-summary[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  color: #990000;\r\n}\r\n\r\n.cart-summary[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\r\n  background-color: #a60000;\r\n}\r\n\r\n.custom-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: 10px 25px;\r\n  border-bottom: none;\r\n  height: 110px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n  flex: 0 0 auto;\r\n}\r\n\r\n.mdrimg[_ngcontent-%COMP%] {\r\n  height: 90px;\r\n  width: auto;\r\n}\r\n\r\n.title-wrapper[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  text-align: center;\r\n  line-height: 32px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.modal-title[_ngcontent-%COMP%]:first-child {\r\n  font-size: 34px;\r\n  font-weight: 700;\r\n  color: #000;\r\n  margin: 0;\r\n}\r\n\r\n.modal-title[_ngcontent-%COMP%]:nth-child(2) {\r\n  font-size: 28px;\r\n  font-weight: 600;\r\n  color: #7a7a7a;\r\n  margin: 0;\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 25px;\r\n  background: none;\r\n  border: none;\r\n  font-size: 32px;\r\n  cursor: pointer;\r\n  color: #575757;\r\n  z-index: 10;\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%]:hover {\r\n  color: #000;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .custom-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: flex-start;   \r\n    justify-content: space-between;\r\n    padding: 10px 12px;\r\n    gap: 10px;\r\n  }\r\n\r\n  .header-left[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 10px;\r\n    flex: 1;\r\n    min-width: 0;\r\n  }\r\n\r\n  .mdrimg[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    width: auto;\r\n  }\r\n\r\n  .title-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    line-height: 1.2;\r\n  }\r\n\r\n  .modal-title[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin: 0;\r\n  }\r\n\r\n  .modal-title.subtitle[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #7a8896;\r\n  }\r\n\r\n  .close-btn[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    line-height: 1;\r\n  }\r\n}\r\n\r\n\r\n@media (min-width: 769px) {\r\n\r\n  .custom-header[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    align-items: center;\r\n    padding: 15px 20px;\r\n  }\r\n\r\n  \r\n  .header-left[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .img-container[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .mdrimg[_ngcontent-%COMP%] {\r\n    height: 60px;   \r\n    width: auto;\r\n  }\r\n\r\n  \r\n  .title-wrapper[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n\r\n  .modal-title[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .modal-title.subtitle[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    color: #7a8896;\r\n    font-weight: 600;\r\n  }\r\n\r\n  \r\n  .close-btn[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    justify-self: end;\r\n  }\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdrConnectComponent, [{
        type: Component,
        args: [{ selector: 'app-mdr-connect', template: "<div class=\"modal-header custom-header\">\n\n    <div class=\"header-left\">\n        <div class=\"img-container\">\n            <img class=\"mdrimg\" src=\"../../assets/images/mdr-connect-ind.png\" />\n        </div>\n\n        <div class=\"title-wrapper\">\n            <h4 class=\"modal-title\">MDR-Connect</h4>\n            <h4 class=\"modal-title subtitle\">Connecting Businesses</h4>\n        </div>\n    </div>\n\n    <button type=\"button\" class=\"close-btn\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n\n</div>\n\n<div class=\"modal-body\">\n    <tabset>\n        <tab heading=\"Registration\">\n            <form [formGroup]=\"MdrRegistration\" novalidate>\n\n                <div class=\"form-row\">\n\n                    <div class=\"form-group col-md-6\">\n                        <label>Category</label>\n                        <select class=\"form-control\" (change)=\"selectCategory($event)\">\n                            <option value=\"\">Select</option>\n                            <option value=\"0\">Product Based</option>\n                            <option value=\"1\">Service Based</option>\n                        </select>\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                        <label>I am</label>\n                        <select class=\"form-control\" formControlName=\"entityType\">\n                            <option value=\"\">Select</option>\n\n                            <!-- For product based -->\n                            <option *ngIf=\"category === '0' \" value=\"1\">Manufacturer/Producer</option>\n                            <option *ngIf=\"category === '0' \" value=\"2\">Distributor/CNF</option>\n                            <option *ngIf=\"category === '0' \" value=\"3\">Retailer/Wholeseller</option>\n                            <option *ngIf=\"category === '0' \" value=\"4\">Pharma & Medicos</option>\n\n                            <!-- For service based -->\n                            <option *ngIf=\"category === '1' \" value=\"5\">HoReCa (Hotel /Restaurant/Caterer)</option>\n                            <option *ngIf=\"category === '1' \" value=\"7\">Exporter/Importer</option>\n                            <option *ngIf=\"category === '1' \" value=\"8\">School/University</option>\n                            <option *ngIf=\"category === '1' \" value=\"9\">Doctors/Clinics/Hospitals/Labs</option>\n                            <option *ngIf=\"category === '1' \" value=\"10\">Fitness & Health Organization</option>\n                            <option *ngIf=\"category === '1' \" value=\"11\">Dropship Intermediatory</option>\n                            <option *ngIf=\"category === '1' \" value=\"12\">Productivity Tool provider</option>\n                            <option *ngIf=\"category === '1' \" value=\"13\">Contact Centres</option>\n                            <option *ngIf=\"category === '1' \" value=\"14\">Logistic & 3PL Providers</option>\n                            <option *ngIf=\"category === '1' \" value=\"15\">HoReCa (Hotel /Restaurant/Caterer)</option>\n                            <option *ngIf=\"category === '1' \" value=\"16\">Automobile Service Provider Org</option>\n                            <option *ngIf=\"category === '1' \" value=\"17\">Recruitment And Skill Development Org</option>\n                            <option *ngIf=\"category === '1' \" value=\"18\">Travel & Tour Operators</option>\n                            <option *ngIf=\"category === '1' \" value=\"19\">Facility Management Service Provider</option>\n                            <option *ngIf=\"category === '1' \" value=\"20\">Real Estate Developers and Services Org\n                            </option>\n                            <option *ngIf=\"category === '1' \" value=\"21\">Lisoning Organization</option>\n                            <option *ngIf=\"category === '1' \" value=\"22\">Business Consulting Organization</option>\n                            <option *ngIf=\"category === '1' \" value=\"23\">CA & Auditing Organization</option>\n                            <option *ngIf=\"category === '1' \" value=\"24\">Advertisement & Medi Firm</option>\n                            <option *ngIf=\"category === '1' \" value=\"25\">Hardware Seller and Maintenance Organization\n                            </option>\n                            <option *ngIf=\"category === '1' \" value=\"26\">Softwae Development and Maintenece\n                                Organization</option>\n                            <option *ngIf=\"category === '1' \" value=\"27\">Office Furniture and Infrastructure\n                                Organization</option>\n                            <option *ngIf=\"category === '1' \" value=\"28\">Event Management Organization</option>\n                            <option *ngIf=\"category === '1' \" value=\"29\">Banking And Financial Organization</option>\n                            <option *ngIf=\"category === '1' \" value=\"30\">Other Corporate Service Organization</option>\n                            <option *ngIf=\"category === '1' \" value=\"31\">PSU/Govt. Organization</option>\n                            <option *ngIf=\"category === '1' \" value=\"32\">NGO/Trust</option>\n                            <option *ngIf=\"category === '1' \" value=\"33\">Spiritual & Mental wellness Organizations\n                            </option>\n                            <option *ngIf=\"category === '1' \" value=\"34\">Investment Organizations</option>\n                        </select>\n\n                    </div>\n\n                </div>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label>Registering as</label>\n                        <select (change)=\"onSelectRegisteringAs($event)\" class=\"form-control\"\n                            formControlName=\"registeringAs\">\n                            <option value=\"\">Select</option>\n                            <option value=\"s\">Seller</option>\n                            <option value=\"b\">Buyer</option>\n                            <option value=\"sb\">Seller & Buyer both</option>\n                        </select>\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                        <label>SKUs Listing Pack</label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"decrement()\">\u2212</button>\n                            </div>\n\n                            <input class=\"form-control text-center\" formControlName=\"skusValue\" readonly />\n\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"increment()\">+</button>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label>Industry</label>\n                        <select class=\"form-control\" formControlName=\"industry\">\n                            <option value=\"\">Select</option>\n                            <option value=\"1\">Wine & Liquor</option>\n                            <option value=\"2\">Hotel Restaurant & Catering</option>\n                            <option value=\"3\">FMCG/Kirana & Grocery</option>\n                            <option value=\"4\">Fashion /Beauty Products /Footwear</option>\n                            <option value=\"5\">Electronics /Consumer Appliances</option>\n                            <option value=\"6\">Furnitures ( Office /Hospital/Home)</option>\n                            <option value=\"7\">Pharma & Medicos</option>\n                            <option value=\"8\">Home Decors & Office Furnishings</option>\n                            <option value=\"9\">Medicine (Human/Pets)</option>\n                            <option value=\"10\">Facility Management Services</option>\n                            <option value=\"11\">Farming / Agro And Agro Care</option>\n                            <option value=\"12\">Automobiles & Vehicles</option>\n                            <option value=\"13\">Health Care /Clinics /Hospitals</option>\n                            <option value=\"14\">Office /Home Infrastructure Services</option>\n                            <option value=\"15\">Automobile Spare Parts</option>\n                            <option value=\"16\">Kitchen & Dining</option>\n                            <option value=\"17\">Electrical & Lighting</option>\n                            <option value=\"18\">Entertainment & Mobility</option>\n                            <option value=\"19\">Sanitary Paints /Cements and Infra Furnishings</option>\n                            <option value=\"20\">Logistic and transportation</option>\n                            <option value=\"21\">Banking /Finance and Accounting</option>\n                            <option value=\"22\">Business Consulting & Liasoning</option>\n                            <option value=\"23\">Travel & Tourism</option>\n                            <option value=\"24\">Hardware /Software Providers</option>\n                            <option value=\"25\">Real Estate and development</option>\n                            <option value=\"26\">Media & Advertisement</option>\n                            <option value=\"27\">Event Management</option>\n                            <option value=\"28\">Corporate Services /professional services</option>\n                            <option value=\"29\">Skill Development /Trainings & recruitments</option>\n                        </select>\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                        <label>Type</label>\n                        <select class=\"form-control\" formControlName=\"companyType\">\n                            <option value=\"\">Select</option>\n                            <option value=\"1\">Public Limited</option>\n                            <option value=\"2\">Private Limited</option>\n                            <option value=\"3\">LLP</option>\n                            <option value=\"4\">Non-Profit/NGO/Trust</option>\n                            <option value=\"5\">Sole Proprietory</option>\n                            <option value=\"6\">Independent 1 Person company</option>\n                            <option value=\"7\">Partnership Firm</option>\n                        </select>\n                    </div>\n\n                </div>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label>Organization Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"organizationName\">\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                        <label>Membership Plan</label>\n                        <select (change)=\"selectPlan($event)\" class=\"form-control\">\n                            <option value=\"\">Select</option>\n                            <option *ngIf=\"MdrRegistration.get('entityType')?.value != 32\" value=\"MDR03\">Premium\n                            </option>\n                            <option *ngIf=\"MdrRegistration.get('entityType')?.value != 32\" value=\"MDR02\">Classic\n                            </option>\n                            <option *ngIf=\"MdrRegistration.get('entityType')?.value == 32\" value=\"MDR01\">Standard\n                            </option>\n                        </select>\n\n                        <!-- Notice -->\n                        <small class=\"text-success d-block mt-1\">\n                            \uD83C\uDF89 15% off for Premium & Classic Memberships for first 100 customers!\n                        </small>\n                    </div>\n                </div>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label>GSTIN Holder / Valid Govt. Approved Registration Number</label>\n                        <select disabled (change)=\"gstinOwner($event)\" class=\"form-control\">\n                            <!-- <option value=\"\">Select</option> -->\n                            <option value=\"true\">Yes</option>\n                            <!-- <option value=\"false\">No</option> -->\n                        </select>\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                        <label>GSTIN / Registration Number</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"gstin\">\n                    </div>\n                </div>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label>Referred By</label>\n                        <select (change)=\"refferedby($event)\" class=\"form-control\">\n                            <option value=\"\">Select</option>\n                            <option value=\"bm\">By Member</option>\n                            <option value=\"bf\">By Franchisee</option>\n                            <option value=\"sf\">Self Found</option>\n                        </select>\n                    </div>\n\n                    <div *ngIf=\"refferedBy === 'bm' \" class=\"form-group col-md-6\">\n                        <label>Member Id</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"memberid\">\n                    </div>\n\n                    <div *ngIf=\"refferedBy === 'bf' \" class=\"form-group col-md-6\">\n                        <label>Franchisee Id</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"franchiseeid\">\n                    </div>\n                </div>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label>Promoter First Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"promoterFirstName\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label>Last Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"promoterLastName\">\n                    </div>\n                </div>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-3\">\n                        <label>Country</label>\n                        <select class=\"form-control\" formControlName=\"Country\" (change)=\"changeCountry($event)\">\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let country of countryList\" [value]=\"country.CNTRY_ID\">{{country.CNTRY_NM}}\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-md-3\">\n                        <label>State</label>\n                        <select formControlName=\"State\" class=\"form-control\" (change)=\"changeState($event)\">\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let state of stateList\" [value]=\"state.STATE_ID\">{{state.STATE_NM}}</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-md-3\">\n                        <label>City</label>\n                        <select formControlName=\"City\" class=\"form-control\" (change)=\"changeCity($event)\">\n                            <option selected value=\"\">Select</option>\n                            <option *ngFor=\"let city of cityList\" [value]=\"city.CITY_ID\">{{city.CITY_NM}}</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-md-3\">\n                        <label>PIN</label>\n                        <select formControlName=\"PinCode\" class=\"form-control\" (change)=\"changePin($event)\">\n                            <option selected value=\"\">Select</option>\n                            <option *ngFor=\"let zip of zipList\" [value]=\"zip.Id\">{{zip.Value}}</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label>Address</label>\n                        <input type=\"address\" class=\"form-control\" formControlName=\"address\">\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                        <label>Landmark</label>\n                        <input type=\"address\" class=\"form-control\" formControlName=\"landmark\">\n                    </div>\n                </div>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label>Mobile No.</label>\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"mobile\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                        <label>Email ID</label>\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n                    </div>\n                </div>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-12\">\n                        <small class=\"text-danger\">** Please enter the correct credentials, as they will be validated\n                            and linked to your membership account.</small>\n\n                        <div class=\"d-flex align-items-center mb-3 mt-2\">\n                            <button (click)=\"showMakePayment()\" type=\"button\" class=\"btn btn-warning\"\n                                style=\"position: relative;\">\n                                Make Payments\n                            </button>\n                        </div>\n\n                        <div *ngIf=\"showpayment === true\" class=\"makepayment mb-3\">\n                            <p class=\"\">Register your organization Directly and once you get an officai intimation of\n                                your\n                                membership with your membership id than you can pay annaul fee & other pending payments\n                                if any at the Payments section</p>\n                        </div>\n\n                        <div class=\"rounded-border\">\n                            <p class=\"mt-3 mdr-heading b-2\">Terms & Condition All-Day MDR-Connect Membership</p>\n\n                            <p class=\"mt-3 mb-3\">\n                                By creating a membership account or accessing or using our Services (described below),\n                                you are\n                                agreeing to enter into a legally binding contract with <strong>All-Day\n                                    MDR-Connect</strong> (even if\n                                you are using\n                                third party credentials or using our Services on behalf of a company). If you do not\n                                agree to this\n                                contract (\u201CContract\u201D or \u201CUser Agreement\u201D), do not create a membership account or access\n                                or otherwise\n                                use any of our Services. If you wish to terminate this Contract at any time, you can do\n                                so by\n                                closing your Membership account citing your reasons to dis-continue and surrendering\n                                your system\n                                passwords on a formal basis or for using our Services of our MDR-connect eco solution\n                                Platform\n                            </p>\n\n                            <div *ngIf=\"showmore == true\">\n\n                                <p class=\"mt-3 mb-3\">\n                                    Services\n                                </p>\n\n                                <p class=\"mt-3 mb-3\">\n                                    This Contract applies to All-Day MDR-Connect, and other MDR-Connect related apps for\n                                    using our\n                                    Shoppenation partner Solution or AD-Connect Solution and other services that state\n                                    that\n                                    they are\n                                    offered under this Contract (\u201CServices\u201D), including the offsite collection of data\n                                    for\n                                    those\n                                    Services, such as via our ads or any of our services plugins.\n                                </p>\n\n                                <p class=\"mt-3 mdr-heading b-2\">MDR-Connect</p>\n\n                                <p class=\"mt-3 mb-3\">\n                                    You are entering into this Contract with MDR-Connect (also referred to as \u201Cwe\u201D and\n                                    \u201Cus\u201D).\n                                </p>\n\n                                <p class=\"mt-3 mb-3\">\n                                    As a Member of our Services, the collection, use, and sharing of your personal &amp;\n                                    business data\n                                    is subject to our\n                                    <span style=\"color:blue; text-decoration:underline; cursor:default;\">Data Protection\n                                        and\n                                        Privacy\n                                        Policy</span>.\n                                    You acknowledge and have read our\n                                    <span style=\"color:blue; text-decoration:underline; cursor:default;\">Data Protection\n                                        and\n                                        Privacy\n                                        Policy</span>.\n                                </p>\n\n                                <ul class=\"mt-3 mb-3 ml-3\" style=\"list-style-type: upper-roman;\">\n\n                                    <!-- I -->\n                                    <li>\n                                        <strong class=\"ml-3 mb-2 mt-2\">Platform Membership</strong>\n                                        <p class=\"mt-2 ml-3 mb-2\">This Contract applies to Members of the platform with\n                                            unique\n                                            Membership identity .</p>\n                                        <p class=\"mt-2 ml-3 mb-2\">When you register and join the MDR-Connect and on\n                                            approval\n                                            by our back\n                                            office, you become a \u201CMember\u201D. You will have an obligation to pay your\n                                            annual\n                                            membership fee\n                                            as per your selected plan within 10 (Ten) days after getting an approval\n                                            from\n                                            our back\n                                            office. As a member your membership will be carried forward to avail\n                                            MDR-Connect\n                                            Platform\n                                            Membership year on year with subscription of your annual membership fee.\n                                        </p>\n                                        <p class=\"mt-2 ml-3 mb-2\">You can be a seller, buyer or seller or Buyer both in\n                                            our\n                                            platform for\n                                            availing an e-commerce store-based services at our MDR-Connect Home store or\n                                            at\n                                            our member\n                                            stores available at MDR-connect Marketplace. </p>\n                                        <p class=\"mt-2 ml-3 mb-2\"><strong>As a Seller:</strong>\n                                            You will have an obligation to buy minimum one set of 5 SKUs (Five) Online\n                                            Shelf\n                                            space. You\n                                            have an option to keep your SKUs on a Platform (MDR-Connect) Home Store or\n                                            you\n                                            can own your\n                                            own online store as per your service selection. for certain Verticals (Like\n                                            Real\n                                            Estate\n                                            Property sale listings, Automobiles Vehicles sales listing and Lage Medical\n                                            Equipment Sales\n                                            listing) the SKUs of the member organizations will be listed and will be\n                                            having\n                                            an online\n                                            commerce only through MDR-Connect Home Store. As a seller and opted for your\n                                            own\n                                            online\n                                            store you will also be provided an access to MDR-Connect eCommerce\n                                            functionality\n                                            module of\n                                            the platform. The Platform also deduct a transaction fee for seller which\n                                            are\n                                            mentioned in\n                                            our membership plan </p>\n                                        <p class=\"mt-2 ml-3 mb-2\"><strong>As a Buyer:</strong>\n                                            You will have an obligation to see the credentials of the Sellers SKUs on\n                                            seller\n                                            online\n                                            store in particular about the authenticity /genuineness certifications and\n                                            supporting\n                                            information about the warranties and product durability as MDR-Connect takes\n                                            no\n                                            responsibility and assumes no liability for any certifications or supporting\n                                            information and\n                                            serviceability provided by member online store. As a buyer if you wish to\n                                            use\n                                            the Escrow\n                                            account settlement provided by the platform than you can initiate a process\n                                            to\n                                            submit your\n                                            contract signed with the buyer and on buyer-seller agreement and their\n                                            contract\n                                            you can\n                                            avail the facility of escrow settlement Process. Please see our <span\n                                                style=\"color:blue; text-decoration:underline; cursor:default;\">Escrow\n                                                Settlement\n                                                Process</span> for more detail. You have an obligation to pay a platform\n                                            convenience\n                                            fee as per your membership plan on the transaction which will be added over\n                                            and\n                                            above the\n                                            store sale invoice. </p>\n                                        <p class=\"mt-2 ml-3 mb-2\"><strong>Seller &amp; Buyer both:</strong>\n                                            You can be seller and Buyer both and can avail the membership benefits on\n                                            sellers and\n                                            buyers\u2019 transactional fees along with keeping your SKU\u2019s on MDR-Connect\n                                            Store or\n                                            on your\n                                            Individual Store </p>\n                                    </li>\n\n                                    <!-- II -->\n                                    <li>\n                                        <strong class=\"ml-3 mt-2 mb-2\">Changes in Contract</strong>\n                                        <p class=\"mt-2 ml-3 mb-2\">\n                                            We may make changes to this Contract.\n                                            We may modify this Contract, from time to time. If required by applicable\n                                            law or\n                                            we make\n                                            material changes to this Contract, we will provide you notice through our\n                                            Services, or by\n                                            other means, to provide you the opportunity to review the changes before\n                                            they\n                                            become\n                                            effective. We agree that changes cannot be retroactive. If you object to any\n                                            of\n                                            these\n                                            changes, you may choose to withdraw your membership and close an account.\n                                            Your\n                                            continued use\n                                            of our Services after we publish or send a notice about our changes to these\n                                            terms means\n                                            that you are consenting to the updated terms as of their effective date.\n                                        </p>\n                                    </li>\n\n                                    <!-- III -->\n                                    <li>\n                                        <strong class=\"ml-3\">Platform Membership fees &amp; Services based\n                                            Payments</strong>\n                                        <ul class=\"mb-3 ml-3\" style=\"list-style-type: lower-alpha;\">\n                                            <li>You\u2019ll honor your payment obligations and you are okay with us storing\n                                                your\n                                                payment\n                                                information. You understand that there may be fees and taxes that are\n                                                added\n                                                to our\n                                                prices.</li>\n                                            <li>Refunds are subject to our policy, and we may modify our prices\n                                                prospectively.</li>\n                                            <li>If you are registering to our membership and other opted services, you\n                                                agree\n                                                to pay us\n                                                the applicable fees and taxes as per your membership type subscribed and\n                                                services based\n                                                on fees and on approval of your membership you agree to the below\n                                                mentioned\n                                                <span\n                                                    style=\"color:blue; text-decoration:underline; cursor:default;\">Members\n                                                    &\n                                                    Your Obligations</span> mentioned below. Failure to pay membership\n                                                and\n                                                services fees\n                                                will\n                                                result in the termination of your membership. Also, you agree that.\n                                            </li>\n                                            <li>Your purchase may be subject to Special foreign land fees or differences\n                                                in\n                                                prices based\n                                                on location/Geography (e.g., exchange rates and geography market\n                                                multiplier\n                                                factor).\n                                            </li>\n                                            <li>We may store and continue billing your Preferred payment method (e.g.,\n                                                credit card /UPI\n                                                or debit Card), even after it has expired, to avoid interruptions in\n                                                your\n                                                paid Services\n                                                and to use it to pay for other Services you may buy. You may update or\n                                                change your\n                                                payment method.</li>\n                                            <li>We may modify our Annual Membership fee or any of our service prices\n                                                effective\n                                                prospectively upon reasonable notice to the extent allowed under the\n                                                law.\n                                            </li>\n                                            <li>All of your Membership Subscription are subject to Membership policy.\n                                            </li>\n                                            <li>We may calculate taxes payable by you based on the billing of the\n                                                services\n                                                opted by you\n                                                from the platform </li>\n                                            <li>You can get a copy of your Platform invoice through your Shoppenation\n                                                MDR-Connect\n                                                account settings under \u201C<span\n                                                    style=\"color:blue; text-decoration:underline; cursor:default;\">Member\n                                                    Account\n                                                    Purchase Management</span>\u201D.</li>\n                                        </ul>\n                                    </li>\n\n                                    <!-- IV -->\n                                    <li>\n                                        <strong class=\"ml-3 mb-2 mt-2\">Notices &amp; Messages to Members of the\n                                            Platforms</strong>\n                                        <ul class=\"mb-2 mt-2 ml-3\" style=\"list-style-type: lower-alpha;\">\n                                            <li class=\"mb-2\">\n                                                we will provide notices and messages to you in the following ways: (1)\n                                                within the\n                                                Platform or (2) sent to the contact information you provided us (e.g.,\n                                                email, mobile\n                                                number, physical address).\n                                            </li>\n                                            <li class=\"mb-2\">You agree to keep your contact information up to date.</li>\n                                        </ul>\n                                    </li>\n\n                                    <!-- V -->\n                                    <strong class=\"ml-3 mt-2 mb-2\">You Agree as a Member &amp; Your Obligations</strong>\n                                    <ul class=\"mb-2 mt-2 ml-3\" style=\"list-style-type: lower-alpha;\">\n\n                                        <!-- a -->\n                                        <strong>For Membership Eligibility</strong>\n                                        <p class=\"ml-3 mt-2 mb-2\">Here are some promises and you agree to following\n                                            terms\n                                            and\n                                            conditions as a member of MDR-Connect </p>\n                                        <ul class=\"ml-3\" style=\"list-style-type: lower-roman;\">\n                                            <li>You\u2019re eligible to enter into this Contract and you are at least our\n                                                \u201CMinimum\n                                                Age.\u201D</li>\n                                            <li>The Services are not for use by anyone under the age of 18.</li>\n                                            <li>you will have one Membership account for one business, which must be in\n                                                your\n                                                organization name and you must be registered as Promoter or Director or\n                                                Partner\n                                                or Sole proprietor or a key management person of an organization</li>\n                                            <li>your organization is not already restricted by MDR-Connect from using\n                                                the\n                                                Services. Creating an account with false information is a violation of\n                                                our\n                                                terms, including accounts registered on behalf of others or persons\n                                                under\n                                                the\n                                                age of 18.</li>\n                                            <li>You will be doing a commerce activity for your products and services\n                                                listed\n                                                on\n                                                SKUs from platform marketplace only and for keeping your business\n                                                interest\n                                                and\n                                                money secured as per mutual business contracts between member\n                                                organizations,\n                                                platform will be providing a transaction on escrow-based settlements\n                                            </li>\n                                            <li>\n                                                This platform is also a community building platform and we believe in\n                                                our\n                                                ancient philosophy of:\n                                                <ul class=\"mb-3 ml-3\" style=\"list-style-type: lower-alpha;\">\n                                                    <li>\"<strong>VasudhaIva Kutumbakam</strong>\u201D and wish to have life\n                                                        time\n                                                        connection and business relationships. So, core of our community\n                                                        building is based on Referral based businesses and every member\n                                                        enrolled\n                                                        with us should make a promise to provide referrals and to\n                                                        encourage\n                                                        this\n                                                        referral-based community building. To Promote the same platform\n                                                        takes\n                                                        initiative to provide a discount of 100% Annual Membership Fee\n                                                        /Pro-rata\n                                                        basis discounting in Annual fee with following Annual referrals\n                                                        provided\n                                                        by a member in combination of below parameters to promote\n                                                        businesses\n                                                        of\n                                                        fellow members </li>\n                                                    <li>\n                                                        <strong>Referral to build Business Community Every Member is\n                                                            expected to\n                                                            Provide following in combinations to avail 100% Annual fee\n                                                            exemption</strong>\n                                                        <ul class=\"mb-3 ml-3\" style=\"list-style-type: lower-roman;\">\n                                                            <li>20(Twenty or more) member Inductions Annually to the\n                                                                platform\n                                                            </li>\n                                                            <li>50 (Fifty) Posts of Other stores Sharing to a group of 5\n                                                                or\n                                                                More\n                                                                Members/Outside Platform community Annually </li>\n                                                            <li>50 (Fifty) Marketplace Stores Sharing to a Group of 5 or\n                                                                More\n                                                                members for promoting member stores for Sales & revenue\n                                                                growth\n                                                                Annually </li>\n                                                        </ul>\n                                                    </li>\n                                                </ul>\n                                            </li>\n                                            <li>You and Your organization agrees and make promise that you will publish\n                                                content\n                                                from Platform posts management for member organizations and are bound by\n                                                the\n                                                laws of the land following media display Content restrictions or\n                                                limitations\n                                                imposed by the\n                                                Nations/States/Geographies/locations/Religions/communities\n                                                based/\n                                                Prohibited Contents for Public Interest/ Third Parties Prohibited\n                                                sectors\n                                                based\n                                                Contents or contents which may promote Tabacco/Alcohol /Drugs /Act of\n                                                terror\n                                                /\n                                                Act of Sex and Pornographic material including sex Toys /child abuse &\n                                                Slavery\n                                                /Bonded Labour/Non-permissible Health Drinks and Health care Products\n                                                /Vulgar\n                                                and abusive languages and Slangs hurting person or group of person\n                                                /Women &\n                                                Child abuse and Promoting illegal Products and activities as mentioned\n                                                by\n                                                the\n                                                Laws as illegal products & activities which includes arms and\n                                                ammunitions\n                                                and\n                                                anti-national content and third party copyright contents and\n                                                images/Logos\n                                                /Trademarks without permissions . In addition, MDR-Connect in its sole\n                                                and\n                                                absolute discretion may elect to not exhibit or present any Content\n                                                which\n                                                they\n                                                may think is not relevant to display publicly on the screens or on\n                                                sectors-based\n                                                screens Promotion or other content at any location where the content is\n                                                determined not to be appropriate or permitted in consultation with\n                                                location\n                                                or\n                                                other Third-Party locations that are set forth </li>\n                                            <li>\n                                                Member and Member Organization registered with our Platform agrees that\n                                                MDR-Connect will not be held responsible and accountable for any\n                                                legality/compliances of the displayed content and member /his or her\n                                                organization listed will remain solely responsible for any liability\n                                                arising\n                                                from the displayed Content or Advertising, including but not limited to\n                                                liability arising from any laws relating to obscenity, defamation, trade\n                                                libel,\n                                                the right of publicity or likeness, the right of or to privacy, any laws\n                                                relating to intellectual property, and any laws relating to advertising.\n                                                If\n                                                any\n                                                Advertiser Content or Advertising is rejected by MDR-Connect or a\n                                                location,\n                                                we\n                                                will promptly replace the Member Organization Content.\n                                                <ul class=\"mb-3 ml-3\" style=\"list-style-type: lower-alpha;\">\n                                                    <li>Members organization may offer their own products and services\n                                                        through\n                                                        our Services, and we aren\u2019t responsible for those Members\n                                                        organizations\n                                                        activities and serviceability.</li>\n                                                    <li>Others\u2019 Members Content: By using the Platform Services, you may\n                                                        encounter content or other information that might be inaccurate,\n                                                        incomplete, delayed, misleading, illegal, offensive/obscene, or\n                                                        otherwise harmful. You agree that we are not responsible for\n                                                        content\n                                                        or\n                                                        other information made available through or within the Services\n                                                        by\n                                                        others, including Members. While we apply automated tools to\n                                                        review\n                                                        much\n                                                        of the content and other information presented in the Services,\n                                                        we\n                                                        cannot always prevent misuse of our Services, and you agree that\n                                                        we\n                                                        are\n                                                        not responsible for any such misuse. You also acknowledge the\n                                                        risk\n                                                        that\n                                                        others may share inaccurate or misleading information about you\n                                                        or\n                                                        your\n                                                        organization, and that you or your organization may be\n                                                        mistakenly\n                                                        associated with content about others, for example, when we let\n                                                        connections and followers know you or your organization were\n                                                        mentioned\n                                                        in the news. </li>\n                                                    <li>We\u2019ll honor the choices you make about who gets to see your\n                                                        content,\n                                                        including how it can be used for referring and sharing to others\n                                                        and\n                                                        for\n                                                        your business promotions.</li>\n                                                </ul>\n                                            </li>\n\n                                            <li>You agree and promise to only provide content and other information that\n                                                you\n                                                have the right to share and that your MDR-Connect profile will be\n                                                truthful.\n                                            </li>\n\n                                            <li>You agree that any share information/Content on our Services shared by\n                                                you\n                                                can\n                                                be seen, copy, saved, Re-forwaded and processed to be re- used as an\n                                                information\n                                                by other members or non-members of MDR-Connect.</li>\n\n                                            <li>Our Services allow sharing of information (including content) in many\n                                                ways,\n                                                such\n                                                as through your profile, posts, articles, group posts, links to news\n                                                articles, ,\n                                                messages, and In-person Responses and Messages. Depending on the feature\n                                                and\n                                                choices you make, information that you share may be seen by other\n                                                Members,\n                                                or\n                                                others (on or off of the Services). </li>\n\n                                            <li>You agree and grant MDR-Connect and our affiliates the following\n                                                non-exclusive\n                                                license to the content and other information you provide (e.g., share,\n                                                post,\n                                                upload, and/or otherwise submit) to our Services:</li>\n\n                                            <li>You agree and grant MDR-Connect worldwide, transferable and\n                                                sub-licensable\n                                                right\n                                                to use, copy, modify, distribute, publicly perform and display, host,\n                                                and\n                                                process your content and other information you submit on our posts\n                                                management\n                                                and communication desk module without any further consent, notice and/or\n                                                compensation to you or others </li>\n\n                                            <li>We will not include your content in advertisements for the products and\n                                                services\n                                                of third parties to others without your separate consent (including\n                                                sponsored\n                                                content). However, without compensation to you or others, ads may be\n                                                served\n                                                near\n                                                your content and other information, and your platform actions may be\n                                                visible\n                                                and\n                                                included with ads, as noted in the Data Protection and Privacy Policy.\n                                                If\n                                                you\n                                                use a Service feature, we may mention that with your name or photo to\n                                                promote\n                                                that feature within our Services, subject to your choice of settings\n                                            </li>\n\n                                            <li>You agree that we will provide notices and messages to you in the\n                                                following\n                                                ways: (1) within the Services or (2) sent to the contact information you\n                                                provided us (e.g., email, mobile number, physical address). You agree to\n                                                keep\n                                                your contact information up to date.</li>\n\n                                            <li>MDR-Connect Service Availability: You agree to the following\n                                                <ul class=\"mb-3 ml-3\" style=\"list-style-type: lower-alpha;\">\n                                                    <li>MDR-Connect may change or limit the availability of some\n                                                        features,\n                                                        or\n                                                        end any Services of the platform.</li>\n\n                                                    <li>We may change, suspend or discontinue any of our Services. We\n                                                        may\n                                                        also\n                                                        limit the availability of features, content and other\n                                                        information so\n                                                        that they are not available to all Members (e.g., by country or\n                                                        by\n                                                        subscription-based access).</li>\n\n                                                    <li>We don\u2019t promise to store or show (or keep showing) any\n                                                        information\n                                                        (including content) that you\u2019ve shared. MDR-Connect I is not a\n                                                        storage\n                                                        service so we will not be responsible for your content storage.\n                                                        You\n                                                        agree that we have no obligation to store, maintain or provide\n                                                        you a\n                                                        copy of any content or other information that you or others\n                                                        provide,\n                                                        except to the extent required by applicable law and as noted in\n                                                        our\n                                                        Data\n                                                        Protection and Privacy Policy.</li>\n\n                                                    <li>You agrees that MDR-Connect platform does not guarantee you the\n                                                        availability of its platform services 100% of the time or does\n                                                        not\n                                                        guarantee an error free / without malfunctions services or any\n                                                        of\n                                                        the\n                                                        Platform services are prevented, in whole or in part, from\n                                                        performing\n                                                        any required functional obligations or condition hereunder, or\n                                                        from\n                                                        exercising its rights by reason or as a result of any force\n                                                        majeure\n                                                        than\n                                                        MDR-Connect Will be excused from performing such obligations or\n                                                        conditions due to a reason such as acts of God, acts of\n                                                        government,\n                                                        acts\n                                                        of terrorism, strikes, lockouts, or other industrial\n                                                        disturbances,\n                                                        acts\n                                                        of a public enemy, blockades, wars, insurrections or riots,\n                                                        terrorism,\n                                                        epidemics, landslides, fires, storms, floods, explosions,\n                                                        technological\n                                                        failures, breaches, hacks, system vulnerabilities or\n                                                        incompatibilities,\n                                                        or other similar causes beyond the control of such Social ,\n                                                        Technological and environmental conditions .</li>\n\n                                                </ul>\n                                            </li>\n\n                                            <li>You will keep your password for platforms applications a secret\n                                                <ul class=\"mb-3 ml-3\" style=\"list-style-type: lower-alpha;\">\n                                                    <li>You will not share your account with anyone else outside your\n                                                        organization resources and will follow our policies and the law.\n                                                        You\n                                                        will be given a single user access but on request you will be\n                                                        provided a\n                                                        module to generate role based multi-user access. </li>\n                                                    <li>Members are account holders. You agree to: (1) protect against\n                                                        wrongful\n                                                        access to your account (e.g., use a strong password and keep it\n                                                        confidential); (2) not share or transfer your account or any\n                                                        part of\n                                                        it\n                                                        (e.g., sell or transfer the personal data of others by\n                                                        transferring\n                                                        your\n                                                        connections); and (3) follow the law, our list of Dos and Don\u2019ts\n                                                        (below), and <span\n                                                            style=\"color:blue; text-decoration:underline; cursor:default;\">Our\n                                                            Social\n                                                            Community Membership Policy</span> You are responsible\n                                                        for anything that happens through your account unless you close\n                                                        it\n                                                        or\n                                                        report misuse</li>\n                                                    <li>As between you and others (including your employers /partners or\n                                                        subsidiaries), your account belongs to you. However, if the\n                                                        Services\n                                                        were made available by becoming members by another party for you\n                                                        to\n                                                        use\n                                                        (e.g., your parent company or your organization Mentor or your\n                                                        non-working Director as your stakeholder or employer), the party\n                                                        having\n                                                        membership registered under his name for such Service has the\n                                                        right\n                                                        to\n                                                        control access to and get reports on your use of such paid\n                                                        Membership\n                                                        Service; and they have the rights to your Account personal and\n                                                        business\n                                                        data of registered organization by virtue of membership of\n                                                        MDR-Connect\n                                                    </li>\n                                                    <li>You are responsible for all activities that occur under your\n                                                        organization's membership Account and any associated user\n                                                        accounts\n                                                        (if\n                                                        and when applicable), regardless of whether the activities are\n                                                        undertaken by you, your employees or a third party (including\n                                                        your\n                                                        contractors or agents). Except to the extent caused by our\n                                                        breach of\n                                                        these Terms, we and our affiliates are not responsible for\n                                                        unauthorized\n                                                        access to your Membership Account or business user accounts (if\n                                                        applicable). You are solely responsible for maintaining the\n                                                        security\n                                                        of\n                                                        your password. You may not disclose your password to any third\n                                                        party\n                                                        (other than third parties authorized by you to use your\n                                                        Membership\n                                                        Account or associated business user accounts, if applicable, in\n                                                        accordance with these Terms) and are solely responsible for any\n                                                        use\n                                                        or\n                                                        action taken under your password. You will contact us\n                                                        immediately if\n                                                        you\n                                                        believe an unauthorized third party may be using your Membership\n                                                        Account\n                                                        or associated Platform user accounts, if applicable, or if your\n                                                        Membership Account or any user account information, if\n                                                        applicable,\n                                                        is\n                                                        lost or stolen.</li>\n                                                </ul>\n                                            </li>\n\n                                            <li>You agree that MDR-Connect is a Technology Platform that provides you\n                                                the\n                                                tools\n                                                and services eco-solution to connect and optimize your business\n                                                processes so\n                                                that the platform is utilized to expand your markets and businesses with\n                                                industry partners /peers and service providers. The Platform will\n                                                support\n                                                your\n                                                business expansion and shows a trend of positive increase in revenue and\n                                                overall\n                                                growth. In no way MDR-connect claims that after becoming member of the\n                                                Platform\n                                                the organization or your business on an immediate basis will show\n                                                automatically\n                                                positive results for businesses and revenues. This platform is a\n                                                Technology\n                                                &\n                                                business connection platform and will assist/help you to grow your\n                                                business\n                                                network and in process expand your market & distribution reach and\n                                                revenues.\n                                            </li>\n\n                                            <li>You agree that the sellers may provide you access to discounts for SkUs\n                                                listing\n                                                on their Individual stores or on MDR-Connect Home store. In these\n                                                instances,\n                                                the\n                                                available price on the SKUs will reflect this discount. You agree not to\n                                                manually copy or use any data mining, scraping, or similar data\n                                                gathering\n                                                and\n                                                extraction tools with respect to such pricing or discounts.</li>\n\n                                            <li>MDR-Connect Platform provide you the Zero Balance maintained wallet\n                                                facility\n                                                on\n                                                the platform for members to be used internal to the platform in a closed\n                                                loop\n                                                model. The same can be used for internal Purposes to provide direct\n                                                discounts or\n                                                payback benefits to the members of the platform through platform\n                                                transactions.\n                                            </li>\n\n                                            <li>You agree that MDR-Connect have the right to limit how you connect and\n                                                interact\n                                                on our Services and we reserve the right to limit your use of the\n                                                Services,\n                                                including the number of your connections and your ability to contact\n                                                other\n                                                Members. MDR-Connect reserves the right to restrict, suspend, or\n                                                terminate\n                                                your\n                                                account if you breach this Contract or the law or are misusing the\n                                                Services\n                                                (e.g., violating any of the Dos and Don\u2019ts or used any un-professional\n                                                and\n                                                unethical images /Videos or texts which violates any of the\n                                                above-mentioned\n                                                terms and conditions agreed by you)</li>\n                                        </ul>\n                                    </ul>\n                                    <!-- </i> -->\n\n                                    <!-- VI -->\n                                    <li>\n                                        <strong class=\"ml-3\">MDR-Connect Marketplace</strong>\n                                        <ul class=\"ml-3\" style=\"list-style-type: disc;\">\n                                            <li>These terms and conditions govern your access to and use of a set of\n                                                features, services,\n                                                and functionality on the Business-to-Business marketplace section of\n                                                MDR-Connect\n                                                Marketplace for registered Members pf the platform to Sell and Buy\n                                                products\n                                                for business\n                                                purposes (\"MDR-Connect Marketplace \"). </li>\n\n                                            <li>These Terms constitute an agreement between Member & All-Day MDR-Connect\n                                                that the\n                                                products and services sold on MDR-Connect Marketplace is purely a\n                                                business\n                                                transaction\n                                                between the members organizations and MDR-Connect is not responsible for\n                                                ay\n                                                defects\n                                                /Service Response / Delivery Commitments or quality and\n                                                genuine/originality\n                                                of the\n                                                products or services sold by a member organization. </li>\n\n                                            <li>Returns. Refund /Delivery commitment of the Transactions is the\n                                                responsibility of the\n                                                seller organization unless or until the store digital transaction on\n                                                Ecommerce Payment\n                                                Transaction state that the responsibility of Return / Refund and\n                                                Delivery\n                                                lies with\n                                                MDR-Connect. </li>\n                                        </ul>\n                                    </li>\n\n                                    <!-- VII -->\n                                    <li>\n                                        <strong class=\"ml-3\">No Warranty</strong>\n                                        <p class=\"ml-3\"><strong>All-Day MDR-Connect and its Affiliates</strong></p>\n\n                                        <ul class=\"ml-3\" style=\"list-style-type: disc;\">\n                                            <li>MAKE NO REPRESENTATION OR WARRANTY ABOUT THE SERVICES, INCLUDING ANY\n                                                REPRESENTATION THAT\n                                                THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, AND PROVIDE THE\n                                                SERVICES\n                                                (INCLUDING\n                                                CONTENT / INFORMATION AND MARKETPLACE STORES) ON AN \u201CAS IS\u201D AND \u201CAS\n                                                AVAILABLE\u201D BASIS. TO\n                                                THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, </li>\n                                            <li>DISCLAIM ANY IMPLIED OR STATUTORY WARRANTY, INCLUDING ANY IMPLIED\n                                                WARRANTY\n                                                OF TITLE,\n                                                ACCURACY OF DATA, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A\n                                                PARTICULAR PURPOSE.\n                                            </li>\n                                        </ul>\n\n                                    </li>\n\n                                    <!-- VIII -->\n                                    <li>\n                                        <strong class=\"ml-3\">Limitation of Liability</strong>\n                                        <p class=\"ml-3\">UNDER NO CIRCUMSTANCES WILL <strong>All-Day MDR-Connect</strong>\n                                            BE\n                                            LIABLE FOR\n                                            ANY CONSEQUENTIAL, INCIDENTAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES,\n                                            INCLUDING\n                                            BUT NOT\n                                            LIMITED TO ANY LOST PROFITS THAT RESULT FROM YOUR CONTENT & INFORMATION\n                                            DISPLAYED OR SELLING\n                                            / PURCHASE OF ANY PRODUCTS ON <strong>All-Day MDR-Connect</strong>, EVEN IF\n                                            MDR-Connect HAS\n                                            BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. All-Day MDR-Connect\n                                            LIABILITY\n                                            IN ALL EVENTS\n                                            IS LIMITED TO THE TRANSACTION FEE CHARGED ON THE SALES TRANSACTION FOR THE\n                                            PRODUCT SALES\n                                            THAT GIVES RISE TO ANY LIABILITY </p>\n                                        <p class=\"ml-3\"><strong><u>Please do note in particular</u></strong></p>\n                                        <p class=\"ml-3\"><strong>It is expressly agreed for purposes hereof, during the\n                                                term\n                                                of the\n                                                Agreement, MDR-Connect shall indemnify and hold harmless from any claim,\n                                                loss, liability\n                                                or expense (including court costs and reasonable attorneys' fees)\n                                                arising\n                                                out of, or\n                                                based upon any claim for indemnification, reinstatement or other legal\n                                                or\n                                                equitable\n                                                remedy brought by Members in-appropriate Content display for Posts\n                                                Management or\n                                                purchase Transaction for false Promises /Delivery commitments done for\n                                                the\n                                                customers\n                                                with in the online sales process on MDR-Connect Marketplace .</strong>\n                                        </p>\n                                    </li>\n\n                                    <!-- IX -->\n                                    <li>\n                                        <strong class=\"ml-3\">Intellectual Property Rights</strong>\n                                        <ul class=\"ml-3\" style=\"list-style-type: disc;\">\n                                            <li>We\u2019re providing you notice about our worldwide intellectual property\n                                                rights.\n                                            </li>\n                                            <li>All-Day MDR-Connect reserves all of its intellectual property rights for\n                                                the\n                                                Platform\n                                                services Trademarks and logos used by our members organizations on the\n                                                platform profile\n                                                are the trademarks of their respective Organizations. MDR-Connect, and\n                                                \u201CMDR\u201D\n                                                logos and\n                                                other All-Day MDR-Connect trademarks, service marks, graphics and logos\n                                                used\n                                                for our\n                                                Platforms are trademarks or registered trademarks of MDR-Connect</li>\n                                        </ul>\n                                    </li>\n\n                                    <!-- X -->\n                                    <li>\n                                        <strong class=\"ml-3\">Termination</strong>\n                                        <p class=\"ml-3\">We can each end this Contract, but some rights and obligations\n                                            survive. Both you\n                                            and MDR-Connect may terminate this Contract at any time with notice to the\n                                            other. On\n                                            termination, you lose the right to access or use the Services. The following\n                                            shall survive\n                                            termination:</p>\n                                        <ul class=\"ml-3\" style=\"list-style-type: lower-roman;\">\n                                            <li>Our rights to use and disclose your feedback.</li>\n                                            <li>Content already circulated or shared by you on the platform remains with\n                                                the\n                                                member\n                                                organizations and will continue to be used by the platform.</li>\n                                            <li>Any amount owed by either party prior to termination will remain payable\n                                                after\n                                                termination.</li>\n                                            <li>Any product sold, deliveries, or service commitments must be fulfilled\n                                                to\n                                                the member\n                                                organization based on your transaction details of the marketplace.</li>\n                                            <li>You can visit our Backoffice Help Centre for more details on closing\n                                                your\n                                                membership\n                                                account.</li>\n                                        </ul>\n                                    </li>\n\n                                    <!-- XI -->\n                                    <li>\n                                        <strong class=\"ml-3\">Disputes Resolution, Governing Law &amp;\n                                            Jurisdiction</strong>\n                                        <ul class=\"ml-3\" style=\"list-style-type: lower-roman;\">\n                                            <li>These Terms and Conditions shall be governed by and construed in\n                                                accordance\n                                                with the\n                                                laws of India.</li>\n                                            <li>Any difference, dispute, conflict, or controversy, including any\n                                                question as\n                                                to its\n                                                existence, validity, or termination, arising out of or in connection\n                                                with\n                                                these Terms\n                                                and Conditions (\u201CDispute\u201D) shall, if not amicably settled within 90\n                                                (ninety)\n                                                days after\n                                                the receipt of written notice by the parties (Member Organization &\n                                                MDR-Connect), be\n                                                referred to resolution.</li>\n                                            <li>Such dispute shall be resolved in accordance with the Arbitration and\n                                                Conciliation Act,\n                                                1996 by a sole arbitrator duly appointed by MDR-Connect. The seat and\n                                                venue\n                                                of\n                                                arbitration shall be New Delhi, and the arbitration shall be conducted\n                                                in\n                                                English. The\n                                                award of the arbitrator shall be final and binding upon the parties.\n                                                Each\n                                                party shall\n                                                bear its own cost of arbitration.</li>\n                                            <li>The Courts at New Delhi shall have sole and exclusive jurisdiction over\n                                                any\n                                                matters\n                                                related to these Terms and Conditions.</li>\n                                        </ul>\n                                    </li>\n\n                                    <!-- XII -->\n                                    <li>\n                                        <strong class=\"ml-3\">General Terms</strong>\n                                        <ul class=\"ml-3\" style=\"list-style-type: lower-alpha;\">\n                                            <li>This Contract (including additional terms that may be provided by us\n                                                when\n                                                you engage\n                                                with a feature of the other paid Services of the platform) is the only\n                                                agreement between\n                                                us regarding the Services and supersedes all prior agreements for the\n                                                Services.</li>\n                                            <li>If we don't act to enforce a breach of this Contract, that does not mean\n                                                that\n                                                MDR-Connect has waived its right to enforce this Contract.</li>\n                                            <li>You may not assign or transfer this Contract (or your membership or use\n                                                of\n                                                Services of\n                                                the platform) to anyone without our consent. However, you agree that\n                                                MDR-Connect may\n                                                assign this Contract to its affiliates or a party after Merger &amp;\n                                                Acquisition without\n                                                your consent. There are no third-party beneficiaries to this Contract.\n                                            </li>\n                                            <li>You agree that the only way to provide us legal notice is at the email\n                                                or\n                                                through a\n                                                digital copy provided to us at our Back Office.</li>\n                                        </ul>\n                                    </li>\n\n                                </ul>\n\n                                <!-- Contact Us -->\n                                <div class=\"ml-3\">\n                                    <strong>Contact Us</strong>\n                                    <address class=\"ml-3\">\n                                        <p class=\"block\">Garima Kapoor</p>\n                                        <p class=\"block\">Head Compliances Control \u2013 All-day MDR-Connect</p>\n                                        <p class=\"block\">Garima.k@all-day.in</p>\n                                        <p class=\"block\">Plot no. 530 Udyog Vihar Phase 5</p>\n                                        <p class=\"block\">Gurugram - 122016</p>\n                                    </address>\n                                </div>\n\n\n                            </div>\n\n                            <div class=\"readmore\">\n                                <p (click)=\"more()\">{{ showmore == false ? '... read more' : '... read less' }}</p>\n                            </div>\n\n                            <div class=\"form-check mt-3\">\n                                <input type=\"checkbox\" id=\"termsCheck\" class=\"form-check-input\"\n                                    formControlName=\"termsCheck\">\n                                <label class=\"form-check-label\" for=\"termsCheck\">\n                                    I accept all the <a href=\"#\" target=\"_blank\">terms and conditions</a> of\n                                    MDR-Connect.\n                                </label>\n                            </div>\n\n                            <small\n                                *ngIf=\"MdrRegistration.get('termsCheck')?.touched && MdrRegistration.get('termsCheck')?.invalid\"\n                                class=\"text-danger\">\n                                You must accept the terms and conditions to proceed.\n                            </small>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"bottom-btn\">\n                    <button (click)=\"RegisterMyOrg()\" type=\"submit\" class=\"btn custom-btn\"\n                        [disabled]=\"MdrRegistration.invalid\">\n                        Register my Organization\n                    </button>\n                </div>\n\n            </form>\n        </tab>\n\n        <!-- <tab heading=\"About MDR Connect\">\n            <div class=\"content\">\n\n                <div class=\"img-container\">\n                    <img class=\"mdrimg\" src=\"../../assets/images/mdr-connect-ind.png\" />\n                </div>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    MDR-Connect is a single Integrated business networking and e-Business platform with a mission\n                </p>\n\n                <ul>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.2rem;\">&#10003;</span>\n                        <span style=\"color:#0b3d91;font-size:1.08rem;\">To provide access to Markets for MSME\u2019s/SME\u2019s and\n                            large businesses Products &amp; Services with the aim of economic development and\n                            empowerment</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.2rem;\">&#10003;</span>\n                        <span style=\"color:#0b3d91;font-size:1.08rem;\">Keeping Distribution first &amp; Channel\n                            developments as the core of the business growth</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.2rem;\">&#10003;</span>\n                        <span style=\"color:#0b3d91;font-size:1.08rem;\">To provide an impact on an organization direct\n                            Reach with an increase in Revenue and overall success</span>\n                    </li>\n                </ul>\n\n                <p class=\"mt-3 mb-3\">\n                    Connecting Manufacturers, Distributors, Retailers and Service-providers which are real stake holders\n                    of our industries and our platforms aims to streamline the supply chain, improve communication, and\n                    enhance collaboration along with Networking and community Building. The Platform provides you B2B\n                    competitive landscape providing business networking & technology platform with an integrated Back\n                    office and platform Mobile app\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">The Platform is unique because:</p>\n\n                <ul>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Membership based on corporate Listing: as we believe businesses are between corporate\n                            entities and not on Individuals.</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Unlimited Access of Corporate Employees under one Corporate \u2013 Providing Access to\n                            Corporate team & not to an Individual as businesses are built by the team.</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Market / Distribution/Service delivery on trust \u2013 Verified Corporate Listing with 360\n                            Degree Profile Management</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Business networks become your market Product distributors & retailers \u2013 Complete online\n                            Connection Management</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Integrated Distribution and Retail \u2013 Dedicated B2B E-commerce store + Order Management and\n                            fulfilment for frictionless selling</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Complete Posts and Campaign management \u2014 Supporting Mission based media marketing and\n                            brand building</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>O2O (Online-to-Offline) for human-centric business networking \u2014 because business is\n                            emotional and relationship-driven</span>\n                    </li>\n                </ul>\n\n                <p class=\"mt-3 mb-3\">\n                    This mindset shift and acceleration many founders of MSME/SMEs are currently missing for their\n                    businesses.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Today available social media / Business forums are generic in nature and are not able to create much\n                    impact on creating markets and expanding revenues for businesses\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">If you don\u2019t believe it, answer these yourself:</p>\n\n                <ul>\n                    <li>In Last 12 months how much effort/money have you spent on various online social networking for\n                        your businesses and what market and revenue have you generated from the above?</li>\n                    <li>In Last 12 months how much Money/efforts have you spent on Business forums /BNI / Rotary\n                        Membership/Networking paid events and are you able to create your market and revenue from these\n                        memberships and random exhibitions and events?</li>\n                </ul>\n\n                <p class=\"mt-3 mb-3\">\n                    The obsessed usage of non-business social media platforms, relying only on business events /\n                    Networking forums while missing the new gears/levers of market reach \u2014 combined with only\n                    product/service innovation \u2014 is only half the formula for entrepreneurs.\n                </p>\n\n                <p class=\"mt-3 mb-3\"><strong>REACH, SPEED & RIGHT BUSINESS CONNECTS</strong> are the Key Ingredients\n                    along with your products and Services.</p>\n\n                <p class=\"mt-3 mb-2\" style=\"color: red; font-size: 1.25rem;\">\n                    <strong>So, what are you waiting for?</strong>\n                </p>\n                <p class=\"mt-1 mb-3\">Enroll your organization on</p>\n\n                <ul>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Profile & Connection Management</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Social Media Marketing (posts & campaign management)</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>B2B Dedicated E-Commerce store marketplace for B2B products and Services Selling\n                            organizations</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>B2B Orders & Product delivery fulfillment Platform</span>\n                    </li>\n                </ul>\n\n                <div class=\"img-container mt-2\">\n                    <img src=\"../../assets/images/about.jpg\"\n                        style=\"width:50vw; max-width:100%; height:auto; display:block;\" />\n                </div>\n\n                <p class=\"mt-3 mb-3\">\n                    The architecture of our Platform is based on O2O (Organization-to-Organization) rather than\n                    Conventional P2P (Person-to-Person) \u2014 enabling full team access to the digital ecosystem for\n                    enterprise growth.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Enrollment on our platform enables your enterprise to grow for Brand, Market Distribution and\n                    Revenue by providing complete 360\u00B0 business growth & delivery services from a single Digitally\n                    integrated platform.\n                </p>\n\n                <p class=\"mt-3 mb-3\"><strong>What are you waiting for??</strong></p>\n                <p class=\"mt-3 mb-2\" style=\"color: red; font-size: 1.25rem;\">\n                    <strong>Talk to us and get yourself enrolled as an organization member</strong>\n                </p>\n                <p class=\"mt-3 mb-2\" style=\"color: red; font-size: 1.25rem;\">\n                    <strong>@ 8700693372</strong>\n                </p>\n\n            </div>\n        </tab> -->\n\n        <!-- <tab heading=\"Data Protection & Privacy Policy\">\n            <div class=\"content\">\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    Data Protection and Privacy Policy of All-Day MDR-Connect\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    All Day Digital is the data controller of your personal data for and on behalf of All-Day\n                    MDR-Connect, together with its related affiliates (collectively, \u201C<strong>MDR-Connect</strong>\u201C,\n                    \u201C<strong>our</strong>\u201D or \u201C<strong>we</strong>\"\" or All-Day Digital affiliated services \u201C).\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    This Data Protection and Privacy Policy (\u201C<strong>Policy</strong>\u201C) is intended to explain to you,\n                    as a user/member of All-Day MDR-Connect, our services, Shoppenation.in, or All-Day MDR-Connect\n                    mobile applications what personal data we collect about you, how we use or process that data, with\n                    whom it may be shared, and your options about such uses and disclosures.\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    Categories of personal data collected about you and others\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Personal data refers to any information about an identified or identifiable individual. \u201CSensitive\n                    Personal Data\u201D means personal data that, once leaked or illegally used, will easily lead to\n                    infringement of human dignity or harm to the personal or property safety of a natural person,\n                    including (but not limited to): (i) biometric data; (ii) religion; (iii) specific social status;\n                    (iv) medical health information; (v) financial accounts; (vi) tracking/location information; and\n                    (vii) minors\u2019 data.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    If you do not agree with the collection / processing of your Personal Data or sensitive personal\n                    Data, you may not be able to use the certain functionality corresponding to the personal or\n                    sensitive Data you have not consented for us to collect and process, but would not affect your use\n                    of any other functions. Reference to personal data in this Policy shall be deemed to include\n                    reference to sensitive personal data.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    We collect, store and use, with your consent where required by the applicable laws, the following\n                    personal data via our application on sites or on our mobile application, or otherwise interacting\n                    with us.\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    A. General Information Gathering\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    When you engage in certain activities on our application platform, such as registering for an\n                    account, creating your organization or your profile, purchasing a product, submitting content and/or\n                    posting content on any of our application feature, or sending us feedback, we may ask/collect\n                    certain information about your organization /promoters ad management Examples of personal data of\n                    promoters /management may include your first and last name, email address, mailing address,\n                    telephone numbers, age group, gender and other identifying information. When setting up your profile\n                    on our application /Sites, you may be asked to provide an e-mail address, phone number, and address.\n                    To a very limited extent, we may be processing your own professional revenue data, although mostly\n                    such revenue data relates to your organisation, not to you personally.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    We gather certain information about you based upon where you visit on our Application /Sites, and\n                    what other activities are performed on our platform so that we can use our system more efficiently.\n                    This information, which is collected in a variety of different ways, is compiled and analysed on\n                    both a personal and an aggregated basis. Our technology platform enables us to determine\n                </p>\n\n                <ul class=\"mt-3 mb-3 ml-3\" style=\"list-style-type: upper-roman;\">\n                    <li>your priorities and your liking of content based on your viewing pattern so that our application\n                        should give you the right fit content based on your priorities</li>\n                    <li>your purchasing behaviour;</li>\n                    <li>source of the information sought by you during your search; and the age of your results data\n                        (collectively, \u201C<strong>System Shared Information</strong>\u201C).</li>\n                </ul>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    B. Other Platform based Information You Provide.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Our Platform may also collect and store contents which are posted on our application or provide to\n                    us in some other manner, including personal and business information that may be contained in any\n                    Posts /responses/ comment or feedback on your post or through your responses to other members posts\n                    in our platform. This includes your name, address, e-mail address, and telephone number (if provided\n                    and applicable); images (both still and moving)/videos and your organization products and services\n                    along with your organization geography serviceability\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    C. Information About Non-Members.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    We may also collect and store personal data about other people who are not the members of the\n                    platform provided to us by members, including their businesses, contact details including email\n                    addresses and/or IP addresses. Where applicable, this data is mainly used in the legitimate\n                    interests of members and overall security and authenticity of the platform, for the purposes of\n                    generating your invitations to non-members to our online or in-person one-to-one MDR-Connect events,\n                    and for business-to-business referrals between members for the potential purchase of goods or\n                    services from non members. Also, direct marketing to non-members from our platform is possible\n                    through the mean of Share (Copy Link) to non-members provided the non-members should not feel\n                    offended/Should have consent at a principal level for you to send business content from our\n                    platform. A member may make a referral to another member of the name and contact details of a\n                    non-member for the purpose of direct marketing to that person, whose data shall be stored in\n                    platform back end on behalf of the members. If you provide to us personal data of any non-member,\n                    you must provide a information or link of this Policy to them, and principally /formally obtain\n                    their consent for you to share their personal data for us to use for the purposes as described in\n                    this Policy.\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    D. Other Data Collection from using our sites.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Information concerning your computer hardware and software are automatically collected and may be\n                    shared with other parent and affiliated websites like all-day.in and ad-connect.in. This information\n                    may include: your IP address, browser type and language, domain names, access times, referring\n                    website addresses and the content of any undeleted cookies that your browser previously accepted\n                    from us with the assistance of technology framework like\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    \u2022 Cookies.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    to make our Sites easier for you to use and to personalize your online experience. Through the use\n                    of a cookie, we also may automatically collect information about your online activity on our Sites,\n                    such as the web pages you visit, the links you click, and the amount of time you spend on the Sites.\n                    You can withhold or withdraw consent, but if you choose to decline cookies, you may not be able to\n                    sign in or use some of the features offered on our Sites.\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    \u2022 Other Technologies.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    We may use the ever-evolving Internet technology, such as web beacons and other similar\n                    technologies, to track your use of our Sites. We also may include web beacons in company e-mail\n                    messages, newsletters, or notifications to determine whether messages have been opened and/or acted\n                    upon. This enables us to customize the services we offer our Sites visitors to deliver targeted\n                    advertisements and to measure the overall effectiveness of our online advertising, content,\n                    programming or other activities.\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    E. Information gathered from Third Parties.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    We sometimes gathered information from third parties such as corrected delivery addressees from our\n                    logistic partners or our other service providers or redemption information, and page-view\n                    information from some partners with which we operate co-branded businesses or for which we provide\n                    technical, fulfilment, advertising, or other services; search term and search result information\n                    from some searches conducted through the Web search features; search results and links, including\n                    paid listings (such as Sponsored Links from Google); and <strong>credit history information</strong>\n                    from credit\n                    bureaus, or GSTIN Information from government of India Sites which we use to help prevent and detect\n                    frauds and getting verifications of organization credentials\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    How your personal data is consumed and the legal basis for its processing\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    With your consent (where required by the applicable law), we primarily consume your personal data to\n                    fulfil our Services contracts to provide support or service offerings to you.\n                </p>\n\n                <ul class=\"mt-3 mb-3 ml-3\" style=\"list-style-type: upper-alpha;\">\n                    <li>\n                        <strong>Contractual Necessity.</strong>\n                        <p class=\"mt-2 mb-2\">\n                            On the basis of contractual necessity, we consume the required data of members organizations\n                            and membership applicants to:\n                        </p>\n                        <ul class=\"mt-2 mb-3 ml-3\" style=\"list-style-type: lower-roman;\">\n                            <li>manage your account and provide B2B Customer Support;</li>\n                            <li>enforce our terms and conditions;</li>\n                            <li>manage our business;</li>\n                            <li>enable and leverage the application platform to provide user functionality;</li>\n                            <li>process payment for any purchases, subscriptions or sales made on our Site, and to\n                                protect you and ourselves against, or identify, possible fraudulent transactions, and\n                                otherwise as needed to manage our business.</li>\n                        </ul>\n                    </li>\n\n                    <li>\n                        <strong>Legitimate Interest.</strong>\n                        <p class=\"mt-2 mb-2\">\n                            In our legitimate interests of our nature of business, we may process &amp; consume your\n                            data to:\n                        </p>\n                        <ul class=\"mt-2 mb-3 ml-3\" style=\"list-style-type: lower-roman;\">\n                            <li>perform research and analysis about your use of, or interest in, our products, services,\n                                or content, or products, services or content offered by others; this information may be\n                                used to help us understand the demographics of our members organisations, identify\n                                business networking requirements for their businesses and provide them the best suitable\n                                solution to expand their markets, distribution network and overall growth for our member\n                                organizations;</li>\n                            <li>cross market your services/products with our services and our affiliates\u2019 services;</li>\n                            <li>verify your eligibility and deliver online and/or offline on our platform;</li>\n                            <li>protect and defend the rights or Intellectual property of MDR-Connect or safeguard the\n                                interests of our member organizations.</li>\n                        </ul>\n                    </li>\n\n                    <li>\n                        <strong>Consent.</strong>\n                        <p class=\"mt-2 mb-2\">\n                            We take your consent with agree statement during your application for registration online on\n                            to our system to:\n                        </p>\n                        <ul class=\"mt-2 mb-3 ml-3\" style=\"list-style-type: lower-roman;\">\n                            <li>provide your organization details with GSTIN, Mobile Number, email address, Promoter\n                                first name and Last name, area of business and contact address;</li>\n                            <li>allow the application interface to enter your organization's complete profile which\n                                includes management profiles, products and services, media and certifications, client\n                                recommendation and geography of serviceability;</li>\n                            <li>process your personal data for the purposes as described in this Policy;</li>\n                            <li>store business messaging and contractual terms from our system to provide you the Post\n                                Management responses and contract settlements used for your businesses;</li>\n                            <li>list your organization's products, services, and SKUs either on our All-Day MDR-Connect\n                                Online store or on your dedicated store as opted by you in your membership plan.</li>\n                        </ul>\n                    </li>\n\n                    <li>\n                        <strong>Legal Necessity.</strong>\n                        <p class=\"mt-2 mb-2\">\n                            When legally necessary, we may also process your personal &amp; business data:\n                        </p>\n                        <ul class=\"mt-2 mb-3 ml-3\" style=\"list-style-type: lower-roman;\">\n                            <li>to establish or exercise our legal rights, or to defend against legal claims;</li>\n                            <li>in the vital interests of staff, members and users of All-Day MDR-Connect, or the\n                                public, to protect their personal safety.</li>\n                        </ul>\n                    </li>\n                </ul>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    Data retention\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Your data will only be retained for as long as necessary to fulfil the purposes for which it was\n                    obtained and/or meet any applicable legal obligations.<br><br>\n                    We take reasonable and appropriate technical and organizational measures to safeguard your personal\n                    & Business data against any breach, unauthorized or illegal access, alternation, disclosure or,\n                    deletion, such as identity verification, encryption, access control, malicious codes resistance,\n                    security audit.\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">How your personal &amp; Business data is disclosed</p>\n\n                <p class=\"mt-3 mb-3\">With your consent (where required by the applicable law), we may share personal\n                    &amp; business data with:</p>\n                <ul class=\"mt-3 mb-3 ml-3\" style=\"list-style-type: upper-alpha;\">\n                    <li><strong>Authorized Service Providers.</strong> Authorized service providers performing services\n                        on our behalf, e.g., processing credit card payments, delivering products and services,\n                        providing customer service and marketing assistance, performing business and sales analysis,\n                        supporting our Sites\u2019 functionality, and supporting other features and promotions offered\n                        through our application and sites.</li>\n                    <li><strong>Business Partners and Members.</strong> From time to time, we may offer products,\n                        services, promotions, contests and/or sweepstakes on our Sites and share personal data with the\n                        businesses and to our members with which we partner to provide these offers.</li>\n                    <li><strong>Franchisees.</strong> If you are All-Day MDR-Connect member or a non-member, we may\n                        share your personal data or business data with MDR-Connect business members and geo-based\n                        franchisee partners and co-franchisee partners, but in any scenario, All-Day MDR-Connect remains\n                        the master data controller and manages the data.</li>\n                    <li><strong>Members &amp; Others.</strong> We and our partners may share your personal and business\n                        data with other members and non-members for your business promotions and referral management.\n                    </li>\n                </ul>\n\n                <p class=\"mt-3 mb-3\"><strong>To Others</strong> \u2013 We may also disclose your information:</p>\n                <ul class=\"mt-3 mb-3 ml-3\" style=\"list-style-type: lower-roman;\">\n                    <li>under legal authority to respond to requests for cooperation from a law enforcement or other\n                        government agency (including civil and criminal matters);</li>\n                    <li>to prevent illegal activity, to prevent imminent bodily harm, or to protect ourselves and you\n                        from people violating our Terms of Service, accessible at our site www.shoppenation.in under\n                        MDR-Connect option;</li>\n                    <li>in connection with a substantial corporate transaction, such as the sale of our business, a\n                        merger, divestiture, consolidation, or asset sale, though in any event, any acquiring entity or\n                        other third-party assignee will be bound by the provisions of this Policy.</li>\n                </ul>\n\n                <p class=\"mt-3 mdr-heading b-2\">Your Data Protection Rights</p>\n                <ul class=\"mt-3 mb-3 ml-3\" style=\"list-style-type: disc;\">\n                    <li>You have the right to be provided on request with a copy of your personal data.</li>\n                    <li>You have the right to rectification of inaccurate data we may have recorded about you.</li>\n                    <li>You have the right to the erasure of your data (\u201CRight to be Forgotten\u201D) which we no longer have\n                        justification for keeping it with us.</li>\n                    <li>You have the right to object to processing of your data which is being done on the basis of our\n                        legitimate interests.</li>\n                    <li>You have the right to refuse to be contacted for direct marketing purposes.</li>\n                    <li>You have the right to restrict the processing of your personal &amp; business data when:\n                        <ul class=\"mt-3 mb-3 ml-3\" style=\"list-style-type: circle;\">\n                            <li>the basis for its processing is in dispute;</li>\n                            <li>its accuracy is in dispute;</li>\n                            <li>we cannot establish a lawful basis for its processing, but you do not wish it to be\n                                erased;</li>\n                            <li>we no longer need your data, but you need it for the establishment, exercise, or defense\n                                of legal claims;</li>\n                            <li>you object, where applicable, to our processing your data on the basis of our legitimate\n                                interests, pending verification of whether our interests override.</li>\n                        </ul>\n                    </li>\n                    <li>You have the right to be provided in a structured, commonly used and machine-readable format\n                        with a copy of your data which we process on the basis of your consent or contractual necessity,\n                        or to have it transferred directly to another data controller (\u201CData Portability\u201D).</li>\n                    <li>Additional rights include:\n                        <ul class=\"mt-3 mb-3 ml-3\" style=\"list-style-type: circle;\">\n                            <li>Right to access and copy of data.</li>\n                            <li>Right to transfer.</li>\n                            <li>Right to correct or supplement.</li>\n                            <li>Right to deletion in certain circumstances.</li>\n                            <li>Right to limit or withdraw consent.</li>\n                            <li>Right to request details of processing (including for automated decision-making, and can\n                                refuse such decision) and of handling rules.</li>\n                            <li>Right to de-register accounts with taking away your membership from our platform.</li>\n                            <li>Right to complain.</li>\n                        </ul>\n                    </li>\n                </ul>\n\n                <p>If you have an online account with us, you have the ability to review and update your personal &amp;\n                    business information online by logging into your account. You can also review and update your\n                    personal information and exercise your other rights by contacting us. More information about how to\n                    contact us is provided below.</p>\n\n                <p>We encourage you to exercise discretion and caution with respect to your personal data. Once you have\n                    posted data, you may not be able to edit or delete such data.</p>\n\n                <p>Any personal data that you disclose through our Sites, or other online forums hosted on our Sites,\n                    may be collected and used by others. We recommend caution when giving out personal data to others in\n                    these online forums.</p>\n\n                <p class=\"mt-3 mdr-heading b-2\">Children\u2019s Privacy</p>\n                <p>Our Site is a general audience site not intended for use by children, and we do not knowingly collect\n                    personal data from children. You may access our Sites only if you are of legal age to lawfully form\n                    a binding contract.</p>\n\n                <p class=\"mt-3 mdr-heading b-2\">Guidelines we follow</p>\n\n                <ul class=\"mt-3 mb-3 ml-3\" style=\"list-style-type: disc;\">\n                    <li>We will require our franchisees, business partners or service providers to adopt the data\n                        protection standard contractual clauses.</li>\n                    <li>With your separate consent, we may share, transfer or store your personal data inside or outside\n                        of India where we are satisfied that adequate levels of protection are in place to protect the\n                        integrity and security of your personal &amp; business data or adequate security measures are\n                        adopted in compliance with legal requirements.</li>\n                    <li>We will ensure the entity that receives your personal &amp; business data properly handles it\n                        and provides the same level of protection as with our platform.</li>\n                </ul>\n\n                <p class=\"mt-3 mdr-heading b-2\">Changes in the policy</p>\n                <p>We will occasionally update this Policy to reflect changes in our practices and services. When we\n                    post changes, we will revise the \u201CLast Updated\u201D date at the top of the Policy. If we make any\n                    material changes in the way we collect, use, and/or share your personal /business data, we will\n                    notify you by email (if available) or by prominently posting notice of the changes on our Sites, and\n                    where required by applicable laws, obtain your consent.</p>\n\n                <p>You may contact us for any of your queries at our Data compliance support: <a\n                        href=\"mailto:Garima.k@all-day.in\">Garima.k@all-day.in</a> (Write in subject \u201CData Related\n                    Communication\u201D).</p>\n\n                <p><strong>All-Day MDR-Connect</strong></p>\n\n            </div>\n        </tab> -->\n\n        <!-- <tab heading=\"Terms & Conditions\">\n            <div class=\"content\">\n\n                <p class=\"mt-3 mdr-heading b-2\">Terms & Condition All-Day MDR-Connect Membership</p>\n\n                <p class=\"mt-3 mb-3\">\n                    By creating a membership account or accessing or using our Services (described below), you are\n                    agreeing to enter into a legally binding contract with <strong>All-Day MDR-Connect</strong> (even if\n                    you are using\n                    third party credentials or using our Services on behalf of a company). If you do not agree to this\n                    contract (\u201CContract\u201D or \u201CUser Agreement\u201D), do not create a membership account or access or otherwise\n                    use any of our Services. If you wish to terminate this Contract at any time, you can do so by\n                    closing your Membership account citing your reasons to dis-continue and surrendering your system\n                    passwords on a formal basis or for using our Services of our MDR-connect eco solution Platform\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Services\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    This Contract applies to All-Day MDR-Connect, and other MDR-Connect related apps for using our\n                    Shoppenation partner Solution or AD-Connect Solution and other services that state that they are\n                    offered under this Contract (\u201CServices\u201D), including the offsite collection of data for those\n                    Services, such as via our ads or any of our services plugins.\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">MDR-Connect</p>\n\n                <p class=\"mt-3 mb-3\">\n                    You are entering into this Contract with MDR-Connect (also referred to as \u201Cwe\u201D and \u201Cus\u201D).\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    As a Member of our Services, the collection, use, and sharing of your personal &amp; business data\n                    is subject to our\n                    <span style=\"color:blue; text-decoration:underline; cursor:default;\">Data Protection and Privacy\n                        Policy</span>.\n                    You acknowledge and have read our\n                    <span style=\"color:blue; text-decoration:underline; cursor:default;\">Data Protection and Privacy\n                        Policy</span>.\n                </p>\n\n                <ul class=\"mt-3 mb-3 ml-3\" style=\"list-style-type: upper-roman;\">\n\n                    <li>\n                        <strong class=\"ml-3 mb-2 mt-2\">Platform Membership</strong>\n                        <p class=\"mt-2 ml-3 mb-2\">This Contract applies to Members of the platform with unique\n                            Membership identity .</p>\n                        <p class=\"mt-2 ml-3 mb-2\">When you register and join the MDR-Connect and on approval by our back\n                            office, you become a \u201CMember\u201D. You will have an obligation to pay your annual membership fee\n                            as per your selected plan within 10 (Ten) days after getting an approval from our back\n                            office. As a member your membership will be carried forward to avail MDR-Connect Platform\n                            Membership year on year with subscription of your annual membership fee. </p>\n                        <p class=\"mt-2 ml-3 mb-2\">You can be a seller, buyer or seller or Buyer both in our platform for\n                            availing an e-commerce store-based services at our MDR-Connect Home store or at our member\n                            stores available at MDR-connect Marketplace. </p>\n                        <p class=\"mt-2 ml-3 mb-2\"><strong>As a Seller:</strong>\n                            You will have an obligation to buy minimum one set of 5 SKUs (Five) Online Shelf space. You\n                            have an option to keep your SKUs on a Platform (MDR-Connect) Home Store or you can own your\n                            own online store as per your service selection. for certain Verticals (Like Real Estate\n                            Property sale listings, Automobiles Vehicles sales listing and Lage Medical Equipment Sales\n                            listing) the SKUs of the member organizations will be listed and will be having an online\n                            commerce only through MDR-Connect Home Store. As a seller and opted for your own online\n                            store you will also be provided an access to MDR-Connect eCommerce functionality module of\n                            the platform. The Platform also deduct a transaction fee for seller which are mentioned in\n                            our membership plan </p>\n                        <p class=\"mt-2 ml-3 mb-2\"><strong>As a Buyer:</strong>\n                            You will have an obligation to see the credentials of the Sellers SKUs on seller online\n                            store in particular about the authenticity /genuineness certifications and supporting\n                            information about the warranties and product durability as MDR-Connect takes no\n                            responsibility and assumes no liability for any certifications or supporting information and\n                            serviceability provided by member online store. As a buyer if you wish to use the Escrow\n                            account settlement provided by the platform than you can initiate a process to submit your\n                            contract signed with the buyer and on buyer-seller agreement and their contract you can\n                            avail the facility of escrow settlement Process. Please see our <span\n                                style=\"color:blue; text-decoration:underline; cursor:default;\">Escrow Settlement\n                                Process</span> for more detail. You have an obligation to pay a platform convenience\n                            fee as per your membership plan on the transaction which will be added over and above the\n                            store sale invoice. </p>\n                        <p class=\"mt-2 ml-3 mb-2\"><strong>Seller &amp; Buyer both:</strong>\n                            You can be seller and Buyer both and can avail the membership benefits on sellers and\n                            buyers\u2019 transactional fees along with keeping your SKU\u2019s on MDR-Connect Store or on your\n                            Individual Store </p>\n                    </li>\n\n                    <li>\n                        <strong class=\"ml-3 mt-2 mb-2\">Changes in Contract</strong>\n                        <p class=\"mt-2 ml-3 mb-2\">\n                            We may make changes to this Contract.\n                            We may modify this Contract, from time to time. If required by applicable law or we make\n                            material changes to this Contract, we will provide you notice through our Services, or by\n                            other means, to provide you the opportunity to review the changes before they become\n                            effective. We agree that changes cannot be retroactive. If you object to any of these\n                            changes, you may choose to withdraw your membership and close an account. Your continued use\n                            of our Services after we publish or send a notice about our changes to these terms means\n                            that you are consenting to the updated terms as of their effective date.\n                        </p>\n                    </li>\n\n                    <li>\n                        <strong class=\"ml-3\">Platform Membership fees &amp; Services based Payments</strong>\n                        <ul class=\"mb-3 ml-3\" style=\"list-style-type: lower-alpha;\">\n                            <li>You\u2019ll honor your payment obligations and you are okay with us storing your payment\n                                information. You understand that there may be fees and taxes that are added to our\n                                prices.</li>\n                            <li>Refunds are subject to our policy, and we may modify our prices prospectively.</li>\n                            <li>If you are registering to our membership and other opted services, you agree to pay us\n                                the applicable fees and taxes as per your membership type subscribed and services based\n                                on fees and on approval of your membership you agree to the below mentioned <span\n                                    style=\"color:blue; text-decoration:underline; cursor:default;\">Members &\n                                    Your Obligations</span> mentioned below. Failure to pay membership and services fees\n                                will\n                                result in the termination of your membership. Also, you agree that.</li>\n                            <li>Your purchase may be subject to Special foreign land fees or differences in prices based\n                                on location/Geography (e.g., exchange rates and geography market multiplier factor).\n                            </li>\n                            <li>We may store and continue billing your Preferred payment method (e.g., credit card /UPI\n                                or debit Card), even after it has expired, to avoid interruptions in your paid Services\n                                and to use it to pay for other Services you may buy. You may update or change your\n                                payment method.</li>\n                            <li>We may modify our Annual Membership fee or any of our service prices effective\n                                prospectively upon reasonable notice to the extent allowed under the law.</li>\n                            <li>All of your Membership Subscription are subject to Membership policy.</li>\n                            <li>We may calculate taxes payable by you based on the billing of the services opted by you\n                                from the platform </li>\n                            <li>You can get a copy of your Platform invoice through your Shoppenation MDR-Connect\n                                account settings under \u201C<span\n                                    style=\"color:blue; text-decoration:underline; cursor:default;\">Member Account\n                                    Purchase Management</span>\u201D.</li>\n                        </ul>\n                    </li>\n\n                    <li>\n                        <strong class=\"ml-3 mb-2 mt-2\">Notices &amp; Messages to Members of the Platforms</strong>\n                        <ul class=\"mb-2 mt-2 ml-3\" style=\"list-style-type: lower-alpha;\">\n                            <li class=\"mb-2\">\n                                we will provide notices and messages to you in the following ways: (1) within the\n                                Platform or (2) sent to the contact information you provided us (e.g., email, mobile\n                                number, physical address).\n                            </li>\n                            <li class=\"mb-2\">You agree to keep your contact information up to date.</li>\n                        </ul>\n                    </li>\n\n                    <strong class=\"ml-3 mt-2 mb-2\">You Agree as a Member &amp; Your Obligations</strong>\n                    <ul class=\"mb-2 mt-2 ml-3\" style=\"list-style-type: lower-alpha;\">\n\n                        <strong>For Membership Eligibility</strong>\n                        <p class=\"ml-3 mt-2 mb-2\">Here are some promises and you agree to following terms and\n                            conditions as a member of MDR-Connect </p>\n                        <ul class=\"ml-3\" style=\"list-style-type: lower-roman;\">\n                            <li>You\u2019re eligible to enter into this Contract and you are at least our \u201CMinimum\n                                Age.\u201D</li>\n                            <li>The Services are not for use by anyone under the age of 18.</li>\n                            <li>you will have one Membership account for one business, which must be in your\n                                organization name and you must be registered as Promoter or Director or Partner\n                                or Sole proprietor or a key management person of an organization</li>\n                            <li>your organization is not already restricted by MDR-Connect from using the\n                                Services. Creating an account with false information is a violation of our\n                                terms, including accounts registered on behalf of others or persons under the\n                                age of 18.</li>\n                            <li>You will be doing a commerce activity for your products and services listed on\n                                SKUs from platform marketplace only and for keeping your business interest and\n                                money secured as per mutual business contracts between member organizations,\n                                platform will be providing a transaction on escrow-based settlements </li>\n                            <li>\n                                This platform is also a community building platform and we believe in our\n                                ancient philosophy of:\n                                <ul class=\"mb-3 ml-3\" style=\"list-style-type: lower-alpha;\">\n                                    <li>\"<strong>VasudhaIva Kutumbakam</strong>\u201D and wish to have life time\n                                        connection and business relationships. So, core of our community\n                                        building is based on Referral based businesses and every member enrolled\n                                        with us should make a promise to provide referrals and to encourage this\n                                        referral-based community building. To Promote the same platform takes\n                                        initiative to provide a discount of 100% Annual Membership Fee /Pro-rata\n                                        basis discounting in Annual fee with following Annual referrals provided\n                                        by a member in combination of below parameters to promote businesses of\n                                        fellow members </li>\n                                    <li>\n                                        <strong>Referral to build Business Community Every Member is expected to\n                                            Provide following in combinations to avail 100% Annual fee\n                                            exemption</strong>\n                                        <ul class=\"mb-3 ml-3\" style=\"list-style-type: lower-roman;\">\n                                            <li>20(Twenty or more) member Inductions Annually to the platform\n                                            </li>\n                                            <li>50 (Fifty) Posts of Other stores Sharing to a group of 5 or More\n                                                Members/Outside Platform community Annually </li>\n                                            <li>50 (Fifty) Marketplace Stores Sharing to a Group of 5 or More\n                                                members for promoting member stores for Sales & revenue growth\n                                                Annually </li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                            </li>\n                            <li>You and Your organization agrees and make promise that you will publish content\n                                from Platform posts management for member organizations and are bound by the\n                                laws of the land following media display Content restrictions or limitations\n                                imposed by the Nations/States/Geographies/locations/Religions/communities based/\n                                Prohibited Contents for Public Interest/ Third Parties Prohibited sectors based\n                                Contents or contents which may promote Tabacco/Alcohol /Drugs /Act of terror /\n                                Act of Sex and Pornographic material including sex Toys /child abuse & Slavery\n                                /Bonded Labour/Non-permissible Health Drinks and Health care Products /Vulgar\n                                and abusive languages and Slangs hurting person or group of person /Women &\n                                Child abuse and Promoting illegal Products and activities as mentioned by the\n                                Laws as illegal products & activities which includes arms and ammunitions and\n                                anti-national content and third party copyright contents and images/Logos\n                                /Trademarks without permissions . In addition, MDR-Connect in its sole and\n                                absolute discretion may elect to not exhibit or present any Content which they\n                                may think is not relevant to display publicly on the screens or on sectors-based\n                                screens Promotion or other content at any location where the content is\n                                determined not to be appropriate or permitted in consultation with location or\n                                other Third-Party locations that are set forth </li>\n                            <li>\n                                Member and Member Organization registered with our Platform agrees that\n                                MDR-Connect will not be held responsible and accountable for any\n                                legality/compliances of the displayed content and member /his or her\n                                organization listed will remain solely responsible for any liability arising\n                                from the displayed Content or Advertising, including but not limited to\n                                liability arising from any laws relating to obscenity, defamation, trade libel,\n                                the right of publicity or likeness, the right of or to privacy, any laws\n                                relating to intellectual property, and any laws relating to advertising. If any\n                                Advertiser Content or Advertising is rejected by MDR-Connect or a location, we\n                                will promptly replace the Member Organization Content.\n                                <ul class=\"mb-3 ml-3\" style=\"list-style-type: lower-alpha;\">\n                                    <li>Members organization may offer their own products and services through\n                                        our Services, and we aren\u2019t responsible for those Members organizations\n                                        activities and serviceability.</li>\n                                    <li>Others\u2019 Members Content: By using the Platform Services, you may\n                                        encounter content or other information that might be inaccurate,\n                                        incomplete, delayed, misleading, illegal, offensive/obscene, or\n                                        otherwise harmful. You agree that we are not responsible for content or\n                                        other information made available through or within the Services by\n                                        others, including Members. While we apply automated tools to review much\n                                        of the content and other information presented in the Services, we\n                                        cannot always prevent misuse of our Services, and you agree that we are\n                                        not responsible for any such misuse. You also acknowledge the risk that\n                                        others may share inaccurate or misleading information about you or your\n                                        organization, and that you or your organization may be mistakenly\n                                        associated with content about others, for example, when we let\n                                        connections and followers know you or your organization were mentioned\n                                        in the news. </li>\n                                    <li>We\u2019ll honor the choices you make about who gets to see your content,\n                                        including how it can be used for referring and sharing to others and for\n                                        your business promotions.</li>\n                                </ul>\n                            </li>\n\n                            <li>You agree and promise to only provide content and other information that you\n                                have the right to share and that your MDR-Connect profile will be truthful.</li>\n\n                            <li>You agree that any share information/Content on our Services shared by you can\n                                be seen, copy, saved, Re-forwaded and processed to be re- used as an information\n                                by other members or non-members of MDR-Connect.</li>\n\n                            <li>Our Services allow sharing of information (including content) in many ways, such\n                                as through your profile, posts, articles, group posts, links to news articles, ,\n                                messages, and In-person Responses and Messages. Depending on the feature and\n                                choices you make, information that you share may be seen by other Members, or\n                                others (on or off of the Services). </li>\n\n                            <li>You agree and grant MDR-Connect and our affiliates the following non-exclusive\n                                license to the content and other information you provide (e.g., share, post,\n                                upload, and/or otherwise submit) to our Services:</li>\n\n                            <li>You agree and grant MDR-Connect worldwide, transferable and sub-licensable right\n                                to use, copy, modify, distribute, publicly perform and display, host, and\n                                process your content and other information you submit on our posts management\n                                and communication desk module without any further consent, notice and/or\n                                compensation to you or others </li>\n\n                            <li>We will not include your content in advertisements for the products and services\n                                of third parties to others without your separate consent (including sponsored\n                                content). However, without compensation to you or others, ads may be served near\n                                your content and other information, and your platform actions may be visible and\n                                included with ads, as noted in the Data Protection and Privacy Policy. If you\n                                use a Service feature, we may mention that with your name or photo to promote\n                                that feature within our Services, subject to your choice of settings </li>\n\n                            <li>You agree that we will provide notices and messages to you in the following\n                                ways: (1) within the Services or (2) sent to the contact information you\n                                provided us (e.g., email, mobile number, physical address). You agree to keep\n                                your contact information up to date.</li>\n\n                            <li>MDR-Connect Service Availability: You agree to the following\n                                <ul class=\"mb-3 ml-3\" style=\"list-style-type: lower-alpha;\">\n                                    <li>MDR-Connect may change or limit the availability of some features, or\n                                        end any Services of the platform.</li>\n\n                                    <li>We may change, suspend or discontinue any of our Services. We may also\n                                        limit the availability of features, content and other information so\n                                        that they are not available to all Members (e.g., by country or by\n                                        subscription-based access).</li>\n\n                                    <li>We don\u2019t promise to store or show (or keep showing) any information\n                                        (including content) that you\u2019ve shared. MDR-Connect I is not a storage\n                                        service so we will not be responsible for your content storage. You\n                                        agree that we have no obligation to store, maintain or provide you a\n                                        copy of any content or other information that you or others provide,\n                                        except to the extent required by applicable law and as noted in our Data\n                                        Protection and Privacy Policy.</li>\n\n                                    <li>You agrees that MDR-Connect platform does not guarantee you the\n                                        availability of its platform services 100% of the time or does not\n                                        guarantee an error free / without malfunctions services or any of the\n                                        Platform services are prevented, in whole or in part, from performing\n                                        any required functional obligations or condition hereunder, or from\n                                        exercising its rights by reason or as a result of any force majeure than\n                                        MDR-Connect Will be excused from performing such obligations or\n                                        conditions due to a reason such as acts of God, acts of government, acts\n                                        of terrorism, strikes, lockouts, or other industrial disturbances, acts\n                                        of a public enemy, blockades, wars, insurrections or riots, terrorism,\n                                        epidemics, landslides, fires, storms, floods, explosions, technological\n                                        failures, breaches, hacks, system vulnerabilities or incompatibilities,\n                                        or other similar causes beyond the control of such Social ,\n                                        Technological and environmental conditions .</li>\n\n                                </ul>\n                            </li>\n\n                            <li>You will keep your password for platforms applications a secret\n                                <ul class=\"mb-3 ml-3\" style=\"list-style-type: lower-alpha;\">\n                                    <li>You will not share your account with anyone else outside your\n                                        organization resources and will follow our policies and the law. You\n                                        will be given a single user access but on request you will be provided a\n                                        module to generate role based multi-user access. </li>\n                                    <li>Members are account holders. You agree to: (1) protect against wrongful\n                                        access to your account (e.g., use a strong password and keep it\n                                        confidential); (2) not share or transfer your account or any part of it\n                                        (e.g., sell or transfer the personal data of others by transferring your\n                                        connections); and (3) follow the law, our list of Dos and Don\u2019ts\n                                        (below), and <span\n                                            style=\"color:blue; text-decoration:underline; cursor:default;\">Our Social\n                                            Community Membership Policy</span> You are responsible\n                                        for anything that happens through your account unless you close it or\n                                        report misuse</li>\n                                    <li>As between you and others (including your employers /partners or\n                                        subsidiaries), your account belongs to you. However, if the Services\n                                        were made available by becoming members by another party for you to use\n                                        (e.g., your parent company or your organization Mentor or your\n                                        non-working Director as your stakeholder or employer), the party having\n                                        membership registered under his name for such Service has the right to\n                                        control access to and get reports on your use of such paid Membership\n                                        Service; and they have the rights to your Account personal and business\n                                        data of registered organization by virtue of membership of MDR-Connect\n                                    </li>\n                                    <li>You are responsible for all activities that occur under your\n                                        organization's membership Account and any associated user accounts (if\n                                        and when applicable), regardless of whether the activities are\n                                        undertaken by you, your employees or a third party (including your\n                                        contractors or agents). Except to the extent caused by our breach of\n                                        these Terms, we and our affiliates are not responsible for unauthorized\n                                        access to your Membership Account or business user accounts (if\n                                        applicable). You are solely responsible for maintaining the security of\n                                        your password. You may not disclose your password to any third party\n                                        (other than third parties authorized by you to use your Membership\n                                        Account or associated business user accounts, if applicable, in\n                                        accordance with these Terms) and are solely responsible for any use or\n                                        action taken under your password. You will contact us immediately if you\n                                        believe an unauthorized third party may be using your Membership Account\n                                        or associated Platform user accounts, if applicable, or if your\n                                        Membership Account or any user account information, if applicable, is\n                                        lost or stolen.</li>\n                                </ul>\n                            </li>\n\n                            <li>You agree that MDR-Connect is a Technology Platform that provides you the tools\n                                and services eco-solution to connect and optimize your business processes so\n                                that the platform is utilized to expand your markets and businesses with\n                                industry partners /peers and service providers. The Platform will support your\n                                business expansion and shows a trend of positive increase in revenue and overall\n                                growth. In no way MDR-connect claims that after becoming member of the Platform\n                                the organization or your business on an immediate basis will show automatically\n                                positive results for businesses and revenues. This platform is a Technology &\n                                business connection platform and will assist/help you to grow your business\n                                network and in process expand your market & distribution reach and revenues.\n                            </li>\n\n                            <li>You agree that the sellers may provide you access to discounts for SkUs listing\n                                on their Individual stores or on MDR-Connect Home store. In these instances, the\n                                available price on the SKUs will reflect this discount. You agree not to\n                                manually copy or use any data mining, scraping, or similar data gathering and\n                                extraction tools with respect to such pricing or discounts.</li>\n\n                            <li>MDR-Connect Platform provide you the Zero Balance maintained wallet facility on\n                                the platform for members to be used internal to the platform in a closed loop\n                                model. The same can be used for internal Purposes to provide direct discounts or\n                                payback benefits to the members of the platform through platform transactions.\n                            </li>\n\n                            <li>You agree that MDR-Connect have the right to limit how you connect and interact\n                                on our Services and we reserve the right to limit your use of the Services,\n                                including the number of your connections and your ability to contact other\n                                Members. MDR-Connect reserves the right to restrict, suspend, or terminate your\n                                account if you breach this Contract or the law or are misusing the Services\n                                (e.g., violating any of the Dos and Don\u2019ts or used any un-professional and\n                                unethical images /Videos or texts which violates any of the above-mentioned\n                                terms and conditions agreed by you)</li>\n                        </ul>\n                    </ul>\n\n                    <li>\n                        <strong class=\"ml-3\">MDR-Connect Marketplace</strong>\n                        <ul class=\"ml-3\" style=\"list-style-type: disc;\">\n                            <li>These terms and conditions govern your access to and use of a set of features, services,\n                                and functionality on the Business-to-Business marketplace section of MDR-Connect\n                                Marketplace for registered Members pf the platform to Sell and Buy products for business\n                                purposes (\"MDR-Connect Marketplace \"). </li>\n\n                            <li>These Terms constitute an agreement between Member & All-Day MDR-Connect that the\n                                products and services sold on MDR-Connect Marketplace is purely a business transaction\n                                between the members organizations and MDR-Connect is not responsible for ay defects\n                                /Service Response / Delivery Commitments or quality and genuine/originality of the\n                                products or services sold by a member organization. </li>\n\n                            <li>Returns. Refund /Delivery commitment of the Transactions is the responsibility of the\n                                seller organization unless or until the store digital transaction on Ecommerce Payment\n                                Transaction state that the responsibility of Return / Refund and Delivery lies with\n                                MDR-Connect. </li>\n                        </ul>\n                    </li>\n\n                    <li>\n                        <strong class=\"ml-3\">No Warranty</strong>\n                        <p class=\"ml-3\"><strong>All-Day MDR-Connect and its Affiliates</strong></p>\n\n                        <ul class=\"ml-3\" style=\"list-style-type: disc;\">\n                            <li>MAKE NO REPRESENTATION OR WARRANTY ABOUT THE SERVICES, INCLUDING ANY REPRESENTATION THAT\n                                THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, AND PROVIDE THE SERVICES (INCLUDING\n                                CONTENT / INFORMATION AND MARKETPLACE STORES) ON AN \u201CAS IS\u201D AND \u201CAS AVAILABLE\u201D BASIS. TO\n                                THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, </li>\n                            <li>DISCLAIM ANY IMPLIED OR STATUTORY WARRANTY, INCLUDING ANY IMPLIED WARRANTY OF TITLE,\n                                ACCURACY OF DATA, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.\n                            </li>\n                        </ul>\n\n                    </li>\n\n                    <li>\n                        <strong class=\"ml-3\">Limitation of Liability</strong>\n                        <p class=\"ml-3\">UNDER NO CIRCUMSTANCES WILL <strong>All-Day MDR-Connect</strong> BE LIABLE FOR\n                            ANY CONSEQUENTIAL, INCIDENTAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES, INCLUDING BUT NOT\n                            LIMITED TO ANY LOST PROFITS THAT RESULT FROM YOUR CONTENT & INFORMATION DISPLAYED OR SELLING\n                            / PURCHASE OF ANY PRODUCTS ON <strong>All-Day MDR-Connect</strong>, EVEN IF MDR-Connect HAS\n                            BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. All-Day MDR-Connect LIABILITY IN ALL EVENTS\n                            IS LIMITED TO THE TRANSACTION FEE CHARGED ON THE SALES TRANSACTION FOR THE PRODUCT SALES\n                            THAT GIVES RISE TO ANY LIABILITY </p>\n                        <p class=\"ml-3\"><strong><u>Please do note in particular</u></strong></p>\n                        <p class=\"ml-3\"><strong>It is expressly agreed for purposes hereof, during the term of the\n                                Agreement, MDR-Connect shall indemnify and hold harmless from any claim, loss, liability\n                                or expense (including court costs and reasonable attorneys' fees) arising out of, or\n                                based upon any claim for indemnification, reinstatement or other legal or equitable\n                                remedy brought by Members in-appropriate Content display for Posts Management or\n                                purchase Transaction for false Promises /Delivery commitments done for the customers\n                                with in the online sales process on MDR-Connect Marketplace .</strong></p>\n                    </li>\n\n                    <li>\n                        <strong class=\"ml-3\">Intellectual Property Rights</strong>\n                        <ul class=\"ml-3\" style=\"list-style-type: disc;\">\n                            <li>We\u2019re providing you notice about our worldwide intellectual property rights.</li>\n                            <li>All-Day MDR-Connect reserves all of its intellectual property rights for the Platform\n                                services Trademarks and logos used by our members organizations on the platform profile\n                                are the trademarks of their respective Organizations. MDR-Connect, and \u201CMDR\u201D logos and\n                                other All-Day MDR-Connect trademarks, service marks, graphics and logos used for our\n                                Platforms are trademarks or registered trademarks of MDR-Connect</li>\n                        </ul>\n                    </li>\n\n                    <li>\n                        <strong class=\"ml-3\">Termination</strong>\n                        <p class=\"ml-3\">We can each end this Contract, but some rights and obligations survive. Both you\n                            and MDR-Connect may terminate this Contract at any time with notice to the other. On\n                            termination, you lose the right to access or use the Services. The following shall survive\n                            termination:</p>\n                        <ul class=\"ml-3\" style=\"list-style-type: lower-roman;\">\n                            <li>Our rights to use and disclose your feedback.</li>\n                            <li>Content already circulated or shared by you on the platform remains with the member\n                                organizations and will continue to be used by the platform.</li>\n                            <li>Any amount owed by either party prior to termination will remain payable after\n                                termination.</li>\n                            <li>Any product sold, deliveries, or service commitments must be fulfilled to the member\n                                organization based on your transaction details of the marketplace.</li>\n                            <li>You can visit our Backoffice Help Centre for more details on closing your membership\n                                account.</li>\n                        </ul>\n                    </li>\n\n                    <li>\n                        <strong class=\"ml-3\">Disputes Resolution, Governing Law &amp; Jurisdiction</strong>\n                        <ul class=\"ml-3\" style=\"list-style-type: lower-roman;\">\n                            <li>These Terms and Conditions shall be governed by and construed in accordance with the\n                                laws of India.</li>\n                            <li>Any difference, dispute, conflict, or controversy, including any question as to its\n                                existence, validity, or termination, arising out of or in connection with these Terms\n                                and Conditions (\u201CDispute\u201D) shall, if not amicably settled within 90 (ninety) days after\n                                the receipt of written notice by the parties (Member Organization & MDR-Connect), be\n                                referred to resolution.</li>\n                            <li>Such dispute shall be resolved in accordance with the Arbitration and Conciliation Act,\n                                1996 by a sole arbitrator duly appointed by MDR-Connect. The seat and venue of\n                                arbitration shall be New Delhi, and the arbitration shall be conducted in English. The\n                                award of the arbitrator shall be final and binding upon the parties. Each party shall\n                                bear its own cost of arbitration.</li>\n                            <li>The Courts at New Delhi shall have sole and exclusive jurisdiction over any matters\n                                related to these Terms and Conditions.</li>\n                        </ul>\n                    </li>\n\n                    <li>\n                        <strong class=\"ml-3\">General Terms</strong>\n                        <ul class=\"ml-3\" style=\"list-style-type: lower-alpha;\">\n                            <li>This Contract (including additional terms that may be provided by us when you engage\n                                with a feature of the other paid Services of the platform) is the only agreement between\n                                us regarding the Services and supersedes all prior agreements for the Services.</li>\n                            <li>If we don't act to enforce a breach of this Contract, that does not mean that\n                                MDR-Connect has waived its right to enforce this Contract.</li>\n                            <li>You may not assign or transfer this Contract (or your membership or use of Services of\n                                the platform) to anyone without our consent. However, you agree that MDR-Connect may\n                                assign this Contract to its affiliates or a party after Merger &amp; Acquisition without\n                                your consent. There are no third-party beneficiaries to this Contract.</li>\n                            <li>You agree that the only way to provide us legal notice is at the email or through a\n                                digital copy provided to us at our Back Office.</li>\n                        </ul>\n                    </li>\n\n                </ul>\n\n                <div class=\"ml-3\">\n                    <strong>Contact Us</strong>\n                    <address class=\"ml-3\">\n                        <p class=\"block\">Garima Kapoor</p>\n                        <p class=\"block\">Head Compliances Control \u2013 All-day MDR-Connect</p>\n                        <p class=\"block\">Garima.k@all-day.in</p>\n                        <p class=\"block\">Plot no. 530 Udyog Vihar Phase 5</p>\n                        <p class=\"block\">Gurugram - 122016</p>\n                    </address>\n                </div>\n\n\n            </div>\n        </tab> -->\n\n        <tab heading=\"Track your Registration Status\">\n            <form [formGroup]=\"trackForm\" (ngSubmit)=\"onSubmitTrack()\">\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"regId\">Enter Mobile number:</label>\n                        <input id=\"regId\" type=\"text\" formControlName=\"regId\" class=\"form-control\"\n                            placeholder=\"Enter your registered mobile number\" />\n                        <button type=\"submit\" class=\"btn custom-btn mt-3\" [disabled]=\"trackForm.invalid\">\n                            Track Application\n                        </button>\n                    </div>\n                </div>\n            </form>\n\n            <!-- Show Response -->\n            <div *ngIf=\"trackResponse\" class=\"alert alert-info mt-3\">\n                <p><strong>RegId:</strong> {{ trackResponse.RegId }}</p>\n                <p><strong>Status:</strong> {{ trackResponse.Message }}</p>\n            </div>\n        </tab>\n\n        <!-- <tab heading=\"Franchise\">\n            <div class=\"content\">\n\n                <div class=\"text-center my-4\">\n                    <img src=\"../../assets/images/finance.jpg\" alt=\"MDR Connect\"\n                        style=\"width:60vw; max-width:480px; height:auto; display:block; margin:0 auto;\" />\n\n                    <h1 class=\"mt-3\" style=\"font-size:2.4rem; font-weight:800; letter-spacing:0.5px;\">MDR-Connect</h1>\n\n                    <h2 style=\"font-size:1.6rem; font-weight:700; margin-top:.4rem;\">Connecting Businesses</h2>\n\n                    <h3 style=\"font-size:1.05rem; font-weight:700; margin-top:.6rem; color:#5a2b19;\">\n                        Offline Business Networking Franchise\n                    </h3>\n\n                    <h2 style=\"font-size:1.6rem; font-weight:800; margin-top:0.8rem; color:#5a2b19;\">\n                        MDR@CoffeeConnect Hub\n                    </h2>\n\n                    <p class=\"mt-2 mb-0\" style=\"font-style:italic; color:#333;\">\n                        (Our Offline Local/Regional Franchise Platform)\n                    </p>\n                </div>\n\n                <p class=\"mt-3 mb-3\">\n                    Our Platform MDR-Connect is an (O2O) Organization to Organization Industry-based Business Networking\n                    and\n                    E-Business Platform. Our member organization get both Online &amp; offline business networking\n                    Platforms and\n                    an offline business Networking platform for our organization members are provided from our Local\n                    Platform\n                    Ambassadors who are responsible for providing invaluable support to our regional members\n                    organizations from\n                    our Offline <strong><em>MDR@Coffeeconnect Hubs</em></strong> to access /showcase\n                </p>\n\n                <ul>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.2rem;\">&#10003;</span>\n                        <span style=\"color:#0b3d91;font-size:1.08rem;\">Their Industry Products &amp; Services by\n                            providing face to their online presence</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.2rem;\">&#10003;</span>\n                        <span style=\"color:#0b3d91;font-size:1.08rem;\">Organizing Specialized knowledge base and new\n                            upcoming trends for specific and generic business Industry events and regular business\n                            networking offline sessions</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.2rem;\">&#10003;</span>\n                        <span style=\"color:#0b3d91;font-size:1.08rem;\">Targeted offline opportunities/Events and\n                            in-person face-to-face relevant industry connections</span>\n                    </li>\n                </ul>\n\n                <p class=\"mt-3 mb-3\">\n                    Our Offline platform is embedded in the platform ensuring our organization members to have a clear\n                    plan to\n                    achieve their goals and access to the essential tools needed by focusing on face-to-Face peers\n                    networking\n                    within the industry/Cross Service industry, professionals of organizations gaining insights into\n                    niche\n                    trends, find tailored mentorship, develop strategic partnerships, and receive relevant referrals\n                    that lead\n                    to greater success than broad/general connections.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Hence, we are constantly looking forward for leading Entrepreneurs and Business Leaders in their own\n                    Industry /Cross industries Professionals to join us as <strong><em>MDR@Coffeeconnect\n                            Hubs</em></strong> to create a MACROCOSM\n                    OF\n                    INDUSTRY CONNECTIONS\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Becoming an MDR@Coffeeconnect Hub isn\u2019t just a one-of-a-kind of business move \u2014 it\u2019s a shift in\n                    mindset\u2026.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    It\u2019s about stepping into owning your own business and demonstrating\n                </p>\n\n                <ul>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Leadership role for creating a business community for their manifold growth that is\n                            directed with <strong>Purpose, Predictability, profitability &amp; Pride</strong></span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Creation of long-term subscription-based business networks and a consistent revenue for\n                            your business from our Platform and also provide an opportunity to establish /Grow your\n                            already existing chain of Caf\u00E9/Retail Businesses on Brand Royalty.</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Designing a business model of accumulated growth providing O2O platform support to various\n                            Industries</span>\n                    </li>\n                </ul>\n\n                <p class=\"mt-3 mb-3\">\n                    Being an <strong><em>MDR@Coffeeconnect hub means</em></strong> as a Business /Professional you are\n                </p>\n\n                <ul>\n                    <li class=\"mt-3 mb-3\">- Leading local /Regional community and connecting local business Enterprise\n                    </li>\n                    <li class=\"mt-3 mb-3\">- MDR-connect Platform Business Networking Regional/Local Brand Ambassador and\n                        a Group Lead for your region Business community</li>\n                    <li class=\"mt-3 mb-3\">- Growth Catalyst for <strong>MDR-Connect Platform</strong></li>\n                </ul>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    Support You will Getting from MDR-Connect Platform when you are an Offline MDR@Coffeeconnect Hub\n                </p>\n\n                <div class=\"img-container mt-2\">\n                    <img src=\"../../assets/images/franchise.jpg\"\n                        style=\"width:50vw; max-width:100%; height:auto; display:block;\" />\n                </div>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    Let\u2019s Walk thru the journey as a Pride Regional/Local Offline\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    MDR@Coffeeconnect Hub\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Franchising gives you a head start \u2014 and a higher chance of sustained success.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    AS an MDR@Coffeeconnect Hub\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    You earn recurring revenue while helping others build lasting relationships, generate referrals, and\n                    stay\n                    sharp.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Our O2O Model is designed for Today\u2019s AI Digital era for businesses so if you are thinking about\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    \u201CIs it time to build my own business?\u201D\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    \u201CDo I want recurring income and real impact?\u201D\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    \u201CAm I ready to lead and be supported?\u201D\n                </p>\n\n                <p class=\"mt-3 mb-3 text-danger font-weight-bold\">\n                    Then it might be a time to talk.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Business Entrepreneurs /Professionals/Existing Business Owners what are you waiting for??\n                </p>\n\n                <p class=\"mt-3 mb-3\"><strong>Contact us</strong></p>\n\n                <p class=\"mt-3 mb-3\" style=\"color:#0b3d91; text-decoration:underline;\">\n                    <strong>Garima.k@all-day.in</strong>\n                </p>\n\n                <p class=\"mt-3 mb-3\"><strong>Or Call us @ 8700693372</strong></p>\n\n            </div>\n        </tab> -->\n\n        <!-- <tab heading=\"Membership Type\">\n            \n        </tab> -->\n\n        <tab heading=\"Payments\">\n\n            <div *ngIf=\"showCart === false\">\n\n                <div class=\"form-group\">\n\n                    <div class=\"w-100 d-flex justify-content-end\">\n                        <button (click)=\"viewOpenCart()\" class=\"btn btn-success btn-sm px-3 ml-2\">\n                            View Open Cart\n                        </button>\n                    </div>\n\n                    <label>Member Registration ID</label>\n\n                    <div class=\"d-flex\">\n                        <input type=\"text\" class=\"form-control w-50\" [(ngModel)]=\"memberId\"\n                            placeholder=\"Enter Member ID\" />\n                        <button (click)=\"showPaymentDetails()\" class=\"btn btn-warning ml-2\">Enter</button>\n                    </div>\n\n                </div>\n\n                <div *ngIf=\"showDetails === true\" class=\"mt-3\">\n                    <p>\n                        <strong>Allocated Storecode:</strong>\n                        <span class=\"text-danger\">{{ storeCode }}</span>\n                    </p>\n                    <p>\n                        <strong>Selected Membership:</strong>\n                        <span class=\"text-primary\">{{ selectedMembership }}</span>\n                    </p>\n\n                    <div class=\"d-flex align-items-center\">\n                        <a href=\"javascript:void(0)\" class=\"text-info\">Want to Change Membership Type</a>\n                        <div class=\"ml-2\">\n                            <label class=\"mr-1\">No</label>\n                            <input type=\"radio\" name=\"changeType\" value=\"no\" [(ngModel)]=\"changeType\">\n                            <label class=\"ml-2 mr-1\">Yes</label>\n                            <input type=\"radio\" name=\"changeType\" value=\"yes\" [(ngModel)]=\"changeType\">\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"changeType === 'yes'\" class=\"mt-2\">\n                        <label>Member Type</label>\n                        <select class=\"form-control w-50\" [(ngModel)]=\"memberType\">\n                            <option value=\"MDR01\">Basic</option>\n                            <option value=\"MDR02\">Standard</option>\n                            <option value=\"MDR03\">Premium</option>\n                        </select>\n                        <button (click)=\"updateMembershipType()\" class=\"btn btn-success mt-2\">Update Type</button>\n                    </div>\n                </div>\n\n                <hr *ngIf=\"showDetails === true\" />\n\n                <div *ngIf=\"showDetails === true\">\n                    <h6 class=\"text-danger\">Payment for Service: <span class=\"text-dark\">New Member Annual Fee</span>\n                    </h6>\n\n                    <button (click)=\"showPrice()\" class=\"btn btn-warning btn-sm mb-2\">Show Price & Discounts</button>\n\n                    <div *ngIf=\"showPriceDetails === true\" class=\"border p-2 rounded bg-light\">\n                        <p><strong>Service Price:</strong> INR {{ serviceDiscount.ServicePrice }} <span\n                                class=\"text-muted\">(Premium\n                                Membership)</span></p>\n                        <p><strong>Discount:</strong> {{ serviceDiscount.Discount_Percntg }}%</p>\n                        <p><strong>GST:</strong> {{ serviceDiscount.GST_Percntg }}%</p>\n                    </div>\n                </div>\n\n                <div *ngIf=\"showPriceDetails === true\" class=\"text-center mt-3\">\n                    <button (click)=\"cartCheckout()\" class=\"btn btn-dark\">Check Out</button>\n                </div>\n\n            </div>\n\n            <div *ngIf=\"showCart === true\">\n\n                <div class=\"d-flex justify-content-between align-items-center mb-2\">\n                    <div>\n                        <p><strong>Cart ID :</strong> {{ cartDetials?.MDR_CONCT_SERVICE_CARTID || '\u2014' }}</p>\n                        <p><strong>Service ID :</strong> {{ cartDetials?.MDR_CONCT_CART_FOR_SERVICEID || '\u2014' }}</p>\n                    </div>\n\n                    <div>\n                        <button (click)=\"deleteCart()\" class=\"btn btn-danger btn-sm px-3\">Delete CART</button>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <p><strong>Membership Name :</strong> {{ cartDetials?.MDR_CONCT_STORE_MEMBRSHIP_NAME }}</p>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <p><strong>Quantity :</strong> {{ cartDetials?.MDR_CONCT_SERVICE_QUANTITY }}</p>\n                    </div>\n                </div>\n\n                <div class=\"border p-2 rounded bg-light\">\n                    <p><strong>Per Unit Cost :</strong> <span class=\"text-danger\">{{\n                            cartDetials?.MDR_CONCT_PER_UNIT_SERVICE_COST | number:'1.2-2' }}</span></p>\n                    <p><strong>Discount % :</strong> {{ cartDetials?.MDR_CONCT_SERVICE_MEMBR_DISCNT_PERCNTG }}%</p>\n                    <p><strong>GST Charged :</strong> {{ cartDetials?.MDR_CONCT_CART_GST_CHARGED_AMT | number:'1.2-2' }}\n                    </p>\n                    <p><strong>Currency :</strong> {{ cartDetials?.MDR_CONCT_SERVICE_CURRENCY }}</p>\n                </div>\n\n                <div class=\"mt-3\">\n                    <p><strong>Total Cost Before Discount :</strong> {{ cartDetials?.MDR_CONCT_PER_UNIT_SERVICE_COST |\n                        number:'1.2-2' }}</p>\n                    <p><strong>Discount Amount :</strong> {{ cartDetials?.MDR_CONCT_SERVICE_DISCNT_AMT | number:'1.2-2'\n                        }}\n                    </p>\n                    <p><strong>GST Amount :</strong> {{ cartDetials?.MDR_CONCT_CART_GST_CHARGED_AMT | number:'1.2-2' }}\n                    </p>\n                </div>\n\n                <h5 class=\"text-danger mt-3\">\n                    <strong>Total to Pay Amount :</strong>\n                    <span class=\"text-dark\">\n                        {{ cartDetials?.MDR_CONCT_CART_TOTAL_TO_PAY_AMT | number:'1.2-2' }} {{\n                        cartDetials?.MDR_CONCT_SERVICE_CURRENCY }}\n                    </span>\n                </h5>\n\n                <div class=\"text-center mt-3\">\n                    <button (click)=\"payment()\" class=\"btn btn-danger px-4 py-2 font-weight-bold\">PAY</button>\n                </div>\n\n            </div>\n\n        </tab>\n\n        <!-- <tab heading=\"Platform FAQ\">\n            <div class=\"content\">\n\n                <ol style=\"list-style:none; padding-left:0;\">\n                    <li class=\"mt-3 mdr-heading b-2\" style=\"color:#0b3d91; font-weight:700;\">\n                        <span style=\"margin-right:8px; font-weight:700;\">1.</span>\n                        What is All-Day MDR-Connect Platform?\n                    </li>\n                </ol>\n\n                <p class=\"mt-3 mb-3\">\n                    All-Day MDR-Connect is India\u2019s First Indigenous Business Networking & e-Business Platform for B2B\n                    Businesses with distribution & Market first approach for Manufacturers, Distributors, Retailers and\n                    service providers providing single integrated\n                </p>\n\n                <ul>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Profile & Connection Management</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Social Media Marketing (posts &amp; campaign management)</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>B2B Dedicated E-Commerce store marketplace for B2B products and Services Selling\n                            organizations</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>B2B Orders & Product delivery fulfillment Platform</span>\n                    </li>\n                </ul>\n\n                <p class=\"mt-3 mb-3\">\n                    Our Business Networking & Delivery platform is based on Organization entity networking\u2019s which is\n                    O2O (Organization-to-Organization) rather than Conventional P2P (Person-to-Person) inducting\n                    business organization as a member and is capable to provide full team access for the entire\n                    eco-system for your organization digital era growth so that your organization should grow on for\n                    Brand, Market Distribution and revenue by providing complete 360 degrees Business growth & delivery\n                    services on single digital integrated platform rather than conventional person based network growth\n                    & person goals.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    The Platform eco-system has two application whose access is provided to an enterprise member\n                </p>\n\n                <ul>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Back-office Application for your Enterprise MDR-Connect Set up & e-Business Order &\n                            Delivery Management</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Mobile-App for connection Management, E-commerce and Social media Management</span>\n                    </li>\n                </ul>\n\n                <ol style=\"list-style:none; padding-left:0;\">\n                    <li class=\"mt-3 mdr-heading b-2\" style=\"color:#0b3d91; font-weight:700;\">\n                        <span style=\"margin-right:8px; font-weight:700;\">2.</span>\n                        Why Should we enroll our enterprise on MDR-Connect platform and tell me how our enterprise will\n                        be\n                        showcase as a complete 360-degree digital transformed organization for our B2B Business by\n                        enrollment on this platform?\n                    </li>\n                </ol>\n\n                <p class=\"mt-3 mb-3\">\n                    Digital Enterprise is essential for your B2B businesses as our platform understand that B2B\n                    businesses are done between two organizations rather than two Individuals or persons. Today almost\n                    all networking platforms available in the market are primarily based on P2P (Person-to-Person)\n                    networking architecture whereas MDR-Connect is an Indigenous O2O (Organization-to-Organization)\n                    Networking Platform with complete B2B Landscape Networking and Business automation.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Our Platform Architecture is an organization & business Centric structured methodology-based\n                    platform keeping business only approach at its core that means it empowers your organization to\n                    evolve as Gen X/Z audience Digital B2B ready enterprise by providing:\n                </p>\n\n                <ul>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Your Organization Profile and its existence on Digital Platform to be represented\n                            as verified & trusted member organization.</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Meaningful business Channel networks creations with our platform connection &\n                            Network management services</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Digital stamped contents and its responses to be created with our platform social\n                            media Business marketing services for Business Promotions and other business\n                            functions</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Enterprise Brand & Revenue built over a business life cycle time with your\n                            dedicated B2B online e-Commerce Store 24x7 availability for global commerce.</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Standard Order & order fulfilment services so that you have a single B2B Orders\n                            Fulfilment on FIFO basis dashboard for your Business.</span>\n                    </li>\n                </ul>\n\n                <p class=\"mt-3 mb-3\">\n                    These enterprise-wide Digital footprints, business connections and organization B2B Landscape\n                    created over a period of time will be owned and honoured by your organization and not by any\n                    individual or person vis-\u00E0-vis not like traditional available P2P based networking and business\n                    Platforms where all network and digital brand is owned by person.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    The Platform also gives you the mechanism to give all/Limited team members to access and use the\n                    platform so that your team can perform their functional duties using this future ready digital\n                    platform and your business objectives are met and achieved with your organization ownership. With\n                    changing team members, you can restrict and update the access control of the platform for your team\n                    members under your flagship enterprise.\n                </p>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    <strong><u>features Available for Members for Our Online Platform</u></strong>\n                </p>\n\n                <p class=\"mt-2 ml-1 mb-3\">&bull; <strong>Organization Profile Management</strong></p>\n\n                <ul class=\"ml-2\">\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>for 360 Degree Organization Profile Management in your Industry</span>\n                    </li>\n                </ul>\n\n                <p class=\"mt-2 ml-1 mb-3\">&bull; <strong>Connection Management</strong></p>\n\n                <ul class=\"ml-2\">\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Industry based Peer organization profile listings & view\n                            detail profiles</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Connect to peer organization as seller or buyer</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Creating & managing your channel\n                            distribution network</span>\n                    </li>\n                </ul>\n\n                <p class=\"mt-2 ml-1 mb-3\">&bull; <strong>Posts & Campaign Management for Business</strong></p>\n\n                <ul class=\"ml-2\">\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Creation and publishing of Business\n                            based Image-Text based posts</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Response Management for Posts and Campaigns</span>\n                    </li>\n                </ul>\n\n                <p class=\"mt-2 ml-1 mb-3\">&bull; <strong>Video Ads Creation for Business Marketing &\n                        Advertising</strong></p>\n\n                <ul class=\"ml-2\">\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Business Video Ads\n                            displayed in App Video-Ads loop section</span>\n                    </li>\n                </ul>\n\n                <p class=\"mt-2 ml-1 mb-3\">&bull; <strong>B2B dedicated Organization brand Store for 24X7 Online\n                        selling</strong></p>\n\n                <ul class=\"ml-2\">\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Creation of a B2B dedicated brand e\u2011business store with full SKU listings\n                            management</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>SKU pricing & discount management tailored for distributors and retailers</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>SKU inventory management and curated store sections (Top Sellers, Today\u2019s Bargains,\n                            New-on-Shelf, etc.)</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Online selling with payment integration and buyer consignment delivery guarantee</span>\n                    </li>\n                </ul>\n\n                <p class=\"mt-2 ml-1 mb-3\">&bull; <strong>Listing of your SKUs on MDR-Connect Global Business B2B\n                        Store</strong></p>\n\n                <p class=\"mt-2 ml-1 mb-3\">&bull; <strong>Seller Order Delivery and Fulfillment Dashboard</strong></p>\n\n                <ul class=\"ml-2\">\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Order Delivery & Fulfillment Dashboard</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Customized Delivery & Logistic Integration (Optional Feature)</span>\n                    </li>\n                </ul>\n\n                <p class=\"mt-3 mdr-heading b-2\">\n                    <strong>Features available for our Offline Networking Platform</strong>\n                </p>\n\n                <ul>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Regular Regional & PAN India Based Industry Based Collaboration and Partnership\n                            Summits and events</span>\n                    </li>\n                    <li style=\"display:flex;align-items:flex-start;margin-bottom:0.6rem;\">\n                        <span style=\"color:green;margin-right:8px;font-size:1.05rem;\">&#10003;</span>\n                        <span>Soft skill & Business /Entrepreneurs skill development Trainings with Our Platform\n                            Train the trainers\u2019 sessions</span>\n                    </li>\n                </ul>\n\n                <ol style=\"list-style:none; padding-left:0;\">\n                    <li class=\"mt-3 mdr-heading b-2\" style=\"color:#0b3d91; font-weight:700;\">\n                        <span style=\"margin-right:8px; font-weight:700;\">3.</span>\n                        What Tangible benefits my organization will be getting by enrolling as an organization member\n                        with\n                        MDR-Connect platform?\n                    </li>\n                </ol>\n\n                <p class=\"mt-3 mb-3\">\n                    As explained above the systematic approach of building your business network and creating a\n                    well-organized B2B Landscape vis-\u00E0-vis previously used informal approach can assist your enterprise\n                    for system and data driven. This Digital enterprise MDR-Connect platform will assist MSME\u2019s and SMEs\n                    to build meaningful & secure business connections & unlock sustainable growth.\n                </p>\n\n                <p class=\"mt-3 mb-3\">\n                    Listing down some of the tangible benefits for your enterprise\n                </p>\n\n                <ul style=\"margin-top: 10px;\">\n\n                    <li class=\"mt-1 mb-3\">\n                        <strong>Establishing your enterprise as a responsive & supportive B2B Partner (Buyer/Seller or\n                            Both).</strong>\n                        Making your enterprise Digitally & E-commerce ready 24x7 B2B organization from day one with\n                        verified\n                        industry-based visibility in the markets for your products and services.\n                    </li>\n\n                    <li class=\"mt-1 mb-3\">\n                        <strong>Building and Growing long lasting business Relationships.</strong>\n                        Effective B2B networking is built on strong, genuine relationships. These connections are not\n                        just\n                        transactional\u2014they\u2019re about creating value, trust, and collaboration as platform offers an\n                        Industry based\n                        regional partners who coordinates offline face-to-face industry meets providing face to the\n                        industry relationships\n                        and provide Industry insights.\n                    </li>\n\n                    <li class=\"mt-1 mb-3\">\n                        <strong>Data & Fact-based B2B Business & growth culture across enterprise.</strong>\n                        It\u2019s important to evaluate the effectiveness of your platform-based networking strategy. By\n                        tracking key\n                        performance indicators (KPIs), you can measure your success and identify areas for Org.\n                        improvement:\n                        <ul style=\"margin-top: 6px; margin-bottom: 6px;\">\n                            <li style=\"margin-bottom: 6px;\">\n                                <strong>Lead & Revenue Generation:</strong> Tracking number-based leads, orders and\n                                effectiveness of network\n                                creations with Social Media posts Management efforts.\n                            </li>\n                            <li style=\"margin-bottom: 6px;\">\n                                <strong>Quality of Relationships:</strong> Assess the strength of your connections.\n                                Built relationships from platform\n                                leading to business & revenue generation opportunities or long-term collaborations. The\n                                data points will also\n                                establish the efficiency and consistency of your team generating business connection\n                                using platform as a marketing\n                                and delivery tool for your enterprise-wide Products and services.\n                            </li>\n                            <li>\n                                <strong>New Partnerships and Collaborations expand your reach & Brand:</strong> Platform\n                                usage initiatives will drive\n                                new partnerships formations as a result of networking & collaborations helping your\n                                business reach new markets and\n                                creation of meaningful Distribution channels and Brand creation across geographies.\n                            </li>\n                        </ul>\n                    </li>\n\n                    <li class=\"mt-1 mb-3\">\n                        <strong>Boost in enterprise-wide Growth & Profitability.</strong>\n                        Access to larger and meaningful industry-based organizations with same Q&Q (Quality and\n                        Quantity) of resources\n                        following standard business processes and using regularly all features of the platform will\n                        provide your organization a positive boost in your Brand, Revenue and Profitability.\n                    </li>\n\n                </ul>\n\n\n                <ol style=\"list-style:none; padding-left:0;\">\n                    <li class=\"mt-3 mdr-heading b-2\" style=\"color:#0b3d91; font-weight:700;\">\n                        <span style=\"margin-right:8px; font-weight:700;\">4.</span>\n                        Can my organization team be provided an access for MDR-Connect Platform?\n                    </li>\n                </ol>\n\n                <p class=\"mt-3 mb-3\">\n                    Yes, Super Admin role allocated to an organization can provide an access to your various Team\n                    members for Organization back office and Mobile app access of the platform.\n                </p>\n\n                <ol style=\"list-style:none; padding-left:0;\">\n                    <li class=\"mt-3 mdr-heading b-2\" style=\"color:#0b3d91; font-weight:700;\">\n                        <span style=\"margin-right:8px; font-weight:700;\">5.</span>\n                        How many membership types are available & Which membership type is suitable for my organization?\n                    </li>\n                </ol>\n\n                <p class=\"mt-3 mb-3\">There are four (04) types of Membership available for joining the platform \u2014 Basic,\n                    Standard, Classic, Premium</p>\n                <p class=\"mt-1 mb-3\">Talk to us for details at +91-8700693372</p>\n                <p class=\"mt-1 mb-3\">Or Refer the available membership in our Membership Type content tab</p>\n\n                <ol style=\"list-style:none; padding-left:0;\">\n                    <li class=\"mt-3 mdr-heading b-2\" style=\"color:#0b3d91; font-weight:700;\">\n                        <span style=\"margin-right:8px; font-weight:700;\">6.</span>\n                        How can I become member and pay my fresh application Membership fee for my organization?\n                    </li>\n                </ol>\n\n                <p class=\"mt-1 mb-3\">Refer http://www.shoppenation.in/#/ \u2192 MDR-Connect (Register New)</p>\n                <p class=\"mt-1 mb-3\">Fill the Membership form</p>\n                <p class=\"mt-1 mb-3\">Track Registration Status (Max 5 days validation)</p>\n                <p class=\"mt-1 mb-3\">Once approved \u2192 Make payment from Tab Payments</p>\n\n                <ol style=\"list-style:none; padding-left:0;\">\n                    <li class=\"mt-3 mdr-heading b-2\" style=\"color:#0b3d91; font-weight:700;\">\n                        <span style=\"margin-right:8px; font-weight:700;\">7.</span>\n                        If MDR-Connect Platform provides Referral schemes benefits and what are those criteria to get\n                        benefits of providing referrals for my organization membership?\n                    </li>\n                </ol>\n\n                <p class=\"mt-3 mb-3\">\n                    Our platform is also a community building platform and we believe in our ancient philosophy of\n                    \u201CVasudhaIva Kutumbakam\u201D. To encourage referral-based community building we provide discount of 100%\n                    Annual Membership Fee / Pro-rata basis discounting for provided annual referrals based on business\n                    growth parameters and for promoting businesses of fellow members.\n                </p>\n\n                <p class=\"mt-1 mb-3\">\n                    For detail, please refer our MDR-Connect Membership Terms and conditions agreement Point (V) - and\n                    Refer -f Section\n                </p>\n\n            </div>\n        </tab> -->\n\n        <!-- <tab heading=\"Contact Us\">\n\n        </tab> -->\n\n    </tabset>\n</div>", styles: [".login-field {\r\n  padding: 0 10px;\r\n}\r\n\r\nlabel.form-forget {\r\n  float: right;\r\n  color: #007bff;\r\n  font-size: 12px;\r\n  padding: 3px;\r\n}\r\n\r\n.form-control input[type=\"text\"],\r\nform-control input[type=\"password\"] {\r\n  height: 40px;\r\n}\r\n\r\n/* button.close {\r\n    margin: 10px;\r\n    font-size: 30px;\r\n} */\r\n\r\n.input-group {\r\n  max-width: 100%;\r\n}\r\n\r\n.input-group .btn {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0 1rem;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.login-field .form-group label {\r\n  font-weight: 600;\r\n}\r\n\r\nbutton.reg-close {\r\n  width: 30px;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  font-size: 30px;\r\n}\r\n\r\nbutton.btn.custom-btn[type=\"submit\"] {\r\n  background: #ba080b;\r\n}\r\n\r\n.login-field .bottom-btn .btn {\r\n  min-width: 130px;\r\n}\r\n\r\n.highlight {\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  color: #d49100;\r\n  text-align: center;\r\n  margin-top: 30px;\r\n  text-decoration: underline;\r\n  text-decoration-thickness: 3px;\r\n  text-underline-offset: 6px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.mdr-heading {\r\n  font-size: larger;\r\n  font-weight: 600;\r\n}\r\n\r\n.mdr-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  font-family: Arial, sans-serif;\r\n  font-size: x-small;\r\n}\r\n\r\nth,\r\ntd {\r\n  border: 1px solid #999;\r\n  padding: 8px;\r\n  text-align: left;\r\n}\r\n\r\nth {\r\n  background-color: #f2c100;\r\n}\r\n\r\n.section-header {\r\n  background-color: #f9f9f9;\r\n  font-weight: bold;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  width: 100%;\r\n  /* justify-content: center;\r\n    align-items: center; */\r\n}\r\n\r\n.mdrimg {\r\n  width: 25%;\r\n}\r\n\r\n.readmore {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100%;\r\n\r\n  p {\r\n    text-decoration: black;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.makepayment {\r\n  p {\r\n    font-size: medium;\r\n    color: #d49100;\r\n    font-weight: 600;\r\n  }\r\n\r\n  border: 1px solid #f74a4a;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n::ng-deep .nav-tabs > li > a {\r\n  font-size: 8.7px; \r\n}\r\n\r\n.rounded-border {\r\n  border: 1.5px solid #ccc; \r\n  border-radius: 8px;     \r\n  padding: 12px;          \r\n}\r\n\r\n.membership-checkout label {\r\n  font-weight: 500;\r\n}\r\n\r\n.membership-checkout .btn-warning {\r\n  background-color: #ff9900;\r\n  border: none;\r\n  color: #fff;\r\n  font-weight: 500;\r\n}\r\n\r\n.membership-checkout .btn-dark {\r\n  background-color: #000;\r\n  color: #fff;\r\n  font-weight: 600;\r\n}\r\n\r\n.cart-summary p {\r\n  margin-bottom: 4px;\r\n  font-size: 14px;\r\n}\r\n\r\n.cart-summary .btn-danger {\r\n  background-color: #c00;\r\n  border: none;\r\n  font-weight: 600;\r\n}\r\n\r\n.cart-summary h5 {\r\n  font-weight: 700;\r\n  color: #990000;\r\n}\r\n\r\n.cart-summary .btn-danger:hover {\r\n  background-color: #a60000;\r\n}\r\n\r\n.custom-header {\r\n  position: relative;\r\n  padding: 10px 25px;\r\n  border-bottom: none;\r\n  height: 110px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.img-container {\r\n  flex: 0 0 auto;\r\n}\r\n\r\n.mdrimg {\r\n  height: 90px;\r\n  width: auto;\r\n}\r\n\r\n.title-wrapper {\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  text-align: center;\r\n  line-height: 32px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.modal-title:first-child {\r\n  font-size: 34px;\r\n  font-weight: 700;\r\n  color: #000;\r\n  margin: 0;\r\n}\r\n\r\n.modal-title:nth-child(2) {\r\n  font-size: 28px;\r\n  font-weight: 600;\r\n  color: #7a7a7a;\r\n  margin: 0;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 25px;\r\n  background: none;\r\n  border: none;\r\n  font-size: 32px;\r\n  cursor: pointer;\r\n  color: #575757;\r\n  z-index: 10;\r\n}\r\n\r\n.close-btn:hover {\r\n  color: #000;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .custom-header {\r\n    display: flex;\r\n    align-items: flex-start;   /* \uD83D\uDD25 important */\r\n    justify-content: space-between;\r\n    padding: 10px 12px;\r\n    gap: 10px;\r\n  }\r\n\r\n  .header-left {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 10px;\r\n    flex: 1;\r\n    min-width: 0;\r\n  }\r\n\r\n  .mdrimg {\r\n    height: 40px;\r\n    width: auto;\r\n  }\r\n\r\n  .title-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    line-height: 1.2;\r\n  }\r\n\r\n  .modal-title {\r\n    font-size: 14px;\r\n    margin: 0;\r\n  }\r\n\r\n  .modal-title.subtitle {\r\n    font-size: 12px;\r\n    color: #7a8896;\r\n  }\r\n\r\n  .close-btn {\r\n    font-size: 22px;\r\n    line-height: 1;\r\n  }\r\n}\r\n\r\n/* ================= DESKTOP FIX ================= */\r\n@media (min-width: 769px) {\r\n\r\n  .custom-header {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    align-items: center;\r\n    padding: 15px 20px;\r\n  }\r\n\r\n  /* LEFT: LOGO ONLY */\r\n  .header-left {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .img-container {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .mdrimg {\r\n    height: 60px;   /* restore proper desktop size */\r\n    width: auto;\r\n  }\r\n\r\n  /* \uD83D\uDD25 CENTER TITLE */\r\n  .title-wrapper {\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n\r\n  .modal-title {\r\n    margin: 0;\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .modal-title.subtitle {\r\n    font-size: 22px;\r\n    color: #7a8896;\r\n    font-weight: 600;\r\n  }\r\n\r\n  /* RIGHT: CLOSE */\r\n  .close-btn {\r\n    font-size: 28px;\r\n    justify-self: end;\r\n  }\r\n}"] }]
    }], function () { return [{ type: i1.BsModalRef }, { type: i2.ApiService }, { type: i3.LocationService }, { type: i4.ToastrService }, { type: i5.FormBuilder }, { type: i1.BsModalService }, { type: i6.RazorpayService }, { type: i7.PaymentStatusService }]; }, { countryEvent: [{
            type: Output
        }], stateEvent: [{
            type: Output
        }], cityEvent: [{
            type: Output
        }], pincodeEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=mdr-connect.component.js.map