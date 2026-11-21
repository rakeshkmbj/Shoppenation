import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "ngx-toastr";
import * as i6 from "ngx-spinner";
import * as i7 from "@angular/common";
import * as i8 from "ngx-bootstrap/tabs";
function DrugManagementComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 21);
    i0.ɵɵtext(2, " No records found ");
    i0.ɵɵelementEnd()();
} }
function DrugManagementComponent_ng_template_82_option_95_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 234);
    i0.ɵɵtext(1, "GPCR ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_96_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 235);
    i0.ɵɵtext(1, "Nuclear Receptors");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_97_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 236);
    i0.ɵɵtext(1, " Ligand-Gated Ion Channel Receptors");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_98_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 237);
    i0.ɵɵtext(1, " Tyrosine Kinase Receptors");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_99_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 238);
    i0.ɵɵtext(1, "Kinases ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_100_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 239);
    i0.ɵɵtext(1, " Proteases");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_101_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 240);
    i0.ɵɵtext(1, " Oxidoreductases");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_102_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 241);
    i0.ɵɵtext(1, " Transferases");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_103_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 242);
    i0.ɵɵtext(1, " Voltage-Gated Channels");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_104_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 243);
    i0.ɵɵtext(1, " Ligand-Gated Channels");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 244);
    i0.ɵɵtext(1, " Neurotransmitter Transporters");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_106_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 245);
    i0.ɵɵtext(1, "Efflux Transporters");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_107_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 246);
    i0.ɵɵtext(1, "Uptake Transporters");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_108_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 247);
    i0.ɵɵtext(1, "DNA ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_109_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 248);
    i0.ɵɵtext(1, "RNA ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_110_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 249);
    i0.ɵɵtext(1, " Cytoskeletal Proteins");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_111_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 250);
    i0.ɵɵtext(1, "Immune Checkpoints");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_112_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 251);
    i0.ɵɵtext(1, " Protein Complexes");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_119_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Adrenergic Receptors");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_120_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Dopamine Receptors");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_121_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Serotonin Receptors");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_122_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Estrogen Receptor (ER)");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_123_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Androgen Receptor (AR)");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_124_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "NMDA Receptor ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_125_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "GABA-A Receptor ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_126_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "EGFR");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_127_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "VEGFR");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_128_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Tyrosine Kinases (EGFR, BCR-ABL)");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_129_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Serine/Threonine Kinases");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_130_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "HIV Protease ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_131_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Thrombin");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_132_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "COX-1");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_133_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "COX-2");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_134_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "DNA Polymerase ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_135_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Sodium Channels (Nav1.5)");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_136_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Calcium Channels (L-type)");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_137_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Potassium Channels");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_138_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Nicotinic ACh Channel");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_139_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "SERT");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_140_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "DAT");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_141_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "P-gp");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_142_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "GLUT1");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_143_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "SGLT2");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_144_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "DNA Topoisomerase");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_145_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "DNA Polymerase ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_146_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "mRNA (antisense targets)");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_147_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Tubulin");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_148_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Actin");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_149_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "PD-1");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_150_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "PD-L1");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_151_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, "Ribosome ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_163_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 252);
    i0.ɵɵtext(1, " Oral (PO) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_164_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 253);
    i0.ɵɵtext(1, " Sublingual / Buccal ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_165_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 254);
    i0.ɵɵtext(1, " Rectal ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_166_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 255);
    i0.ɵɵtext(1, " Intravenous (IV) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_167_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 256);
    i0.ɵɵtext(1, " Intramuscular (IM) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_168_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 257);
    i0.ɵɵtext(1, " Subcutaneous (SC) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_169_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 258);
    i0.ɵɵtext(1, " Intradermal ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_170_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 259);
    i0.ɵɵtext(1, " Inhalation ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_171_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 260);
    i0.ɵɵtext(1, " Transdermal ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_172_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 261);
    i0.ɵɵtext(1, " Dermal / Cutaneous ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_173_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 262);
    i0.ɵɵtext(1, " Mucosal ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_233_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " LC-MS/MS (Liquid Chromatography-Tandem Mass Spectrometry) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_234_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " GC-MS (Gas Chromatography-Mass Spectrometry) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_235_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " Sample Preparation (PPT/SPE/LLE) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_236_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " Ligand Binding Assays (LBA) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_237_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " Hybrid LBA/LC-MS/MS ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_238_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " Mass Spectrometry (HRMS) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_239_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " Capillary Electrophoresis (CE) Immunoassay ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_240_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " Flow Cytometry (FACS) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_241_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " qPCR/ddPCR ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_242_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " ELISpot (Enzyme-Linked ImmunoSpot) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_243_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " qPCR (Quantitative PCR) & RT-qPCR ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_244_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " ddPCR (Droplet Digital PCR) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_245_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " Hybridization-based ELISA ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_option_246_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1, " Next-Generation Sequencing (NGS) ");
    i0.ɵɵelementEnd();
} }
function DrugManagementComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "h4", 23);
    i0.ɵɵtext(2, "PK (Drug KBase)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 24);
    i0.ɵɵlistener("click", function DrugManagementComponent_ng_template_82_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r81); const ctx_r80 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r80.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 25);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 26)(7, "div", 27)(8, "tabset", 28)(9, "tab", 29)(10, "form", 30)(11, "div", 31)(12, "div", 32)(13, "div", 33)(14, "label");
    i0.ɵɵtext(15, "Subitem id");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "input", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 35)(18, "label");
    i0.ɵɵtext(19, "Drug Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 32)(22, "div", 37)(23, "label");
    i0.ɵɵtext(24, "Drug Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 38)(26, "option", 39);
    i0.ɵɵtext(27, "Select Drug Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option");
    i0.ɵɵtext(29, "Small Molecule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option");
    i0.ɵɵtext(31, "Biologic");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option");
    i0.ɵɵtext(33, "Cellular");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option");
    i0.ɵɵtext(35, "Gene Therapy");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "div", 37)(37, "label");
    i0.ɵɵtext(38, "Drug Form");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "select", 40)(40, "option", 39);
    i0.ɵɵtext(41, "Select Form");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "option");
    i0.ɵɵtext(43, "Tablet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "option");
    i0.ɵɵtext(45, "Capsule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "option");
    i0.ɵɵtext(47, "Injection");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "option");
    i0.ɵɵtext(49, "Syrup");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "option");
    i0.ɵɵtext(51, "Cream");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "option");
    i0.ɵɵtext(53, "Ointment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "option");
    i0.ɵɵtext(55, "Aerosols");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(56, "div", 37)(57, "label");
    i0.ɵɵtext(58, "Route of Administration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "select", 41)(60, "option", 39);
    i0.ɵɵtext(61, "Select Route");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "option");
    i0.ɵɵtext(63, "Internal (Gastrointestinal)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "option");
    i0.ɵɵtext(65, "Parenteral");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "option");
    i0.ɵɵtext(67, "Topical");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(68, "div", 32)(69, "div", 33)(70, "label");
    i0.ɵɵtext(71, "Target Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "select", 42)(73, "option", 39);
    i0.ɵɵtext(74, "Select Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "option", 43);
    i0.ɵɵtext(76, "Receptors");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "option", 44);
    i0.ɵɵtext(78, "Enzymes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "option", 45);
    i0.ɵɵtext(80, "Ion Channels");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "option", 46);
    i0.ɵɵtext(82, "Transporters");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "option", 47);
    i0.ɵɵtext(84, "Nucleic Acids / Genetic Targets");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "option", 48);
    i0.ɵɵtext(86, "Structural Proteins");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "option", 49);
    i0.ɵɵtext(88, "Others (Emerging/Complex)");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(89, "div", 33)(90, "label");
    i0.ɵɵtext(91, "Target Family");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "select", 50)(93, "option", 39);
    i0.ɵɵtext(94, "Select Family");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(95, DrugManagementComponent_ng_template_82_option_95_Template, 2, 0, "option", 51);
    i0.ɵɵtemplate(96, DrugManagementComponent_ng_template_82_option_96_Template, 2, 0, "option", 52);
    i0.ɵɵtemplate(97, DrugManagementComponent_ng_template_82_option_97_Template, 2, 0, "option", 53);
    i0.ɵɵtemplate(98, DrugManagementComponent_ng_template_82_option_98_Template, 2, 0, "option", 54);
    i0.ɵɵtemplate(99, DrugManagementComponent_ng_template_82_option_99_Template, 2, 0, "option", 55);
    i0.ɵɵtemplate(100, DrugManagementComponent_ng_template_82_option_100_Template, 2, 0, "option", 56);
    i0.ɵɵtemplate(101, DrugManagementComponent_ng_template_82_option_101_Template, 2, 0, "option", 57);
    i0.ɵɵtemplate(102, DrugManagementComponent_ng_template_82_option_102_Template, 2, 0, "option", 58);
    i0.ɵɵtemplate(103, DrugManagementComponent_ng_template_82_option_103_Template, 2, 0, "option", 59);
    i0.ɵɵtemplate(104, DrugManagementComponent_ng_template_82_option_104_Template, 2, 0, "option", 60);
    i0.ɵɵtemplate(105, DrugManagementComponent_ng_template_82_option_105_Template, 2, 0, "option", 61);
    i0.ɵɵtemplate(106, DrugManagementComponent_ng_template_82_option_106_Template, 2, 0, "option", 62);
    i0.ɵɵtemplate(107, DrugManagementComponent_ng_template_82_option_107_Template, 2, 0, "option", 63);
    i0.ɵɵtemplate(108, DrugManagementComponent_ng_template_82_option_108_Template, 2, 0, "option", 64);
    i0.ɵɵtemplate(109, DrugManagementComponent_ng_template_82_option_109_Template, 2, 0, "option", 65);
    i0.ɵɵtemplate(110, DrugManagementComponent_ng_template_82_option_110_Template, 2, 0, "option", 66);
    i0.ɵɵtemplate(111, DrugManagementComponent_ng_template_82_option_111_Template, 2, 0, "option", 67);
    i0.ɵɵtemplate(112, DrugManagementComponent_ng_template_82_option_112_Template, 2, 0, "option", 68);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(113, "div", 33)(114, "label");
    i0.ɵɵtext(115, "Target Subtype");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(116, "select", 69)(117, "option", 39);
    i0.ɵɵtext(118, "Select Subtype");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(119, DrugManagementComponent_ng_template_82_option_119_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(120, DrugManagementComponent_ng_template_82_option_120_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(121, DrugManagementComponent_ng_template_82_option_121_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(122, DrugManagementComponent_ng_template_82_option_122_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(123, DrugManagementComponent_ng_template_82_option_123_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(124, DrugManagementComponent_ng_template_82_option_124_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(125, DrugManagementComponent_ng_template_82_option_125_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(126, DrugManagementComponent_ng_template_82_option_126_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(127, DrugManagementComponent_ng_template_82_option_127_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(128, DrugManagementComponent_ng_template_82_option_128_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(129, DrugManagementComponent_ng_template_82_option_129_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(130, DrugManagementComponent_ng_template_82_option_130_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(131, DrugManagementComponent_ng_template_82_option_131_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(132, DrugManagementComponent_ng_template_82_option_132_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(133, DrugManagementComponent_ng_template_82_option_133_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(134, DrugManagementComponent_ng_template_82_option_134_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(135, DrugManagementComponent_ng_template_82_option_135_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(136, DrugManagementComponent_ng_template_82_option_136_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(137, DrugManagementComponent_ng_template_82_option_137_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(138, DrugManagementComponent_ng_template_82_option_138_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(139, DrugManagementComponent_ng_template_82_option_139_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(140, DrugManagementComponent_ng_template_82_option_140_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(141, DrugManagementComponent_ng_template_82_option_141_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(142, DrugManagementComponent_ng_template_82_option_142_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(143, DrugManagementComponent_ng_template_82_option_143_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(144, DrugManagementComponent_ng_template_82_option_144_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(145, DrugManagementComponent_ng_template_82_option_145_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(146, DrugManagementComponent_ng_template_82_option_146_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(147, DrugManagementComponent_ng_template_82_option_147_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(148, DrugManagementComponent_ng_template_82_option_148_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(149, DrugManagementComponent_ng_template_82_option_149_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(150, DrugManagementComponent_ng_template_82_option_150_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(151, DrugManagementComponent_ng_template_82_option_151_Template, 2, 0, "option", 70);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(152, "div", 33)(153, "label");
    i0.ɵɵtext(154, "Specific Target");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(155, "input", 71);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(156, "div", 32)(157, "div", 37)(158, "label");
    i0.ɵɵtext(159, "Sub Route of Administration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(160, "select", 72)(161, "option", 39);
    i0.ɵɵtext(162, "Select Sub Route");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(163, DrugManagementComponent_ng_template_82_option_163_Template, 2, 0, "option", 73);
    i0.ɵɵtemplate(164, DrugManagementComponent_ng_template_82_option_164_Template, 2, 0, "option", 74);
    i0.ɵɵtemplate(165, DrugManagementComponent_ng_template_82_option_165_Template, 2, 0, "option", 75);
    i0.ɵɵtemplate(166, DrugManagementComponent_ng_template_82_option_166_Template, 2, 0, "option", 76);
    i0.ɵɵtemplate(167, DrugManagementComponent_ng_template_82_option_167_Template, 2, 0, "option", 77);
    i0.ɵɵtemplate(168, DrugManagementComponent_ng_template_82_option_168_Template, 2, 0, "option", 78);
    i0.ɵɵtemplate(169, DrugManagementComponent_ng_template_82_option_169_Template, 2, 0, "option", 79);
    i0.ɵɵtemplate(170, DrugManagementComponent_ng_template_82_option_170_Template, 2, 0, "option", 80);
    i0.ɵɵtemplate(171, DrugManagementComponent_ng_template_82_option_171_Template, 2, 0, "option", 81);
    i0.ɵɵtemplate(172, DrugManagementComponent_ng_template_82_option_172_Template, 2, 0, "option", 82);
    i0.ɵɵtemplate(173, DrugManagementComponent_ng_template_82_option_173_Template, 2, 0, "option", 83);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(174, "div", 37)(175, "label");
    i0.ɵɵtext(176, "Drug Strength");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(177, "input", 84);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(178, "div", 37)(179, "label");
    i0.ɵɵtext(180, "MU");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(181, "select", 85)(182, "option");
    i0.ɵɵtext(183, "mg");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(184, "option");
    i0.ɵɵtext(185, "g");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(186, "option");
    i0.ɵɵtext(187, "mcg");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(188, "option");
    i0.ɵɵtext(189, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(190, "option");
    i0.ɵɵtext(191, "mg/mL");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(192, "div", 32)(193, "div", 37)(194, "label");
    i0.ɵɵtext(195, "Drug Ref Product");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(196, "input", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(197, "div", 37)(198, "label");
    i0.ɵɵtext(199, "Drug Study Type Population");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(200, "select", 87)(201, "option");
    i0.ɵɵtext(202, "Healthy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(203, "option");
    i0.ɵɵtext(204, "Patients");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(205, "option");
    i0.ɵɵtext(206, "Healthy & Patients");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(207, "div", 32)(208, "div", 37)(209, "label");
    i0.ɵɵtext(210, "Drug Phase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(211, "input", 88);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(212, "div", 37)(213, "label");
    i0.ɵɵtext(214, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(215, "select", 89)(216, "option", 90);
    i0.ɵɵtext(217, "Select");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(218, "div", 37)(219, "label");
    i0.ɵɵtext(220, "Sponsor");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(221, "input", 91);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(222, "div", 32)(223, "div", 92)(224, "label");
    i0.ɵɵtext(225, "Dose Unit");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(226, "input", 93);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(227, "div", 92)(228, "label");
    i0.ɵɵtext(229, "Bioanalytical Method");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(230, "select", 94)(231, "option", 39);
    i0.ɵɵtext(232, "Select Method");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(233, DrugManagementComponent_ng_template_82_option_233_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(234, DrugManagementComponent_ng_template_82_option_234_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(235, DrugManagementComponent_ng_template_82_option_235_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(236, DrugManagementComponent_ng_template_82_option_236_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(237, DrugManagementComponent_ng_template_82_option_237_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(238, DrugManagementComponent_ng_template_82_option_238_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(239, DrugManagementComponent_ng_template_82_option_239_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(240, DrugManagementComponent_ng_template_82_option_240_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(241, DrugManagementComponent_ng_template_82_option_241_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(242, DrugManagementComponent_ng_template_82_option_242_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(243, DrugManagementComponent_ng_template_82_option_243_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(244, DrugManagementComponent_ng_template_82_option_244_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(245, DrugManagementComponent_ng_template_82_option_245_Template, 2, 0, "option", 70);
    i0.ɵɵtemplate(246, DrugManagementComponent_ng_template_82_option_246_Template, 2, 0, "option", 70);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(247, "div", 95)(248, "div", 37)(249, "label");
    i0.ɵɵtext(250, "Var 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(251, "input", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(252, "div", 37)(253, "label");
    i0.ɵɵtext(254, "Var 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(255, "input", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(256, "div", 37)(257, "label");
    i0.ɵɵtext(258, "Var 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(259, "input", 98);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(260, "tab", 99)(261, "form", 30)(262, "div", 31)(263, "div", 32)(264, "div", 3)(265, "h5", 100);
    i0.ɵɵtext(266, "BIO-Availability");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(267, "div", 101)(268, "div", 102)(269, "label");
    i0.ɵɵtext(270, "Drug Bioavailability (BA) Detail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(271, "textarea", 103);
    i0.ɵɵtext(272, "                                    ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(273, "div", 32)(274, "div", 37)(275, "label");
    i0.ɵɵtext(276, "AUC (Area under Curve) ORAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(277, "input", 104);
    i0.ɵɵelementStart(278, "label", 105);
    i0.ɵɵtext(279, "Drug Dose ORAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(280, "input", 106);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(281, "div", 37)(282, "label");
    i0.ɵɵtext(283, "AUC (Area under Curve) IV");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(284, "input", 107);
    i0.ɵɵelementStart(285, "label", 105);
    i0.ɵɵtext(286, "Drug Dose IV");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(287, "input", 108);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(288, "div", 37)(289, "label");
    i0.ɵɵtext(290, "Drug (Absolute) BA-f%");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(291, "input", 109);
    i0.ɵɵelementStart(292, "label", 105);
    i0.ɵɵtext(293, "Drug (Relative) F%");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(294, "input", 110);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(295, "div", 32)(296, "div", 33)(297, "label");
    i0.ɵɵtext(298, "Drug Tmax (Hours)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(299, "input", 111);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(300, "div", 33)(301, "label");
    i0.ɵɵtext(302, "Drug Cmax (ng/mL)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(303, "input", 112);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(304, "div", 33)(305, "label");
    i0.ɵɵtext(306, "Drug Ka (Speed of Absorption)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(307, "input", 113);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(308, "div", 32)(309, "div", 33)(310, "label");
    i0.ɵɵtext(311, "pKa (Acid/Base Dissociation)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(312, "input", 114);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(313, "div", 33)(314, "label");
    i0.ɵɵtext(315, "BA (Food Effects)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(316, "select", 115)(317, "option", 39);
    i0.ɵɵtext(318, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(319, "option", 116);
    i0.ɵɵtext(320, "None");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(321, "option", 117);
    i0.ɵɵtext(322, "Increases");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(323, "option", 118);
    i0.ɵɵtext(324, "Decreases");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(325, "div", 33)(326, "label");
    i0.ɵɵtext(327, "Drug BA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(328, "select", 119)(329, "option", 39);
    i0.ɵɵtext(330, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(331, "option", 120);
    i0.ɵɵtext(332, "High");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(333, "option", 121);
    i0.ɵɵtext(334, "Moderate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(335, "option", 122);
    i0.ɵɵtext(336, "Low");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(337, "div", 32)(338, "div", 33)(339, "div", 123);
    i0.ɵɵelement(340, "input", 124);
    i0.ɵɵelementStart(341, "label", 125);
    i0.ɵɵtext(342, " BA-Gastric PH Dependence ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(343, "div", 123);
    i0.ɵɵelement(344, "input", 126);
    i0.ɵɵelementStart(345, "label", 125);
    i0.ɵɵtext(346, " BA-Support 2 Table ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(347, "div", 123);
    i0.ɵɵelement(348, "input", 127);
    i0.ɵɵelementStart(349, "label", 125);
    i0.ɵɵtext(350, " BA-Accessed using Feed ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(351, "div", 33)(352, "div", 123);
    i0.ɵɵelement(353, "input", 128);
    i0.ɵɵelementStart(354, "label", 125);
    i0.ɵɵtext(355, " BA-Firstpass Metabolism ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(356, "div", 123);
    i0.ɵɵelement(357, "input", 129);
    i0.ɵɵelementStart(358, "label", 125);
    i0.ɵɵtext(359, " BA-Measured Using AUC ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(360, "div", 123);
    i0.ɵɵelement(361, "input", 130);
    i0.ɵɵelementStart(362, "label", 125);
    i0.ɵɵtext(363, " BA-Changes using Dose Escalation ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(364, "div", 33)(365, "div", 123);
    i0.ɵɵelement(366, "input", 131);
    i0.ɵɵelementStart(367, "label", 125);
    i0.ɵɵtext(368, " BA-Consistent Patient ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(369, "div", 123);
    i0.ɵɵelement(370, "input", 132);
    i0.ɵɵelementStart(371, "label", 125);
    i0.ɵɵtext(372, " BA-Measured Using Cmax ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(373, "div", 123);
    i0.ɵɵelement(374, "input", 133);
    i0.ɵɵelementStart(375, "label", 125);
    i0.ɵɵtext(376, " BA-PGP Substrate ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(377, "div", 33)(378, "div", 123);
    i0.ɵɵelement(379, "input", 134);
    i0.ɵɵelementStart(380, "label", 125);
    i0.ɵɵtext(381, " BA-Support 1 Table ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(382, "div", 123);
    i0.ɵɵelement(383, "input", 135);
    i0.ɵɵelementStart(384, "label", 125);
    i0.ɵɵtext(385, " BA-Accessed using Fasting ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(386, "div", 95)(387, "div", 37)(388, "div", 136);
    i0.ɵɵelement(389, "input", 137);
    i0.ɵɵelementStart(390, "label", 125);
    i0.ɵɵtext(391, " Drug-SC-Lymphatic-Uptake ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(392, "div", 37)(393, "label");
    i0.ɵɵtext(394, "Drug-Cell-Engraftment Rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(395, "input", 138);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(396, "div", 37)(397, "label");
    i0.ɵɵtext(398, "Drug Vector Entry Rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(399, "input", 139);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(400, "div", 95)(401, "div", 37)(402, "label");
    i0.ɵɵtext(403, "Var 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(404, "input", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(405, "div", 37)(406, "label");
    i0.ɵɵtext(407, "Var 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(408, "input", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(409, "div", 37)(410, "label");
    i0.ɵɵtext(411, "Var 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(412, "input", 98);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(413, "div", 95)(414, "div", 3)(415, "label");
    i0.ɵɵtext(416, " Drug Eagent Clinical Ref, On BioAvailability ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(417, "textarea", 140);
    i0.ɵɵtext(418, "                                    ");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(419, "tab", 141)(420, "form", 30)(421, "div", 31)(422, "div", 32)(423, "div", 3)(424, "h5", 100);
    i0.ɵɵtext(425, " Distribution ");
    i0.ɵɵelementStart(426, "span", 142);
    i0.ɵɵtext(427, " Where The Drugs goes in the Body ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(428, "div", 95)(429, "div", 37)(430, "label");
    i0.ɵɵtext(431, "Drug Volume of Distribution (Vd)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(432, "small", 143);
    i0.ɵɵtext(433, " (Tissue Penetration) ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(434, "input", 144);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(435, "div", 37)(436, "label");
    i0.ɵɵtext(437, "Drug Plasma Protein Binding %");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(438, "input", 145);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(439, "div", 146)(440, "div", 136);
    i0.ɵɵelement(441, "input", 147);
    i0.ɵɵelementStart(442, "label", 125);
    i0.ɵɵtext(443, " Drug BBB Penetration ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(444, "div", 95)(445, "div", 37)(446, "label");
    i0.ɵɵtext(447, "Drug Tissue Selectivity");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(448, "input", 148);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(449, "div", 146)(450, "div", 136);
    i0.ɵɵelement(451, "input", 149);
    i0.ɵɵelementStart(452, "label", 125);
    i0.ɵɵtext(453, " Drug Placental Transfer ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(454, "div", 146)(455, "div", 136);
    i0.ɵɵelement(456, "input", 150);
    i0.ɵɵelementStart(457, "label", 125);
    i0.ɵɵtext(458, " Drug Breast Milk Excretion ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(459, "div", 95)(460, "div", 37)(461, "label");
    i0.ɵɵtext(462, "Var 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(463, "input", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(464, "div", 37)(465, "label");
    i0.ɵɵtext(466, "Var 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(467, "input", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(468, "div", 37)(469, "label");
    i0.ɵɵtext(470, "Var 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(471, "input", 98);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(472, "div", 95)(473, "div", 3)(474, "label");
    i0.ɵɵtext(475, "Distribution Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(476, "textarea", 151);
    i0.ɵɵtext(477, "                                    ");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(478, "tab", 152)(479, "form", 30)(480, "div", 31)(481, "div", 32)(482, "div", 3)(483, "h5", 100);
    i0.ɵɵtext(484, " Metabolism ");
    i0.ɵɵelementStart(485, "span", 142);
    i0.ɵɵtext(486, " How the Drug is Bio-Transformed ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(487, "div", 95)(488, "div", 37)(489, "label");
    i0.ɵɵtext(490, "Drug Primary Metabolism Organ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(491, "select", 153)(492, "option", 39);
    i0.ɵɵtext(493, "Select Organ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(494, "option", 154);
    i0.ɵɵtext(495, "Liver");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(496, "option", 155);
    i0.ɵɵtext(497, "Gut");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(498, "option", 156);
    i0.ɵɵtext(499, "Plasma");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(500, "div", 37)(501, "label");
    i0.ɵɵtext(502, "Drug Hepatic Clearance");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(503, "input", 157);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(504, "div", 37)(505, "label");
    i0.ɵɵtext(506, "Drug Intrinsic Clearance");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(507, "input", 158);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(508, "div", 95)(509, "div", 37)(510, "label");
    i0.ɵɵtext(511, "Drug Enzyme Involved");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(512, "input", 159);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(513, "div", 146)(514, "div", 136);
    i0.ɵɵelement(515, "input", 160);
    i0.ɵɵelementStart(516, "label", 125);
    i0.ɵɵtext(517, " Drug Enzyme Inhibitor ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(518, "div", 146)(519, "div", 136);
    i0.ɵɵelement(520, "input", 161);
    i0.ɵɵelementStart(521, "label", 125);
    i0.ɵɵtext(522, " Drug Enzyme Inducer ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(523, "div", 95)(524, "div", 146)(525, "div", 136);
    i0.ɵɵelement(526, "input", 162);
    i0.ɵɵelementStart(527, "label", 125);
    i0.ɵɵtext(528, " Drug Active Metabolites ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(529, "div", 37)(530, "label");
    i0.ɵɵtext(531, "Drug Metabolites Potency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(532, "select", 163)(533, "option", 39);
    i0.ɵɵtext(534, "Select Potency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(535, "option", 164);
    i0.ɵɵtext(536, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(537, "option", 165);
    i0.ɵɵtext(538, "Less Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(539, "option", 166);
    i0.ɵɵtext(540, "Toxic");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(541, "div", 146)(542, "div", 136);
    i0.ɵɵelement(543, "input", 167);
    i0.ɵɵelementStart(544, "label", 125);
    i0.ɵɵtext(545, " Drug Genetic Polymorphism Impact ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(546, "div", 95)(547, "div", 37)(548, "label");
    i0.ɵɵtext(549, "Var 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(550, "input", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(551, "div", 37)(552, "label");
    i0.ɵɵtext(553, "Var 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(554, "input", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(555, "div", 37)(556, "label");
    i0.ɵɵtext(557, "Var 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(558, "input", 98);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(559, "div", 95)(560, "div", 3)(561, "label");
    i0.ɵɵtext(562, "Metabolism Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(563, "textarea", 151);
    i0.ɵɵtext(564, "                                    ");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(565, "tab", 168)(566, "form", 30)(567, "div", 31)(568, "div", 32)(569, "div", 3)(570, "h5", 100);
    i0.ɵɵtext(571, " Elimination ");
    i0.ɵɵelementStart(572, "span", 142);
    i0.ɵɵtext(573, " How The Drug Leaves the Body ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(574, "div", 95)(575, "div", 37)(576, "label");
    i0.ɵɵtext(577, "Drug Clearance Value");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(578, "input", 169);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(579, "div", 37)(580, "label");
    i0.ɵɵtext(581, "Drug E-Half Life (L1/2)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(582, "input", 170);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(583, "div", 37)(584, "label");
    i0.ɵɵtext(585, "Route of Elimination");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(586, "select", 171)(587, "option", 39);
    i0.ɵɵtext(588, "Select Route");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(589, "option", 172);
    i0.ɵɵtext(590, "Renal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(591, "option", 173);
    i0.ɵɵtext(592, "Biliary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(593, "option", 174);
    i0.ɵɵtext(594, "Fecal");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(595, "div", 95)(596, "div", 37)(597, "label");
    i0.ɵɵtext(598, "Renal Excretion %");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(599, "input", 175);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(600, "div", 37)(601, "label");
    i0.ɵɵtext(602, "Hepatic Excretion %");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(603, "input", 176);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(604, "div", 146)(605, "div", 136);
    i0.ɵɵelement(606, "input", 177);
    i0.ɵɵelementStart(607, "label", 125);
    i0.ɵɵtext(608, " Dialyzable ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(609, "div", 95)(610, "div", 37)(611, "label");
    i0.ɵɵtext(612, "Var 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(613, "input", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(614, "div", 37)(615, "label");
    i0.ɵɵtext(616, "Var 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(617, "input", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(618, "div", 37)(619, "label");
    i0.ɵɵtext(620, "Var 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(621, "input", 98);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(622, "div", 95)(623, "div", 3)(624, "label");
    i0.ɵɵtext(625, "Elimination Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(626, "textarea", 151);
    i0.ɵɵtext(627, "                                    ");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(628, "tab", 178)(629, "form", 30)(630, "div", 31)(631, "div", 32)(632, "div", 3)(633, "h5", 100);
    i0.ɵɵtext(634, " Drug-Time Based Behaviours ");
    i0.ɵɵelementStart(635, "span", 142);
    i0.ɵɵtext(636, " (Repeated Dosing Behaviour) ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(637, "div", 95)(638, "div", 37)(639, "label");
    i0.ɵɵtext(640, " Drug Time to Steady State (4-5 Half lives) ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(641, "input", 179);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(642, "div", 37)(643, "label");
    i0.ɵɵtext(644, " Drug Accumulation Risk ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(645, "input", 180);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(646, "div", 37)(647, "label");
    i0.ɵɵtext(648, " Drug Peak thru Fluctuation % ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(649, "input", 181);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(650, "div", 95)(651, "div", 92)(652, "div", 182)(653, "div", 183);
    i0.ɵɵelement(654, "input", 184);
    i0.ɵɵelementStart(655, "label", 125);
    i0.ɵɵtext(656, " Drug Dose Proportion Linear Status ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(657, "div")(658, "label");
    i0.ɵɵtext(659, " Drug Non-Linear Threshold ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(660, "input", 185);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(661, "div", 95)(662, "div", 37)(663, "div", 136);
    i0.ɵɵelement(664, "input", 186);
    i0.ɵɵelementStart(665, "label", 125);
    i0.ɵɵtext(666, " Drug Dose Daily Compliance Suitability ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(667, "div", 95)(668, "div", 3)(669, "label");
    i0.ɵɵtext(670, " Drug Time Based Behaviour Summary ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(671, "textarea", 187);
    i0.ɵɵtext(672, "                                    ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(673, "div", 95)(674, "div", 37)(675, "label");
    i0.ɵɵtext(676, "Var 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(677, "input", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(678, "div", 37)(679, "label");
    i0.ɵɵtext(680, "Var 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(681, "input", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(682, "div", 37)(683, "label");
    i0.ɵɵtext(684, "Var 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(685, "input", 98);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(686, "tab", 188)(687, "form", 30)(688, "div", 31)(689, "div", 32)(690, "div", 3)(691, "h5", 100);
    i0.ɵɵtext(692, " Drugs Special Population Modifier ");
    i0.ɵɵelementStart(693, "span", 142);
    i0.ɵɵtext(694, " - Real World Prescribing ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(695, "div", 95)(696, "div", 92)(697, "label");
    i0.ɵɵtext(698, " Drug Renal Impairment Adjustment ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(699, "select", 189)(700, "option", 39);
    i0.ɵɵtext(701, " Select ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(702, "option", 116);
    i0.ɵɵtext(703, " None ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(704, "option", 190);
    i0.ɵɵtext(705, " Minor ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(706, "option", 191);
    i0.ɵɵtext(707, " Severe ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(708, "div", 92)(709, "label");
    i0.ɵɵtext(710, " Drug Hepatic Impairment Adjustment ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(711, "select", 192)(712, "option", 39);
    i0.ɵɵtext(713, " Select ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(714, "option", 116);
    i0.ɵɵtext(715, " None ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(716, "option", 190);
    i0.ɵɵtext(717, " Minor ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(718, "option", 191);
    i0.ɵɵtext(719, " Severe ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(720, "div", 95)(721, "div", 37)(722, "div", 136);
    i0.ɵɵelement(723, "input", 193);
    i0.ɵɵelementStart(724, "label", 125);
    i0.ɵɵtext(725, " Drug Elderly Adjustment ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(726, "div", 37)(727, "div", 136);
    i0.ɵɵelement(728, "input", 194);
    i0.ɵɵelementStart(729, "label", 125);
    i0.ɵɵtext(730, " Drug Pediatric Data Available ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(731, "div", 37)(732, "div", 136);
    i0.ɵɵelement(733, "input", 195);
    i0.ɵɵelementStart(734, "label", 125);
    i0.ɵɵtext(735, " Drug Obesity Impact ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(736, "div", 95)(737, "div", 37)(738, "label");
    i0.ɵɵtext(739, " Drug Pregnancy Category ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(740, "select", 196)(741, "option", 39);
    i0.ɵɵtext(742, " Select ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(743, "option", 197);
    i0.ɵɵtext(744, " No Risk Seen for Human Category ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(745, "option", 198);
    i0.ɵɵtext(746, " Risk Seen for Human Category ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(747, "div", 102)(748, "label");
    i0.ɵɵtext(749, " Special Population Drug Adjustment Note ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(750, "textarea", 199);
    i0.ɵɵtext(751, "                                    ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(752, "div", 95)(753, "div", 37)(754, "label");
    i0.ɵɵtext(755, "Var 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(756, "input", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(757, "div", 37)(758, "label");
    i0.ɵɵtext(759, "Var 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(760, "input", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(761, "div", 37)(762, "label");
    i0.ɵɵtext(763, "Var 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(764, "input", 98);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(765, "tab", 200)(766, "form", 30)(767, "div", 31)(768, "div", 32)(769, "div", 3)(770, "h5", 100);
    i0.ɵɵtext(771, " Drug-Drug Interaction ");
    i0.ɵɵelementStart(772, "span", 142);
    i0.ɵɵtext(773, " : Critical for Polypharmacy ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(774, "div", 95)(775, "div", 37)(776, "label");
    i0.ɵɵtext(777, " Drug-Drug Interaction Risk ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(778, "select", 201)(779, "option", 39);
    i0.ɵɵtext(780, " Select ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(781, "option", 122);
    i0.ɵɵtext(782, " Low ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(783, "option", 121);
    i0.ɵɵtext(784, " Moderate ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(785, "option", 120);
    i0.ɵɵtext(786, " High ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(787, "div", 32)(788, "div", 102)(789, "label");
    i0.ɵɵtext(790, " Drug Enzyme Inhibitors Affect Exposure ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(791, "input", 202);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(792, "div", 32)(793, "div", 102)(794, "label");
    i0.ɵɵtext(795, " Drug Inducer Affect Exposure ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(796, "input", 203);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(797, "div", 32)(798, "div", 102)(799, "label");
    i0.ɵɵtext(800, " Drug Transporter Exposure ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(801, "input", 204);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(802, "div", 32)(803, "div", 102)(804, "label");
    i0.ɵɵtext(805, " Drug-Food Interaction ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(806, "input", 205);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(807, "div", 95)(808, "div", 37)(809, "div", 136);
    i0.ɵɵelement(810, "input", 206);
    i0.ɵɵelementStart(811, "label", 125);
    i0.ɵɵtext(812, " Drug Alcohol Interaction Exposure ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(813, "div", 95)(814, "div", 3)(815, "label");
    i0.ɵɵtext(816, " Drug Drug Interaction Summary ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(817, "textarea", 207);
    i0.ɵɵtext(818, "                                    ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(819, "div", 95)(820, "div", 37)(821, "label");
    i0.ɵɵtext(822, "Var 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(823, "input", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(824, "div", 37)(825, "label");
    i0.ɵɵtext(826, "Var 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(827, "input", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(828, "div", 37)(829, "label");
    i0.ɵɵtext(830, "Var 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(831, "input", 98);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(832, "tab", 208)(833, "form", 30)(834, "div", 31)(835, "div", 32)(836, "div", 3)(837, "h5", 100);
    i0.ɵɵtext(838, " Drugs Clinical Interpretation ");
    i0.ɵɵelementStart(839, "span", 142);
    i0.ɵɵtext(840, " - What doctor actually cares about ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(841, "div", 95)(842, "div", 209)(843, "label");
    i0.ɵɵtext(844, " Drug PK Therapeutic Window Index ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(845, "textarea", 210);
    i0.ɵɵtext(846, "                                    ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(847, "div", 35)(848, "label");
    i0.ɵɵtext(849, " Drug PK Therapeutic Window Interpretation ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(850, "select", 211)(851, "option", 39);
    i0.ɵɵtext(852, " Select ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(853, "option", 212);
    i0.ɵɵtext(854, " Narrow ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(855, "option", 213);
    i0.ɵɵtext(856, " Wide ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(857, "div", 95)(858, "div", 33)(859, "div", 136);
    i0.ɵɵelement(860, "input", 214);
    i0.ɵɵelementStart(861, "label", 125);
    i0.ɵɵtext(862, " TDM Monitoring Registered ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(863, "div", 33)(864, "label");
    i0.ɵɵtext(865, " Dose Flexibility ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(866, "select", 215)(867, "option", 39);
    i0.ɵɵtext(868, " Select ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(869, "option", 122);
    i0.ɵɵtext(870, " Low ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(871, "option", 121);
    i0.ɵɵtext(872, " Moderate ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(873, "option", 120);
    i0.ɵɵtext(874, " High ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(875, "div", 92)(876, "label");
    i0.ɵɵtext(877, " Dose Forgiveness Index (Missed Dose Safety) ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(878, "textarea", 216);
    i0.ɵɵtext(879, "                                    ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(880, "div", 95)(881, "div", 92)(882, "label");
    i0.ɵɵtext(883, " PK Safety Summary ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(884, "textarea", 217);
    i0.ɵɵtext(885, "                                    ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(886, "div", 92)(887, "label");
    i0.ɵɵtext(888, " Drug MR Summary ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(889, "textarea", 218);
    i0.ɵɵtext(890, "                                    ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(891, "div", 95)(892, "div", 37)(893, "label");
    i0.ɵɵtext(894, "Var 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(895, "input", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(896, "div", 37)(897, "label");
    i0.ɵɵtext(898, "Var 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(899, "input", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(900, "div", 37)(901, "label");
    i0.ɵɵtext(902, "Var 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(903, "input", 98);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(904, "tab", 219)(905, "form", 30)(906, "div", 31)(907, "div", 32)(908, "div", 3)(909, "h5", 100);
    i0.ɵɵtext(910, " PK Drugs Regulatory Evidence ");
    i0.ɵɵelementStart(911, "span", 142);
    i0.ɵɵtext(912, " - Medical Affairs & Audits ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(913, "div", 95)(914, "div", 37)(915, "label");
    i0.ɵɵtext(916, " Drug Study Type ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(917, "select", 220)(918, "option", 39);
    i0.ɵɵtext(919, " Select ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(920, "option", 221);
    i0.ɵɵtext(921, " BE ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(922, "option", 222);
    i0.ɵɵtext(923, " BA ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(924, "option", 223);
    i0.ɵɵtext(925, " Phase 1 ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(926, "div", 37)(927, "label");
    i0.ɵɵtext(928, " Drug Regulatory Approval ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(929, "select", 224)(930, "option", 39);
    i0.ɵɵtext(931, " Select ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(932, "option", 225);
    i0.ɵɵtext(933, " DCGA ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(934, "option", 226);
    i0.ɵɵtext(935, " USFDA ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(936, "option", 227);
    i0.ɵɵtext(937, " EMA ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(938, "div", 37)(939, "label");
    i0.ɵɵtext(940, " Drug Guidelines Ref. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(941, "input", 228);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(942, "div", 95)(943, "div", 33)(944, "div", 136);
    i0.ɵɵelement(945, "input", 229);
    i0.ɵɵelementStart(946, "label", 125);
    i0.ɵɵtext(947, " Published Evidence Available ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(948, "div", 230)(949, "div", 182)(950, "label");
    i0.ɵɵtext(951, " Evidence Study Attached ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(952, "textarea", 231);
    i0.ɵɵtext(953, "                                        ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(954, "div", 101)(955, "a", 232);
    i0.ɵɵtext(956, " Browse & Attach ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(957, "div", 123);
    i0.ɵɵelement(958, "input", 233);
    i0.ɵɵelementStart(959, "label", 125);
    i0.ɵɵtext(960, " Study Downloadable ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(961, "div", 95)(962, "div", 37)(963, "label");
    i0.ɵɵtext(964, "Var 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(965, "input", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(966, "div", 37)(967, "label");
    i0.ɵɵtext(968, "Var 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(969, "input", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(970, "div", 37)(971, "label");
    i0.ɵɵtext(972, "Var 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(973, "input", 98);
    i0.ɵɵelementEnd()()()()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_30_0;
    let tmp_31_0;
    let tmp_32_0;
    let tmp_33_0;
    let tmp_34_0;
    let tmp_35_0;
    let tmp_36_0;
    let tmp_37_0;
    let tmp_38_0;
    let tmp_39_0;
    let tmp_40_0;
    let tmp_41_0;
    let tmp_42_0;
    let tmp_43_0;
    let tmp_44_0;
    let tmp_45_0;
    let tmp_46_0;
    let tmp_47_0;
    let tmp_48_0;
    let tmp_49_0;
    let tmp_50_0;
    let tmp_51_0;
    let tmp_52_0;
    let tmp_53_0;
    let tmp_54_0;
    let tmp_55_0;
    let tmp_56_0;
    let tmp_57_0;
    let tmp_58_0;
    let tmp_59_0;
    let tmp_60_0;
    let tmp_61_0;
    let tmp_62_0;
    let tmp_63_0;
    let tmp_64_0;
    let tmp_65_0;
    let tmp_66_0;
    let tmp_67_0;
    let tmp_68_0;
    let tmp_69_0;
    let tmp_70_0;
    let tmp_71_0;
    let tmp_72_0;
    let tmp_73_0;
    let tmp_74_0;
    let tmp_75_0;
    let tmp_76_0;
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("formGroup", ctx_r3.drugPkForm);
    i0.ɵɵadvance(85);
    i0.ɵɵproperty("ngIf", ((tmp_1_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_1_0.value) === "T1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_2_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_2_0.value) === "T1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_3_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_3_0.value) === "T1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_4_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_4_0.value) === "T1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_5_0.value) === "T2");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_6_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_6_0.value) === "T2");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_7_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_7_0.value) === "T2");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_8_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_8_0.value) === "T2");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_9_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_9_0.value) === "T3");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_10_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_10_0.value) === "T3");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_11_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_11_0.value) === "T4");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_12_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_12_0.value) === "T4");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_13_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_13_0.value) === "T4");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_14_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_14_0.value) === "T5");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_15_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_15_0.value) === "T5");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_16_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_16_0.value) === "T6");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_17_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_17_0.value) === "T7");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_18_0 = ctx_r3.drugPkForm.get("targetClass")) == null ? null : tmp_18_0.value) === "T7");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ((tmp_19_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_19_0.value) === "F1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_20_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_20_0.value) === "F1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_21_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_21_0.value) === "F1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_22_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_22_0.value) === "F2");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_23_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_23_0.value) === "F2");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_24_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_24_0.value) === "F3");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_25_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_25_0.value) === "F3");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_26_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_26_0.value) === "F4");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_27_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_27_0.value) === "F4");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_28_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_28_0.value) === "F5");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_29_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_29_0.value) === "F5");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_30_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_30_0.value) === "F6");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_31_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_31_0.value) === "F6");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_32_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_32_0.value) === "F7");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_33_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_33_0.value) === "F7");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_34_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_34_0.value) === "F8");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_35_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_35_0.value) === "F9");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_36_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_36_0.value) === "F9");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_37_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_37_0.value) === "F9");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_38_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_38_0.value) === "F10");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_39_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_39_0.value) === "F11");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_40_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_40_0.value) === "F11");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_41_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_41_0.value) === "F12");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_42_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_42_0.value) === "F13");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_43_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_43_0.value) === "F13");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_44_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_44_0.value) === "F14");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_45_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_45_0.value) === "F14");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_46_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_46_0.value) === "F15");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_47_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_47_0.value) === "F16");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_48_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_48_0.value) === "F16");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_49_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_49_0.value) === "F17");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_50_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_50_0.value) === "F17");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_51_0 = ctx_r3.drugPkForm.get("targetFamily")) == null ? null : tmp_51_0.value) === "F18");
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ((tmp_52_0 = ctx_r3.drugPkForm.get("route")) == null ? null : tmp_52_0.value) === "Internal (Gastrointestinal)");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_53_0 = ctx_r3.drugPkForm.get("route")) == null ? null : tmp_53_0.value) === "Internal (Gastrointestinal)");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_54_0 = ctx_r3.drugPkForm.get("route")) == null ? null : tmp_54_0.value) === "Internal (Gastrointestinal)");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_55_0 = ctx_r3.drugPkForm.get("route")) == null ? null : tmp_55_0.value) === "Parenteral");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_56_0 = ctx_r3.drugPkForm.get("route")) == null ? null : tmp_56_0.value) === "Parenteral");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_57_0 = ctx_r3.drugPkForm.get("route")) == null ? null : tmp_57_0.value) === "Parenteral");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_58_0 = ctx_r3.drugPkForm.get("route")) == null ? null : tmp_58_0.value) === "Parenteral");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_59_0 = ctx_r3.drugPkForm.get("route")) == null ? null : tmp_59_0.value) === "Parenteral");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_60_0 = ctx_r3.drugPkForm.get("route")) == null ? null : tmp_60_0.value) === "Topical");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_61_0 = ctx_r3.drugPkForm.get("route")) == null ? null : tmp_61_0.value) === "Topical");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_62_0 = ctx_r3.drugPkForm.get("route")) == null ? null : tmp_62_0.value) === "Topical");
    i0.ɵɵadvance(60);
    i0.ɵɵproperty("ngIf", ((tmp_63_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_63_0.value) === "Small Molecule");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_64_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_64_0.value) === "Small Molecule");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_65_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_65_0.value) === "Small Molecule");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_66_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_66_0.value) === "Biologic");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_67_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_67_0.value) === "Biologic");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_68_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_68_0.value) === "Biologic");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_69_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_69_0.value) === "Biologic");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_70_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_70_0.value) === "Cellular");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_71_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_71_0.value) === "Cellular");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_72_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_72_0.value) === "Cellular");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_73_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_73_0.value) === "Gene Therapy");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_74_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_74_0.value) === "Gene Therapy");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_75_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_75_0.value) === "Gene Therapy");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_76_0 = ctx_r3.drugPkForm.get("drugType")) == null ? null : tmp_76_0.value) === "Gene Therapy");
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("formGroup", ctx_r3.absorptionForm);
    i0.ɵɵadvance(159);
    i0.ɵɵproperty("formGroup", ctx_r3.distributionForm);
    i0.ɵɵadvance(59);
    i0.ɵɵproperty("formGroup", ctx_r3.metabolismForm);
    i0.ɵɵadvance(87);
    i0.ɵɵproperty("formGroup", ctx_r3.eliminationForm);
    i0.ɵɵadvance(63);
    i0.ɵɵproperty("formGroup", ctx_r3.timeBasedForm);
    i0.ɵɵadvance(58);
    i0.ɵɵproperty("formGroup", ctx_r3.specialPopulationForm);
    i0.ɵɵadvance(79);
    i0.ɵɵproperty("formGroup", ctx_r3.drugDrugInteractionForm);
    i0.ɵɵadvance(67);
    i0.ɵɵproperty("formGroup", ctx_r3.clinicalInterpretationForm);
    i0.ɵɵadvance(72);
    i0.ɵɵproperty("formGroup", ctx_r3.regulatoryEvidenceForm);
} }
export class DrugManagementComponent {
    constructor(apiService, modalService, formBuilder, router, toastr, spinner) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.drugPkForm = this.formBuilder.group({
            subitemId: [''],
            drugName: [''],
            pkId: [''],
            drugType: [''],
            drugForm: [''],
            route: [''],
            subRoute: [''],
            drugStrength: [''],
            mu: [''],
            drugRefProduct: [''],
            productType: [''],
            studyPopulation: [''],
            drugPhase: [''],
            country: [''],
            sponsor: [''],
            doseUnit: [''],
            bioanalyticalMethod: [''],
            var1: [''],
            var2: [''],
            var3: [''],
            targetClass: [''],
            targetFamily: [''],
            targetSubtype: [''],
            specificTarget: ['']
        });
        this.absorptionForm = this.formBuilder.group({
            baDetail: [''],
            aucOral: [''],
            aucIv: [''],
            absoluteBA: [''],
            doseOral: [''],
            doseIv: [''],
            relativeF: [''],
            tmax: [''],
            cmax: [''],
            ka: [''],
            pka: [''],
            foodEffect: [''],
            drugBA: [''],
            gastricPhDependence: [false],
            firstpassMetabolism: [false],
            consistentPatient: [false],
            supportTable1: [false],
            supportTable2: [false],
            measuredUsingAUC: [false],
            measuredUsingCmax: [false],
            accessedUsingFeed: [false],
            changesUsingDoseEscalation: [false],
            pgpSubstrate: [false],
            accessedUsingFasting: [false],
            scLymphaticUptake: [false],
            engraftmentRate: [''],
            vectorEntryRate: [''],
            var1: [''],
            var2: [''],
            var3: [''],
            clinicalRef: ['']
        });
        this.distributionForm = this.formBuilder.group({
            volumeDistribution: [''],
            plasmaProteinBinding: [''],
            bbbPenetration: [false],
            tissueSelectivity: [''],
            placentalTransfer: [false],
            breastMilkExcretion: [false],
            summary: [''],
            var1: [''],
            var2: [''],
            var3: ['']
        });
        this.metabolismForm = this.formBuilder.group({
            metabolismOrgan: [''],
            hepaticClearance: [''],
            intrinsicClearance: [''],
            enzymeInvolved: [''],
            enzymeInhibitor: [false],
            enzymeInducer: [false],
            activeMetabolites: [false],
            metabolitePotency: [''],
            geneticPolymorphism: [false],
            summary: [''],
            var1: [''],
            var2: [''],
            var3: ['']
        });
        this.eliminationForm = this.formBuilder.group({
            clearanceValue: [''],
            halfLife: [''],
            routeElimination: [''],
            renalExcretion: [''],
            hepaticExcretion: [''],
            dialyzable: [false],
            summary: [''],
            var1: [''],
            var2: [''],
            var3: ['']
        });
        this.timeBasedForm = this.formBuilder.group({
            steadyState: [''],
            accumulationRisk: [''],
            peakFluctuation: [''],
            linearStatus: [false],
            nonLinearThreshold: [''],
            dailyCompliance: [false],
            summary: [''],
            var1: [''],
            var2: [''],
            var3: ['']
        });
        this.specialPopulationForm = this.formBuilder.group({
            renalAdjustment: [''],
            hepaticAdjustment: [''],
            elderlyAdjustment: [false],
            pediatricData: [false],
            obesityImpact: [false],
            pregnancyCategory: [''],
            adjustmentNote: [''],
            var1: [''],
            var2: [''],
            var3: ['']
        });
        this.drugDrugInteractionForm = this.formBuilder.group({
            interactionRisk: [''],
            enzymeInhibitorExposure: [''],
            inducerExposure: [''],
            transporterExposure: [''],
            foodInteraction: [''],
            alcoholInteraction: [false],
            interactionSummary: [''],
            var1: [''],
            var2: [''],
            var3: ['']
        });
        this.clinicalInterpretationForm = this.formBuilder.group({
            therapeuticWindowIndex: [''],
            therapeuticWindowInterpretation: [''],
            tdmMonitoring: [false],
            doseFlexibility: [''],
            doseForgivenessIndex: [''],
            pkSafetySummary: [''],
            mrSummary: [''],
            var1: [''],
            var2: [''],
            var3: ['']
        });
        this.regulatoryEvidenceForm = this.formBuilder.group({
            studyType: [''],
            regulatoryApproval: [''],
            guidelineRef: [''],
            publishedEvidence: [false],
            evidenceStudy: [''],
            studyDownloadable: [false],
            var1: [''],
            var2: [''],
            var3: ['']
        });
    }
    ngOnInit() {
    }
    onTabChange(tabId) {
        this.activeTabId = tabId;
        switch (tabId) {
            case 'tab1':
                break;
            case 'tab2':
                break;
            case 'tab3':
                break;
            default:
                break;
        }
    }
    openDataRepo(template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
    }
}
DrugManagementComponent.ɵfac = function DrugManagementComponent_Factory(t) { return new (t || DrugManagementComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.NgxSpinnerService)); };
DrugManagementComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrugManagementComponent, selectors: [["app-drug-management"]], decls: 84, vars: 0, consts: [[1, "content"], [1, "heading-title"], [1, "toplevel"], [1, "col-md-12"], ["heading", "Pharmacokinetics (PK)", "id", "tab1", 3, "selectTab"], ["heading", "Pharmacodynamics (PD)", "id", "tab2", 3, "selectTab"], [1, "card", "exiting-office-table", "orderStatus", "p-0", "mt-2"], [1, "card-header"], [2, "display", "flex", "flex-direction", "column"], [1, "card-body", "pa-0"], [1, "row", "m-0"], [1, "col-md-12", "py-2"], [1, "table", "table-hover"], [1, "font"], [1, "font", "text-center"], [1, "text-center"], [1, "btn", "btn-dark", "btn-sm", "mr-2", 3, "click"], [1, "btn", "btn-dark", "btn-sm"], ["noData", ""], ["heading", "Pharmacovigilance", "id", "tab3", 3, "selectTab"], ["masterEntryPKTemplate", ""], ["colspan", "6", 1, "text-center"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "store-tab-content"], [1, "custom-tabset"], ["heading", "Drug PK Profile", "id", "tab1"], [3, "formGroup"], [1, "container-fluid", "pk-form", "mt-3"], [1, "row", "mb-3"], [1, "col-md-3"], ["type", "text", "formControlName", "subitemId", 1, "form-control"], [1, "col-md-5"], ["type", "text", "formControlName", "drugName", 1, "form-control"], [1, "col-md-4"], ["formControlName", "drugType", 1, "form-control"], ["value", ""], ["formControlName", "drugForm", 1, "form-control"], ["formControlName", "route", 1, "form-control"], ["formControlName", "targetClass", 1, "form-control"], ["value", "T1"], ["value", "T2"], ["value", "T3"], ["value", "T4"], ["value", "T5"], ["value", "T6"], ["value", "T7"], ["formControlName", "targetFamily", 1, "form-control"], ["value", "F1", 4, "ngIf"], ["value", "F2", 4, "ngIf"], ["value", "F3", 4, "ngIf"], ["value", "F4", 4, "ngIf"], ["value", "F5", 4, "ngIf"], ["value", "F6", 4, "ngIf"], ["value", "F7", 4, "ngIf"], ["value", "F8", 4, "ngIf"], ["value", "F9", 4, "ngIf"], ["value", "F10", 4, "ngIf"], ["value", "F11", 4, "ngIf"], ["value", "F12", 4, "ngIf"], ["value", "F13", 4, "ngIf"], ["value", "F14", 4, "ngIf"], ["value", "F15", 4, "ngIf"], ["value", "F16", 4, "ngIf"], ["value", "F17", 4, "ngIf"], ["value", "F18", 4, "ngIf"], ["formControlName", "targetSubtype", 1, "form-control"], [4, "ngIf"], ["type", "text", "formControlName", "specificTarget", "placeholder", "Enter or Null", 1, "form-control"], ["formControlName", "subRoute", 1, "form-control"], ["value", "Oral (PO)", 4, "ngIf"], ["value", "Sublingual / Buccal", 4, "ngIf"], ["value", "Rectal", 4, "ngIf"], ["value", "Intravenous (IV)", 4, "ngIf"], ["value", "Intramuscular (IM)", 4, "ngIf"], ["value", "Subcutaneous (SC)", 4, "ngIf"], ["value", "Intradermal", 4, "ngIf"], ["value", "Inhalation", 4, "ngIf"], ["value", "Transdermal", 4, "ngIf"], ["value", "Dermal / Cutaneous", 4, "ngIf"], ["value", "Mucosal", 4, "ngIf"], ["type", "text", "formControlName", "drugStrength", 1, "form-control"], ["formControlName", "mu", 1, "form-control"], ["type", "text", "formControlName", "drugRefProduct", 1, "form-control"], ["formControlName", "studyPopulation", 1, "form-control"], ["type", "text", "formControlName", "drugPhase", 1, "form-control"], ["formControlName", "country", 1, "form-control"], ["selected", "", "value", ""], ["type", "text", "formControlName", "sponsor", 1, "form-control"], [1, "col-md-6"], ["type", "text", "formControlName", "doseUnit", 1, "form-control"], ["formControlName", "bioanalyticalMethod", 1, "form-control"], [1, "row", "mb-4"], ["type", "text", "formControlName", "var1", 1, "form-control"], ["type", "text", "formControlName", "var2", 1, "form-control"], ["type", "text", "formControlName", "var3", 1, "form-control"], ["heading", "A-Absorption", "id", "tab2"], [1, "section-title"], [1, "mb-3"], [1, "col-md-8"], ["rows", "4", "formControlName", "baDetail", 1, "form-control"], ["type", "text", "formControlName", "aucOral", 1, "form-control"], [1, "mt-3"], ["type", "text", "formControlName", "doseOral", 1, "form-control"], ["type", "text", "formControlName", "aucIv", 1, "form-control"], ["type", "text", "formControlName", "doseIv", 1, "form-control"], ["type", "text", "formControlName", "absoluteBA", 1, "form-control"], ["type", "text", "formControlName", "relativeF", 1, "form-control"], ["type", "text", "formControlName", "tmax", 1, "form-control"], ["type", "text", "formControlName", "cmax", 1, "form-control"], ["type", "text", "formControlName", "ka", 1, "form-control"], ["type", "text", "formControlName", "pka", 1, "form-control"], ["formControlName", "foodEffect", 1, "form-control"], ["value", "None"], ["value", "Increases"], ["value", "Decreases"], ["formControlName", "drugBA", 1, "form-control"], ["value", "High"], ["value", "Moderate"], ["value", "Low"], [1, "form-check"], ["type", "checkbox", "formControlName", "gastricPhDependence", 1, "form-check-input"], [1, "form-check-label"], ["type", "checkbox", "formControlName", "supportTable2", 1, "form-check-input"], ["type", "checkbox", "formControlName", "accessedUsingFeed", 1, "form-check-input"], ["type", "checkbox", "formControlName", "firstpassMetabolism", 1, "form-check-input"], ["type", "checkbox", "formControlName", "measuredUsingAUC", 1, "form-check-input"], ["type", "checkbox", "formControlName", "changesUsingDoseEscalation", 1, "form-check-input"], ["type", "checkbox", "formControlName", "consistentPatient", 1, "form-check-input"], ["type", "checkbox", "formControlName", "measuredUsingCmax", 1, "form-check-input"], ["type", "checkbox", "formControlName", "pgpSubstrate", 1, "form-check-input"], ["type", "checkbox", "formControlName", "supportTable1", 1, "form-check-input"], ["type", "checkbox", "formControlName", "accessedUsingFasting", 1, "form-check-input"], [1, "form-check", "mt-4"], ["type", "checkbox", "formControlName", "scLymphaticUptake", 1, "form-check-input"], ["type", "text", "formControlName", "engraftmentRate", 1, "form-control"], ["type", "text", "formControlName", "vectorEntryRate", 1, "form-control"], ["rows", "4", "formControlName", "clinicalRef", 1, "form-control", 2, "min-height", "120px", "resize", "vertical"], ["heading", "D-Distribution", "id", "tab3"], [1, "section-subtitle"], [1, "text-muted", "d-block"], ["type", "text", "formControlName", "volumeDistribution", 1, "form-control"], ["type", "text", "formControlName", "plasmaProteinBinding", 1, "form-control"], [1, "col-md-4", "d-flex", "align-items-end"], ["type", "checkbox", "formControlName", "bbbPenetration", 1, "form-check-input"], ["type", "text", "formControlName", "tissueSelectivity", 1, "form-control"], ["type", "checkbox", "formControlName", "placentalTransfer", 1, "form-check-input"], ["type", "checkbox", "formControlName", "breastMilkExcretion", 1, "form-check-input"], ["rows", "4", "formControlName", "summary", 1, "form-control", 2, "min-height", "120px", "resize", "vertical"], ["heading", "M-Metabolism", "id", "tab4"], ["formControlName", "metabolismOrgan", 1, "form-control"], ["value", "Liver"], ["value", "Gut"], ["value", "Plasma"], ["type", "text", "formControlName", "hepaticClearance", 1, "form-control"], ["type", "text", "formControlName", "intrinsicClearance", 1, "form-control"], ["type", "text", "formControlName", "enzymeInvolved", 1, "form-control"], ["type", "checkbox", "formControlName", "enzymeInhibitor", 1, "form-check-input"], ["type", "checkbox", "formControlName", "enzymeInducer", 1, "form-check-input"], ["type", "checkbox", "formControlName", "activeMetabolites", 1, "form-check-input"], ["formControlName", "metabolitePotency", 1, "form-control"], ["value", "Active"], ["value", "Less Active"], ["value", "Toxic"], ["type", "checkbox", "formControlName", "geneticPolymorphism", 1, "form-check-input"], ["heading", "E-Elimination", "id", "tab5"], ["type", "text", "formControlName", "clearanceValue", 1, "form-control"], ["type", "text", "formControlName", "halfLife", 1, "form-control"], ["formControlName", "routeElimination", 1, "form-control"], ["value", "Renal"], ["value", "Biliary"], ["value", "Fecal"], ["type", "text", "formControlName", "renalExcretion", 1, "form-control"], ["type", "text", "formControlName", "hepaticExcretion", 1, "form-control"], ["type", "checkbox", "formControlName", "dialyzable", 1, "form-check-input"], ["heading", "Time Based", "id", "tab6"], ["type", "text", "formControlName", "steadyState", 1, "form-control"], ["type", "text", "formControlName", "accumulationRisk", 1, "form-control"], ["type", "text", "formControlName", "peakFluctuation", 1, "form-control"], [1, "border", "rounded", "p-3"], [1, "form-check", "mb-3"], ["type", "checkbox", "formControlName", "linearStatus", 1, "form-check-input"], ["type", "text", "formControlName", "nonLinearThreshold", 1, "form-control"], ["type", "checkbox", "formControlName", "dailyCompliance", 1, "form-check-input"], ["rows", "5", "formControlName", "summary", 1, "form-control"], ["heading", "Spl-Population", "id", "tab7"], ["formControlName", "renalAdjustment", 1, "form-control"], ["value", "Minor"], ["value", "Severe"], ["formControlName", "hepaticAdjustment", 1, "form-control"], ["type", "checkbox", "formControlName", "elderlyAdjustment", 1, "form-check-input"], ["type", "checkbox", "formControlName", "pediatricData", 1, "form-check-input"], ["type", "checkbox", "formControlName", "obesityImpact", 1, "form-check-input"], ["formControlName", "pregnancyCategory", 1, "form-control"], ["value", "No Risk Seen for Human Category"], ["value", "Risk Seen for Human Category"], ["rows", "5", "formControlName", "adjustmentNote", 1, "form-control"], ["heading", "Drug-Drug Int", "id", "tab8"], ["formControlName", "interactionRisk", 1, "form-control"], ["type", "text", "formControlName", "enzymeInhibitorExposure", 1, "form-control"], ["type", "text", "formControlName", "inducerExposure", 1, "form-control"], ["type", "text", "formControlName", "transporterExposure", 1, "form-control"], ["type", "text", "formControlName", "foodInteraction", 1, "form-control"], ["type", "checkbox", "formControlName", "alcoholInteraction", 1, "form-check-input"], ["rows", "6", "formControlName", "interactionSummary", 1, "form-control"], ["heading", "Clinic Interpretaion", "id", "tab9"], [1, "col-md-7"], ["rows", "4", "formControlName", "therapeuticWindowIndex", 1, "form-control"], ["formControlName", "therapeuticWindowInterpretation", 1, "form-control"], ["value", "Narrow"], ["value", "Wide"], ["type", "checkbox", "formControlName", "tdmMonitoring", 1, "form-check-input"], ["formControlName", "doseFlexibility", 1, "form-control"], ["rows", "4", "formControlName", "doseForgivenessIndex", 1, "form-control"], ["rows", "6", "formControlName", "pkSafetySummary", 1, "form-control"], ["rows", "6", "formControlName", "mrSummary", 1, "form-control"], ["heading", "Requ-Evidnc", "id", "tab10"], ["formControlName", "studyType", 1, "form-control"], ["value", "BE"], ["value", "BA"], ["value", "Phase 1"], ["formControlName", "regulatoryApproval", 1, "form-control"], ["value", "DCGA"], ["value", "USFDA"], ["value", "EMA"], ["type", "text", "formControlName", "guidelineRef", 1, "form-control"], ["type", "checkbox", "formControlName", "publishedEvidence", 1, "form-check-input"], [1, "col-md-9"], ["rows", "5", "formControlName", "evidenceStudy", 1, "form-control", "mb-3"], ["href", "javascript:void(0)"], ["type", "checkbox", "formControlName", "studyDownloadable", 1, "form-check-input"], ["value", "F1"], ["value", "F2"], ["value", "F3"], ["value", "F4"], ["value", "F5"], ["value", "F6"], ["value", "F7"], ["value", "F8"], ["value", "F9"], ["value", "F10"], ["value", "F11"], ["value", "F12"], ["value", "F13"], ["value", "F14"], ["value", "F15"], ["value", "F16"], ["value", "F17"], ["value", "F18"], ["value", "Oral (PO)"], ["value", "Sublingual / Buccal"], ["value", "Rectal"], ["value", "Intravenous (IV)"], ["value", "Intramuscular (IM)"], ["value", "Subcutaneous (SC)"], ["value", "Intradermal"], ["value", "Inhalation"], ["value", "Transdermal"], ["value", "Dermal / Cutaneous"], ["value", "Mucosal"]], template: function DrugManagementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r82 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Manage My Store Clinical Data (MLR Approvals)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "tabset", 3)(5, "tab", 4);
        i0.ɵɵlistener("selectTab", function DrugManagementComponent_Template_tab_selectTab_5_listener() { return ctx.onTabChange("tab1"); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "tab", 5);
        i0.ɵɵlistener("selectTab", function DrugManagementComponent_Template_tab_selectTab_6_listener() { return ctx.onTabChange("tab2"); });
        i0.ɵɵelementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "span");
        i0.ɵɵtext(11, "In My List (PK)");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "table", 12)(16, "thead")(17, "tr")(18, "th", 13);
        i0.ɵɵtext(19, "Serial #");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "th", 13);
        i0.ɵɵtext(21, "Data Created");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "th", 13);
        i0.ɵɵtext(23, "Date Recvd");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "th", 13);
        i0.ɵɵtext(25, "Clinical Data Subitem");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "th", 13);
        i0.ɵɵtext(27, "Subitemid");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "th", 14);
        i0.ɵɵtext(29, "Action");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(30, "tbody")(31, "tr")(32, "td");
        i0.ɵɵtext(33, "1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "td");
        i0.ɵɵtext(35, "\u2713");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "td");
        i0.ɵɵtext(37, "15/01/2026");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "td");
        i0.ɵɵtext(39, "IBUPROFENE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "td");
        i0.ɵɵtext(41, "39876");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "td", 15)(43, "button", 16);
        i0.ɵɵlistener("click", function DrugManagementComponent_Template_button_click_43_listener() { i0.ɵɵrestoreView(_r82); const _r2 = i0.ɵɵreference(83); return i0.ɵɵresetView(ctx.openDataRepo(_r2)); });
        i0.ɵɵtext(44, " Clinical Data Repository ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "button", 17);
        i0.ɵɵtext(46, " W-Flow Cycles ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(47, "tr")(48, "td");
        i0.ɵɵtext(49, "2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "td");
        i0.ɵɵtext(51, "\u2713");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "td");
        i0.ɵɵtext(53, "18/01/2026");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "td");
        i0.ɵɵtext(55, "PARACETAMOL");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "td");
        i0.ɵɵtext(57, "39877");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(58, "td", 15)(59, "button", 16);
        i0.ɵɵlistener("click", function DrugManagementComponent_Template_button_click_59_listener() { i0.ɵɵrestoreView(_r82); const _r2 = i0.ɵɵreference(83); return i0.ɵɵresetView(ctx.openDataRepo(_r2)); });
        i0.ɵɵtext(60, " Clinical Data Repository ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(61, "button", 17);
        i0.ɵɵtext(62, " W-Flow Cycles ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(63, "tr")(64, "td");
        i0.ɵɵtext(65, "3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(66, "td");
        i0.ɵɵtext(67, "\u2713");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(68, "td");
        i0.ɵɵtext(69, "20/01/2026");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(70, "td");
        i0.ɵɵtext(71, "AZITHROMYCIN");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(72, "td");
        i0.ɵɵtext(73, "39878");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(74, "td", 15)(75, "button", 16);
        i0.ɵɵlistener("click", function DrugManagementComponent_Template_button_click_75_listener() { i0.ɵɵrestoreView(_r82); const _r2 = i0.ɵɵreference(83); return i0.ɵɵresetView(ctx.openDataRepo(_r2)); });
        i0.ɵɵtext(76, " Clinical Data Repository ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(77, "button", 17);
        i0.ɵɵtext(78, " W-Flow Cycles ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(79, DrugManagementComponent_ng_template_79_Template, 3, 0, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd()()()()()();
        i0.ɵɵelementStart(81, "tab", 19);
        i0.ɵɵlistener("selectTab", function DrugManagementComponent_Template_tab_selectTab_81_listener() { return ctx.onTabChange("tab3"); });
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(82, DrugManagementComponent_ng_template_82_Template, 974, 86, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    } }, dependencies: [i7.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.CheckboxControlValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName, i8.TabDirective, i8.TabsetComponent], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-font-size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  font-size: 13px; \r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n\r\n  .nav-tabs .nav-link {\r\n  font-size: 11px; \r\n}\r\n\r\nbutton.btn.custom-btn-white[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] + .invalid-feedback[_ngcontent-%COMP%] {\r\n    top: 35px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%] {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn[_ngcontent-%COMP%] {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n}\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    text-align: center;\r\n    line-height: normal;\r\n\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.clear[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.save-pdf.btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row.bank-details[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.row.bank-details[_ngcontent-%COMP%]    + .card-body[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.img-preview-box[_ngcontent-%COMP%] {\r\n  width: 140px;\r\n  height: 140px;\r\n  border: 1px solid #ccc;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #fafafa;\r\n}\r\n\r\n.img-preview-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.transaction-filter[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    border-radius: 6px;\r\n}\r\n\r\n.filter-label[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    margin-bottom: 5px;\r\n    font-size: 14px;\r\n}\r\n\r\n.show-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 38px;\r\n}\r\n\r\n  .custom-tabset .nav-tabs .nav-link {\r\n  font-size: 9px !important;\r\n  font-weight: 600;\r\n}\r\n\r\n.pk-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\nfont-weight:600;\r\nfont-size:13px;\r\n}\r\n\r\n.pk-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\r\nheight:36px;\r\nfont-size:13px;\r\n}\r\n\r\n.head-title[_ngcontent-%COMP%]{\r\nfont-weight:600;\r\nmargin-bottom:10px;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%]{\r\nbackground:#a10c0c;\r\nborder:none;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]{\r\nfont-weight:600;\r\nborder-bottom:2px solid #ccc;\r\npadding-bottom:5px;\r\nmargin-bottom:15px;\r\n}\r\n\r\n.form-check[_ngcontent-%COMP%]{\r\nmargin-bottom:8px;\r\n}\r\n\r\ntextarea.form-control[_ngcontent-%COMP%]{\r\nresize:none;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]{\r\n  font-weight:600;\r\n  border-bottom:2px solid #ccc;\r\n  padding-bottom:6px;\r\n}\r\n\r\n.section-subtitle[_ngcontent-%COMP%]{\r\n  font-weight:400;\r\n  margin-left:10px;\r\n  color:#555;\r\n}\r\n\r\n.form-check[_ngcontent-%COMP%]{\r\n  font-size:14px;\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%]{\r\n  margin-right:6px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]{\r\n  font-weight:600;\r\n  border-bottom:2px solid #ccc;\r\n  padding-bottom:6px;\r\n}\r\n\r\n.section-subtitle[_ngcontent-%COMP%]{\r\n  font-weight:400;\r\n  margin-left:10px;\r\n  color:#555;\r\n}\r\n\r\n.form-check[_ngcontent-%COMP%]{\r\n  font-size:14px;\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%]{\r\n  margin-right:6px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]{\r\n  font-weight:600;\r\n  border-bottom:2px solid #ccc;\r\n  padding-bottom:6px;\r\n}\r\n\r\n.section-subtitle[_ngcontent-%COMP%]{\r\n  font-weight:400;\r\n  margin-left:10px;\r\n  color:#555;\r\n}\r\n\r\n.form-check[_ngcontent-%COMP%]{\r\n  font-size:14px;\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%]{\r\n  margin-right:6px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]{\r\n  font-weight:600;\r\n  border-bottom:2px solid #ccc;\r\n  padding-bottom:6px;\r\n}\r\n\r\n.section-subtitle[_ngcontent-%COMP%]{\r\n  font-weight:400;\r\n  margin-left:10px;\r\n  color:#555;\r\n}\r\n\r\n.form-check[_ngcontent-%COMP%]{\r\n  font-size:14px;\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%]{\r\n  margin-right:6px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]{\r\n  font-weight:600;\r\n  border-bottom:2px solid #ccc;\r\n  padding-bottom:6px;\r\n}\r\n\r\n.section-subtitle[_ngcontent-%COMP%]{\r\n  font-weight:400;\r\n  margin-left:10px;\r\n  color:#555;\r\n}\r\n\r\n.form-check[_ngcontent-%COMP%]{\r\n  font-size:14px;\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%]{\r\n  margin-right:6px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]{\r\n  font-weight:600;\r\n  border-bottom:2px solid #ccc;\r\n  padding-bottom:6px;\r\n}\r\n\r\n.section-subtitle[_ngcontent-%COMP%]{\r\n  font-weight:400;\r\n  margin-left:10px;\r\n  color:#555;\r\n}\r\n\r\n.form-check[_ngcontent-%COMP%]{\r\n  font-size:14px;\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%]{\r\n  margin-right:6px;\r\n}\r\n\r\n.kv-container[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n}\r\n\r\n.kv-row[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 180px 10px 1fr;\r\n  align-items: center;\r\n  padding: 6px 0;\r\n}\r\n\r\n.kv-label[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: #495057;\r\n}\r\n\r\n.kv-separator[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: #6c757d;\r\n}\r\n\r\n.kv-value[_ngcontent-%COMP%] {\r\n  color: #212529;\r\n  font-weight: 500;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrugManagementComponent, [{
        type: Component,
        args: [{ selector: 'app-drug-management', template: "<div class=\"content\">\n\n    <h1 class=\"heading-title\">Manage My Store Clinical Data (MLR Approvals)</h1>\n\n    <div class=\"toplevel\">\n\n        <tabset class=\"col-md-12\">\n\n            <tab heading=\"Pharmacokinetics (PK)\" id=\"tab1\" (selectTab)=\"onTabChange('tab1')\">\n\n                <!-- PK Content -->\n\n            </tab>\n\n            <tab heading=\"Pharmacodynamics (PD)\" id=\"tab2\" (selectTab)=\"onTabChange('tab2')\">\n\n                <div class=\"card exiting-office-table orderStatus p-0 mt-2\">\n\n                    <!-- Card Header -->\n                    <div class=\"card-header\">\n                        <div style=\"display: flex; flex-direction: column;\">\n                            <span>In My List (PK)</span>\n                        </div>\n                    </div>\n\n                    <!-- Card Body -->\n                    <div class=\"card-body pa-0\">\n                        <div class=\"row m-0\">\n                            <div class=\"col-md-12 py-2\">\n                                <table class=\"table table-hover\">\n                                    <thead>\n                                        <tr>\n                                            <th class=\"font\">Serial #</th>\n                                            <th class=\"font\">Data Created</th>\n                                            <th class=\"font\">Date Recvd</th>\n                                            <th class=\"font\">Clinical Data Subitem</th>\n                                            <th class=\"font\">Subitemid</th>\n                                            <th class=\"font text-center\">Action</th>\n                                        </tr>\n                                    </thead>\n\n                                    <tbody>\n\n                                        <tr>\n                                            <td>1</td>\n                                            <td>\u2713</td>\n                                            <td>15/01/2026</td>\n                                            <td>IBUPROFENE</td>\n                                            <td>39876</td>\n                                            <td class=\"text-center\">\n                                                <button (click)=\"openDataRepo(masterEntryPKTemplate)\"\n                                                    class=\"btn btn-dark btn-sm mr-2\">\n                                                    Clinical Data Repository\n                                                </button>\n\n                                                <button class=\"btn btn-dark btn-sm\">\n                                                    W-Flow Cycles\n                                                </button>\n                                            </td>\n                                        </tr>\n\n                                        <tr>\n                                            <td>2</td>\n                                            <td>\u2713</td>\n                                            <td>18/01/2026</td>\n                                            <td>PARACETAMOL</td>\n                                            <td>39877</td>\n                                            <td class=\"text-center\">\n                                                <button (click)=\"openDataRepo(masterEntryPKTemplate)\"\n                                                    class=\"btn btn-dark btn-sm mr-2\">\n                                                    Clinical Data Repository\n                                                </button>\n\n                                                <button class=\"btn btn-dark btn-sm\">\n                                                    W-Flow Cycles\n                                                </button>\n                                            </td>\n                                        </tr>\n\n                                        <tr>\n                                            <td>3</td>\n                                            <td>\u2713</td>\n                                            <td>20/01/2026</td>\n                                            <td>AZITHROMYCIN</td>\n                                            <td>39878</td>\n                                            <td class=\"text-center\">\n                                                <button (click)=\"openDataRepo(masterEntryPKTemplate)\"\n                                                    class=\"btn btn-dark btn-sm mr-2\">\n                                                    Clinical Data Repository\n                                                </button>\n\n                                                <button class=\"btn btn-dark btn-sm\">\n                                                    W-Flow Cycles\n                                                </button>\n                                            </td>\n                                        </tr>\n\n                                    </tbody>\n\n                                    <ng-template #noData>\n                                        <tr>\n                                            <td colspan=\"6\" class=\"text-center\">\n                                                No records found\n                                            </td>\n                                        </tr>\n                                    </ng-template>\n\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </tab>\n\n            <tab heading=\"Pharmacovigilance\" id=\"tab3\" (selectTab)=\"onTabChange('tab3')\">\n\n                <!-- Pharmacovigilance Content -->\n\n            </tab>\n\n        </tabset>\n\n    </div>\n</div>\n\n<ng-template #masterEntryPKTemplate>\n\n    <!-- HEADER -->\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">PK (Drug KBase)</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"modal-body\">\n\n        <div class=\"store-tab-content\">\n\n            <tabset class=\"custom-tabset\">\n\n                <tab heading=\"Drug PK Profile\" id=\"tab1\">\n\n                    <form [formGroup]=\"drugPkForm\">\n\n                        <div class=\"container-fluid pk-form mt-3\">\n\n                            <div class=\"row mb-3\">\n                                <div class=\"col-md-3\">\n                                    <label>Subitem id</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"subitemId\">\n                                </div>\n\n                                <div class=\"col-md-5\">\n                                    <label>Drug Name</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"drugName\">\n                                </div>\n\n                                <!-- <div class=\"col-md-4\">\n                                    <label>PK id</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"pkId\">\n                                </div> -->\n                            </div>\n\n                            <div class=\"row mb-3\">\n                                <div class=\"col-md-4\">\n                                    <label>Drug Type</label>\n                                    <select class=\"form-control\" formControlName=\"drugType\">\n                                        <option value=\"\">Select Drug Type</option>\n                                        <option>Small Molecule</option>\n                                        <option>Biologic</option>\n                                        <option>Cellular</option>\n                                        <option>Gene Therapy</option>\n                                    </select>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <label>Drug Form</label>\n                                    <select class=\"form-control\" formControlName=\"drugForm\">\n                                        <option value=\"\">Select Form</option>\n                                        <option>Tablet</option>\n                                        <option>Capsule</option>\n                                        <option>Injection</option>\n                                        <option>Syrup</option>\n                                        <option>Cream</option>\n                                        <option>Ointment</option>\n                                        <option>Aerosols</option>\n                                    </select>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <label>Route of Administration</label>\n                                    <select class=\"form-control\" formControlName=\"route\">\n                                        <option value=\"\">Select Route</option>\n                                        <option>Internal (Gastrointestinal)</option>\n                                        <option>Parenteral</option>\n                                        <option>Topical</option>\n                                    </select>\n                                </div>\n                            </div>\n\n                            <div class=\"row mb-3\">\n\n                                <!-- ================= Target Class ================= -->\n                                <div class=\"col-md-3\">\n                                    <label>Target Class</label>\n                                    <select class=\"form-control\" formControlName=\"targetClass\">\n                                        <option value=\"\">Select Class</option>\n                                        <option value=\"T1\">Receptors</option>\n                                        <option value=\"T2\">Enzymes</option>\n                                        <option value=\"T3\">Ion Channels</option>\n                                        <option value=\"T4\">Transporters</option>\n                                        <option value=\"T5\">Nucleic Acids / Genetic Targets</option>\n                                        <option value=\"T6\">Structural Proteins</option>\n                                        <option value=\"T7\">Others (Emerging/Complex)</option>\n                                    </select>\n                                </div>\n\n\n                                <!-- ================= Target Family ================= -->\n                                <div class=\"col-md-3\">\n                                    <label>Target Family</label>\n                                    <select class=\"form-control\" formControlName=\"targetFamily\">\n\n                                        <option value=\"\">Select Family</option>\n\n                                        <!-- T1 -->\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T1'\" value=\"F1\">GPCR\n                                        </option>\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T1'\" value=\"F2\">Nuclear\n                                            Receptors</option>\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T1'\" value=\"F3\">\n                                            Ligand-Gated Ion Channel Receptors</option>\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T1'\" value=\"F4\">\n                                            Tyrosine Kinase Receptors</option>\n\n                                        <!-- T2 -->\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T2'\" value=\"F5\">Kinases\n                                        </option>\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T2'\" value=\"F6\">\n                                            Proteases</option>\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T2'\" value=\"F7\">\n                                            Oxidoreductases</option>\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T2'\" value=\"F8\">\n                                            Transferases</option>\n\n                                        <!-- T3 -->\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T3'\" value=\"F9\">\n                                            Voltage-Gated Channels</option>\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T3'\" value=\"F10\">\n                                            Ligand-Gated Channels</option>\n\n                                        <!-- T4 -->\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T4'\" value=\"F11\">\n                                            Neurotransmitter Transporters</option>\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T4'\" value=\"F12\">Efflux\n                                            Transporters</option>\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T4'\" value=\"F13\">Uptake\n                                            Transporters</option>\n\n                                        <!-- T5 -->\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T5'\" value=\"F14\">DNA\n                                        </option>\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T5'\" value=\"F15\">RNA\n                                        </option>\n\n                                        <!-- T6 -->\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T6'\" value=\"F16\">\n                                            Cytoskeletal Proteins</option>\n\n                                        <!-- T7 -->\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T7'\" value=\"F17\">Immune\n                                            Checkpoints</option>\n                                        <option *ngIf=\"drugPkForm.get('targetClass')?.value === 'T7'\" value=\"F18\">\n                                            Protein Complexes</option>\n\n                                    </select>\n                                </div>\n\n\n                                <!-- ================= Target Subtype ================= -->\n                                <div class=\"col-md-3\">\n                                    <label>Target Subtype</label>\n                                    <select class=\"form-control\" formControlName=\"targetSubtype\">\n\n                                        <option value=\"\">Select Subtype</option>\n\n                                        <!-- F1 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F1'\">Adrenergic\n                                            Receptors</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F1'\">Dopamine\n                                            Receptors</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F1'\">Serotonin\n                                            Receptors</option>\n\n                                        <!-- F2 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F2'\">Estrogen Receptor\n                                            (ER)</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F2'\">Androgen Receptor\n                                            (AR)</option>\n\n                                        <!-- F3 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F3'\">NMDA Receptor\n                                        </option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F3'\">GABA-A Receptor\n                                        </option>\n\n                                        <!-- F4 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F4'\">EGFR</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F4'\">VEGFR</option>\n\n                                        <!-- F5 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F5'\">Tyrosine Kinases\n                                            (EGFR, BCR-ABL)</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F5'\">Serine/Threonine\n                                            Kinases</option>\n\n                                        <!-- F6 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F6'\">HIV Protease\n                                        </option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F6'\">Thrombin</option>\n\n                                        <!-- F7 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F7'\">COX-1</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F7'\">COX-2</option>\n\n                                        <!-- F8 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F8'\">DNA Polymerase\n                                        </option>\n\n                                        <!-- F9 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F9'\">Sodium Channels\n                                            (Nav1.5)</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F9'\">Calcium Channels\n                                            (L-type)</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F9'\">Potassium\n                                            Channels</option>\n\n                                        <!-- F10 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F10'\">Nicotinic ACh\n                                            Channel</option>\n\n                                        <!-- F11 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F11'\">SERT</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F11'\">DAT</option>\n\n                                        <!-- F12 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F12'\">P-gp</option>\n\n                                        <!-- F13 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F13'\">GLUT1</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F13'\">SGLT2</option>\n\n                                        <!-- F14 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F14'\">DNA\n                                            Topoisomerase</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F14'\">DNA Polymerase\n                                        </option>\n\n                                        <!-- F15 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F15'\">mRNA (antisense\n                                            targets)</option>\n\n                                        <!-- F16 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F16'\">Tubulin</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F16'\">Actin</option>\n\n                                        <!-- F17 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F17'\">PD-1</option>\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F17'\">PD-L1</option>\n\n                                        <!-- F18 -->\n                                        <option *ngIf=\"drugPkForm.get('targetFamily')?.value === 'F18'\">Ribosome\n                                        </option>\n\n                                    </select>\n                                </div>\n\n\n                                <!-- ================= Specific Target ================= -->\n                                <div class=\"col-md-3\">\n                                    <label>Specific Target</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"specificTarget\"\n                                        placeholder=\"Enter or Null\">\n                                </div>\n\n                            </div>\n\n                            <div class=\"row mb-3\">\n                                <div class=\"col-md-4\">\n                                    <label>Sub Route of Administration</label>\n\n                                    <select class=\"form-control\" formControlName=\"subRoute\">\n\n                                        <option value=\"\">Select Sub Route</option>\n\n                                        <!-- ================= Internal ================= -->\n                                        <option *ngIf=\"drugPkForm.get('route')?.value === 'Internal (Gastrointestinal)'\"\n                                            value=\"Oral (PO)\">\n                                            Oral (PO)\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('route')?.value === 'Internal (Gastrointestinal)'\"\n                                            value=\"Sublingual / Buccal\">\n                                            Sublingual / Buccal\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('route')?.value === 'Internal (Gastrointestinal)'\"\n                                            value=\"Rectal\">\n                                            Rectal\n                                        </option>\n\n\n                                        <!-- ================= Parenteral ================= -->\n                                        <option *ngIf=\"drugPkForm.get('route')?.value === 'Parenteral'\"\n                                            value=\"Intravenous (IV)\">\n                                            Intravenous (IV)\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('route')?.value === 'Parenteral'\"\n                                            value=\"Intramuscular (IM)\">\n                                            Intramuscular (IM)\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('route')?.value === 'Parenteral'\"\n                                            value=\"Subcutaneous (SC)\">\n                                            Subcutaneous (SC)\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('route')?.value === 'Parenteral'\"\n                                            value=\"Intradermal\">\n                                            Intradermal\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('route')?.value === 'Parenteral'\"\n                                            value=\"Inhalation\">\n                                            Inhalation\n                                        </option>\n\n\n                                        <!-- ================= Topical ================= -->\n                                        <option *ngIf=\"drugPkForm.get('route')?.value === 'Topical'\"\n                                            value=\"Transdermal\">\n                                            Transdermal\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('route')?.value === 'Topical'\"\n                                            value=\"Dermal / Cutaneous\">\n                                            Dermal / Cutaneous\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('route')?.value === 'Topical'\" value=\"Mucosal\">\n                                            Mucosal\n                                        </option>\n\n                                    </select>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <label>Drug Strength</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"drugStrength\">\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <label>MU</label>\n                                    <select class=\"form-control\" formControlName=\"mu\">\n                                        <option>mg</option>\n                                        <option>g</option>\n                                        <option>mcg</option>\n                                        <option>%</option>\n                                        <option>mg/mL</option>\n                                    </select>\n                                </div>\n                            </div>\n\n                            <div class=\"row mb-3\">\n                                <div class=\"col-md-4\">\n                                    <label>Drug Ref Product</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"drugRefProduct\">\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <label>Drug Study Type Population</label>\n                                    <select class=\"form-control\" formControlName=\"studyPopulation\">\n                                        <option>Healthy</option>\n                                        <option>Patients</option>\n                                        <option>Healthy & Patients</option>\n                                    </select>\n                                </div>\n                            </div>\n\n                            <div class=\"row mb-3\">\n                                <div class=\"col-md-4\">\n                                    <label>Drug Phase</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"drugPhase\">\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <label>Country</label>\n                                    <select class=\"form-control\" formControlName=\"country\">\n                                        <option selected value=\"\">Select</option>\n                                    </select>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <label>Sponsor</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"sponsor\">\n                                </div>\n                            </div>\n\n                            <div class=\"row mb-3\">\n                                <div class=\"col-md-6\">\n                                    <label>Dose Unit</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"doseUnit\">\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <label>Bioanalytical Method</label>\n\n                                    <select class=\"form-control\" formControlName=\"bioanalyticalMethod\">\n\n                                        <option value=\"\">Select Method</option>\n\n                                        <!-- ================= Small Molecule ================= -->\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Small Molecule'\">\n                                            LC-MS/MS (Liquid Chromatography-Tandem Mass Spectrometry)\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Small Molecule'\">\n                                            GC-MS (Gas Chromatography-Mass Spectrometry)\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Small Molecule'\">\n                                            Sample Preparation (PPT/SPE/LLE)\n                                        </option>\n\n\n                                        <!-- ================= Biologic ================= -->\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Biologic'\">\n                                            Ligand Binding Assays (LBA)\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Biologic'\">\n                                            Hybrid LBA/LC-MS/MS\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Biologic'\">\n                                            Mass Spectrometry (HRMS)\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Biologic'\">\n                                            Capillary Electrophoresis (CE) Immunoassay\n                                        </option>\n\n\n                                        <!-- ================= Cellular ================= -->\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Cellular'\">\n                                            Flow Cytometry (FACS)\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Cellular'\">\n                                            qPCR/ddPCR\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Cellular'\">\n                                            ELISpot (Enzyme-Linked ImmunoSpot)\n                                        </option>\n\n\n                                        <!-- ================= Gene Therapy ================= -->\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Gene Therapy'\">\n                                            qPCR (Quantitative PCR) & RT-qPCR\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Gene Therapy'\">\n                                            ddPCR (Droplet Digital PCR)\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Gene Therapy'\">\n                                            Hybridization-based ELISA\n                                        </option>\n\n                                        <option *ngIf=\"drugPkForm.get('drugType')?.value === 'Gene Therapy'\">\n                                            Next-Generation Sequencing (NGS)\n                                        </option>\n\n                                    </select>\n                                </div>\n                            </div>\n\n                            <div class=\"row mb-4\">\n                                <div class=\"col-md-4\">\n                                    <label>Var 1</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var1\">\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <label>Var 2</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var2\">\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <label>Var 3</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var3\">\n                                </div>\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </tab>\n\n                <tab heading=\"A-Absorption\" id=\"tab2\">\n\n                    <form [formGroup]=\"absorptionForm\">\n\n                        <div class=\"container-fluid pk-form mt-3\">\n\n                            <div class=\"row mb-3\">\n                                <div class=\"col-md-12\">\n                                    <h5 class=\"section-title\">BIO-Availability</h5>\n                                </div>\n                            </div>\n\n                            <!-- BA DETAIL -->\n\n                            <div class=\"mb-3\">\n                                <div class=\"col-md-8\">\n                                    <label>Drug Bioavailability (BA) Detail</label>\n\n                                    <textarea class=\"form-control\" rows=\"4\" formControlName=\"baDetail\">\n                                    </textarea>\n                                </div>\n                            </div>\n\n                            <!-- AUC / DOSE -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>AUC (Area under Curve) ORAL</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"aucOral\">\n\n                                    <label class=\"mt-3\">Drug Dose ORAL</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"doseOral\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>AUC (Area under Curve) IV</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"aucIv\">\n\n                                    <label class=\"mt-3\">Drug Dose IV</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"doseIv\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug (Absolute) BA-f%</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"absoluteBA\">\n\n                                    <label class=\"mt-3\">Drug (Relative) F%</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"relativeF\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- TMAX / CMAX / KA -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-3\">\n\n                                    <label>Drug Tmax (Hours)</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"tmax\">\n\n                                </div>\n\n                                <div class=\"col-md-3\">\n\n                                    <label>Drug Cmax (ng/mL)</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"cmax\">\n\n                                </div>\n\n                                <div class=\"col-md-3\">\n\n                                    <label>Drug Ka (Speed of Absorption)</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"ka\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- PKA / FOOD EFFECT -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-3\">\n\n                                    <label>pKa (Acid/Base Dissociation)</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"pka\">\n\n                                </div>\n\n                                <div class=\"col-md-3\">\n\n                                    <label>BA (Food Effects)</label>\n\n                                    <select class=\"form-control\" formControlName=\"foodEffect\">\n\n                                        <option value=\"\">Select</option>\n                                        <option value=\"None\">None</option>\n                                        <option value=\"Increases\">Increases</option>\n                                        <option value=\"Decreases\">Decreases</option>\n\n                                    </select>\n\n                                </div>\n\n                                <div class=\"col-md-3\">\n\n                                    <label>Drug BA</label>\n\n                                    <select class=\"form-control\" formControlName=\"drugBA\">\n\n                                        <option value=\"\">Select</option>\n                                        <option value=\"High\">High</option>\n                                        <option value=\"Moderate\">Moderate</option>\n                                        <option value=\"Low\">Low</option>\n\n                                    </select>\n\n                                </div>\n\n                            </div>\n\n                            <!-- CHECKBOXES -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-3\">\n\n                                    <div class=\"form-check\">\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"gastricPhDependence\">\n\n                                        <label class=\"form-check-label\">\n                                            BA-Gastric PH Dependence\n                                        </label>\n                                    </div>\n\n                                    <div class=\"form-check\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"supportTable2\">\n\n                                        <label class=\"form-check-label\">\n                                            BA-Support 2 Table\n                                        </label>\n                                    </div>\n\n                                    <div class=\"form-check\">\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"accessedUsingFeed\">\n\n                                        <label class=\"form-check-label\">\n                                            BA-Accessed using Feed\n                                        </label>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-md-3\">\n\n                                    <div class=\"form-check\">\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"firstpassMetabolism\">\n\n                                        <label class=\"form-check-label\">\n                                            BA-Firstpass Metabolism\n                                        </label>\n                                    </div>\n\n                                    <div class=\"form-check\">\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"measuredUsingAUC\">\n\n                                        <label class=\"form-check-label\">\n                                            BA-Measured Using AUC\n                                        </label>\n                                    </div>\n\n                                    <div class=\"form-check\">\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"changesUsingDoseEscalation\">\n\n                                        <label class=\"form-check-label\">\n                                            BA-Changes using Dose Escalation\n                                        </label>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-md-3\">\n\n                                    <div class=\"form-check\">\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"consistentPatient\">\n\n                                        <label class=\"form-check-label\">\n                                            BA-Consistent Patient\n                                        </label>\n                                    </div>\n\n                                    <div class=\"form-check\">\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"measuredUsingCmax\">\n\n                                        <label class=\"form-check-label\">\n                                            BA-Measured Using Cmax\n                                        </label>\n                                    </div>\n\n                                    <div class=\"form-check\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"pgpSubstrate\">\n\n                                        <label class=\"form-check-label\">\n                                            BA-PGP Substrate\n                                        </label>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-md-3\">\n\n                                    <div class=\"form-check\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"supportTable1\">\n\n                                        <label class=\"form-check-label\">\n                                            BA-Support 1 Table\n                                        </label>\n                                    </div>\n\n                                    <div class=\"form-check\">\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"accessedUsingFasting\">\n\n                                        <label class=\"form-check-label\">\n                                            BA-Accessed using Fasting\n                                        </label>\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <!-- EXTRA -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"scLymphaticUptake\">\n\n                                        <label class=\"form-check-label\">\n                                            Drug-SC-Lymphatic-Uptake\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug-Cell-Engraftment Rate</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"engraftmentRate\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug Vector Entry Rate</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"vectorEntryRate\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- VARS -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 1</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var1\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 2</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var2\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 3</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var3\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- CLINICAL REF -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-12\">\n\n                                    <label>\n                                        Drug Eagent Clinical Ref, On BioAvailability\n                                    </label>\n\n                                    <textarea style=\"min-height: 120px; resize: vertical;\" class=\"form-control\" rows=\"4\"\n                                        formControlName=\"clinicalRef\">\n                                    </textarea>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </tab>\n\n                <tab heading=\"D-Distribution\" id=\"tab3\">\n\n                    <form [formGroup]=\"distributionForm\">\n\n                        <div class=\"container-fluid pk-form mt-3\">\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-12\">\n\n                                    <h5 class=\"section-title\">\n\n                                        Distribution\n\n                                        <span class=\"section-subtitle\">\n                                            Where The Drugs goes in the Body\n                                        </span>\n\n                                    </h5>\n\n                                </div>\n\n                            </div>\n\n                            <!-- TOP SECTION -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug Volume of Distribution (Vd)</label>\n\n                                    <small class=\"text-muted d-block\">\n                                        (Tissue Penetration)\n                                    </small>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"volumeDistribution\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug Plasma Protein Binding %</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"plasmaProteinBinding\">\n\n                                </div>\n\n                                <div class=\"col-md-4 d-flex align-items-end\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"bbbPenetration\">\n\n                                        <label class=\"form-check-label\">\n                                            Drug BBB Penetration\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <!-- SECOND SECTION -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug Tissue Selectivity</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"tissueSelectivity\">\n\n                                </div>\n\n                                <div class=\"col-md-4 d-flex align-items-end\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"placentalTransfer\">\n\n                                        <label class=\"form-check-label\">\n                                            Drug Placental Transfer\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-md-4 d-flex align-items-end\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"breastMilkExcretion\">\n\n                                        <label class=\"form-check-label\">\n                                            Drug Breast Milk Excretion\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <!-- VARS -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 1</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var1\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 2</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var2\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 3</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var3\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- SUMMARY -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-12\">\n\n                                    <label>Distribution Summary</label>\n\n                                    <textarea style=\"min-height: 120px; resize: vertical;\" class=\"form-control\" rows=\"4\"\n                                        formControlName=\"summary\">\n                                    </textarea>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </tab>\n\n                <tab heading=\"M-Metabolism\" id=\"tab4\">\n\n                    <form [formGroup]=\"metabolismForm\">\n\n                        <div class=\"container-fluid pk-form mt-3\">\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-12\">\n\n                                    <h5 class=\"section-title\">\n\n                                        Metabolism\n\n                                        <span class=\"section-subtitle\">\n                                            How the Drug is Bio-Transformed\n                                        </span>\n\n                                    </h5>\n\n                                </div>\n\n                            </div>\n\n                            <!-- TOP SECTION -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug Primary Metabolism Organ</label>\n\n                                    <select class=\"form-control\" formControlName=\"metabolismOrgan\">\n\n                                        <option value=\"\">Select Organ</option>\n                                        <option value=\"Liver\">Liver</option>\n                                        <option value=\"Gut\">Gut</option>\n                                        <option value=\"Plasma\">Plasma</option>\n\n                                    </select>\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug Hepatic Clearance</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"hepaticClearance\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug Intrinsic Clearance</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"intrinsicClearance\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- ENZYME -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug Enzyme Involved</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"enzymeInvolved\">\n\n                                </div>\n\n                                <div class=\"col-md-4 d-flex align-items-end\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"enzymeInhibitor\">\n\n                                        <label class=\"form-check-label\">\n                                            Drug Enzyme Inhibitor\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-md-4 d-flex align-items-end\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"enzymeInducer\">\n\n                                        <label class=\"form-check-label\">\n                                            Drug Enzyme Inducer\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <!-- METABOLITES -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4 d-flex align-items-end\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"activeMetabolites\">\n\n                                        <label class=\"form-check-label\">\n                                            Drug Active Metabolites\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug Metabolites Potency</label>\n\n                                    <select class=\"form-control\" formControlName=\"metabolitePotency\">\n\n                                        <option value=\"\">Select Potency</option>\n                                        <option value=\"Active\">Active</option>\n                                        <option value=\"Less Active\">Less Active</option>\n                                        <option value=\"Toxic\">Toxic</option>\n\n                                    </select>\n\n                                </div>\n\n                                <div class=\"col-md-4 d-flex align-items-end\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"geneticPolymorphism\">\n\n                                        <label class=\"form-check-label\">\n                                            Drug Genetic Polymorphism Impact\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <!-- VARS -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 1</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var1\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 2</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var2\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 3</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var3\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- SUMMARY -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-12\">\n\n                                    <label>Metabolism Summary</label>\n\n                                    <textarea style=\"min-height: 120px; resize: vertical;\" class=\"form-control\" rows=\"4\"\n                                        formControlName=\"summary\">\n                                    </textarea>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </tab>\n\n                <tab heading=\"E-Elimination\" id=\"tab5\">\n\n                    <form [formGroup]=\"eliminationForm\">\n\n                        <div class=\"container-fluid pk-form mt-3\">\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-12\">\n\n                                    <h5 class=\"section-title\">\n\n                                        Elimination\n\n                                        <span class=\"section-subtitle\">\n                                            How The Drug Leaves the Body\n                                        </span>\n\n                                    </h5>\n\n                                </div>\n\n                            </div>\n\n                            <!-- TOP SECTION -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug Clearance Value</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"clearanceValue\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Drug E-Half Life (L1/2)</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"halfLife\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Route of Elimination</label>\n\n                                    <select class=\"form-control\" formControlName=\"routeElimination\">\n\n                                        <option value=\"\">Select Route</option>\n                                        <option value=\"Renal\">Renal</option>\n                                        <option value=\"Biliary\">Biliary</option>\n                                        <option value=\"Fecal\">Fecal</option>\n\n                                    </select>\n\n                                </div>\n\n                            </div>\n\n                            <!-- EXCRETION -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Renal Excretion %</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"renalExcretion\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Hepatic Excretion %</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"hepaticExcretion\">\n\n                                </div>\n\n                                <div class=\"col-md-4 d-flex align-items-end\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"dialyzable\">\n\n                                        <label class=\"form-check-label\">\n                                            Dialyzable\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <!-- VARS -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 1</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var1\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 2</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var2\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 3</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var3\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- SUMMARY -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-12\">\n\n                                    <label>Elimination Summary</label>\n\n                                    <textarea style=\"min-height: 120px; resize: vertical;\" class=\"form-control\" rows=\"4\"\n                                        formControlName=\"summary\">\n                                    </textarea>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </tab>\n\n                <tab heading=\"Time Based\" id=\"tab6\">\n\n                    <form [formGroup]=\"timeBasedForm\">\n\n                        <div class=\"container-fluid pk-form mt-3\">\n\n                            <!-- TITLE -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-12\">\n\n                                    <h5 class=\"section-title\">\n                                        Drug-Time Based Behaviours\n                                        <span class=\"section-subtitle\">\n                                            (Repeated Dosing Behaviour)\n                                        </span>\n                                    </h5>\n\n                                </div>\n\n                            </div>\n\n                            <!-- ROW 1 -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>\n                                        Drug Time to Steady State\n                                        (4-5 Half lives)\n                                    </label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"steadyState\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>\n                                        Drug Accumulation Risk\n                                    </label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"accumulationRisk\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>\n                                        Drug Peak thru Fluctuation %\n                                    </label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"peakFluctuation\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- LINEAR STATUS BOX -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-6\">\n\n                                    <div class=\"border rounded p-3\">\n\n                                        <!-- FLAG 1 -->\n\n                                        <div class=\"form-check mb-3\">\n\n                                            <input class=\"form-check-input\" type=\"checkbox\"\n                                                formControlName=\"linearStatus\">\n\n                                            <label class=\"form-check-label\">\n\n                                                Drug Dose Proportion Linear Status\n\n                                            </label>\n\n                                        </div>\n\n                                        <!-- FIELD VAR 4 -->\n\n                                        <div>\n\n                                            <label>\n                                                Drug Non-Linear Threshold\n                                            </label>\n\n                                            <input type=\"text\" class=\"form-control\"\n                                                formControlName=\"nonLinearThreshold\">\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <!-- FLAG 2 -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"dailyCompliance\">\n\n                                        <label class=\"form-check-label\">\n\n                                            Drug Dose Daily Compliance Suitability\n\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <!-- SUMMARY -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-12\">\n\n                                    <label>\n                                        Drug Time Based Behaviour Summary\n                                    </label>\n\n                                    <textarea class=\"form-control\" rows=\"5\" formControlName=\"summary\">\n                                    </textarea>\n\n                                </div>\n\n                            </div>\n\n                            <!-- VARS -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 1</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var1\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 2</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var2\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 3</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var3\">\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </tab>\n\n                <tab heading=\"Spl-Population\" id=\"tab7\">\n\n                    <form [formGroup]=\"specialPopulationForm\">\n\n                        <div class=\"container-fluid pk-form mt-3\">\n\n                            <!-- TITLE -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-12\">\n\n                                    <h5 class=\"section-title\">\n\n                                        Drugs Special Population Modifier\n\n                                        <span class=\"section-subtitle\">\n\n                                            - Real World Prescribing\n\n                                        </span>\n\n                                    </h5>\n\n                                </div>\n\n                            </div>\n\n                            <!-- FIELD VAR 1 & 2 -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-6\">\n\n                                    <label>\n                                        Drug Renal Impairment Adjustment\n                                    </label>\n\n                                    <select class=\"form-control\" formControlName=\"renalAdjustment\">\n\n                                        <option value=\"\">\n                                            Select\n                                        </option>\n\n                                        <option value=\"None\">\n                                            None\n                                        </option>\n\n                                        <option value=\"Minor\">\n                                            Minor\n                                        </option>\n\n                                        <option value=\"Severe\">\n                                            Severe\n                                        </option>\n\n                                    </select>\n\n                                </div>\n\n                                <div class=\"col-md-6\">\n\n                                    <label>\n                                        Drug Hepatic Impairment Adjustment\n                                    </label>\n\n                                    <select class=\"form-control\" formControlName=\"hepaticAdjustment\">\n\n                                        <option value=\"\">\n                                            Select\n                                        </option>\n\n                                        <option value=\"None\">\n                                            None\n                                        </option>\n\n                                        <option value=\"Minor\">\n                                            Minor\n                                        </option>\n\n                                        <option value=\"Severe\">\n                                            Severe\n                                        </option>\n\n                                    </select>\n\n                                </div>\n\n                            </div>\n\n                            <!-- FLAGS -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"elderlyAdjustment\">\n\n                                        <label class=\"form-check-label\">\n\n                                            Drug Elderly Adjustment\n\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"pediatricData\">\n\n                                        <label class=\"form-check-label\">\n\n                                            Drug Pediatric Data Available\n\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"obesityImpact\">\n\n                                        <label class=\"form-check-label\">\n\n                                            Drug Obesity Impact\n\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <!-- FIELD VAR 3 + FIELD VAR 4 -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>\n                                        Drug Pregnancy Category\n                                    </label>\n\n                                    <select class=\"form-control\" formControlName=\"pregnancyCategory\">\n\n                                        <option value=\"\">\n                                            Select\n                                        </option>\n\n                                        <option value=\"No Risk Seen for Human Category\">\n                                            No Risk Seen for Human Category\n                                        </option>\n\n                                        <option value=\"Risk Seen for Human Category\">\n                                            Risk Seen for Human Category\n                                        </option>\n\n                                    </select>\n\n                                </div>\n\n                                <div class=\"col-md-8\">\n\n                                    <label>\n                                        Special Population Drug Adjustment Note\n                                    </label>\n\n                                    <textarea class=\"form-control\" rows=\"5\" formControlName=\"adjustmentNote\">\n                                    </textarea>\n\n                                </div>\n\n                            </div>\n\n                            <!-- VARS -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 1</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var1\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 2</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var2\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 3</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var3\">\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </tab>\n\n                <tab heading=\"Drug-Drug Int\" id=\"tab8\">\n\n                    <form [formGroup]=\"drugDrugInteractionForm\">\n\n                        <div class=\"container-fluid pk-form mt-3\">\n\n                            <!-- TITLE -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-12\">\n\n                                    <h5 class=\"section-title\">\n\n                                        Drug-Drug Interaction\n\n                                        <span class=\"section-subtitle\">\n\n                                            : Critical for Polypharmacy\n\n                                        </span>\n\n                                    </h5>\n\n                                </div>\n\n                            </div>\n\n                            <!-- FIELD VAR 1 -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>\n                                        Drug-Drug Interaction Risk\n                                    </label>\n\n                                    <select class=\"form-control\" formControlName=\"interactionRisk\">\n\n                                        <option value=\"\">\n                                            Select\n                                        </option>\n\n                                        <option value=\"Low\">\n                                            Low\n                                        </option>\n\n                                        <option value=\"Moderate\">\n                                            Moderate\n                                        </option>\n\n                                        <option value=\"High\">\n                                            High\n                                        </option>\n\n                                    </select>\n\n                                </div>\n\n                            </div>\n\n                            <!-- FIELD VAR 2 -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-8\">\n\n                                    <label>\n                                        Drug Enzyme Inhibitors Affect Exposure\n                                    </label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"enzymeInhibitorExposure\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- FIELD VAR 3 -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-8\">\n\n                                    <label>\n                                        Drug Inducer Affect Exposure\n                                    </label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"inducerExposure\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- FIELD VAR 4 -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-8\">\n\n                                    <label>\n                                        Drug Transporter Exposure\n                                    </label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"transporterExposure\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- FIELD VAR 5 -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-8\">\n\n                                    <label>\n                                        Drug-Food Interaction\n                                    </label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"foodInteraction\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- FLAG 1 -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"alcoholInteraction\">\n\n                                        <label class=\"form-check-label\">\n\n                                            Drug Alcohol Interaction Exposure\n\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <!-- FIELD VAR 6 -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-12\">\n\n                                    <label>\n                                        Drug Drug Interaction Summary\n                                    </label>\n\n                                    <textarea class=\"form-control\" rows=\"6\" formControlName=\"interactionSummary\">\n                                    </textarea>\n\n                                </div>\n\n                            </div>\n\n                            <!-- EXTRA VARS -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 1</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var1\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 2</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var2\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 3</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var3\">\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </tab>\n\n                <tab heading=\"Clinic Interpretaion\" id=\"tab9\">\n\n                    <form [formGroup]=\"clinicalInterpretationForm\">\n\n                        <div class=\"container-fluid pk-form mt-3\">\n\n                            <!-- TITLE -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-12\">\n\n                                    <h5 class=\"section-title\">\n\n                                        Drugs Clinical Interpretation\n\n                                        <span class=\"section-subtitle\">\n\n                                            - What doctor actually cares about\n\n                                        </span>\n\n                                    </h5>\n\n                                </div>\n\n                            </div>\n\n                            <!-- FIELD VAR 1 + 2 -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-7\">\n\n                                    <label>\n                                        Drug PK Therapeutic Window Index\n                                    </label>\n\n                                    <textarea class=\"form-control\" rows=\"4\" formControlName=\"therapeuticWindowIndex\">\n                                    </textarea>\n\n                                </div>\n\n                                <div class=\"col-md-5\">\n\n                                    <label>\n                                        Drug PK Therapeutic Window Interpretation\n                                    </label>\n\n                                    <select class=\"form-control\" formControlName=\"therapeuticWindowInterpretation\">\n\n                                        <option value=\"\">\n                                            Select\n                                        </option>\n\n                                        <option value=\"Narrow\">\n                                            Narrow\n                                        </option>\n\n                                        <option value=\"Wide\">\n                                            Wide\n                                        </option>\n\n                                    </select>\n\n                                </div>\n\n                            </div>\n\n                            <!-- FLAG 1 + FIELD VAR 3 + FIELD VAR 4 -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-3\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"tdmMonitoring\">\n\n                                        <label class=\"form-check-label\">\n\n                                            TDM Monitoring Registered\n\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-md-3\">\n\n                                    <label>\n                                        Dose Flexibility\n                                    </label>\n\n                                    <select class=\"form-control\" formControlName=\"doseFlexibility\">\n\n                                        <option value=\"\">\n                                            Select\n                                        </option>\n\n                                        <option value=\"Low\">\n                                            Low\n                                        </option>\n\n                                        <option value=\"Moderate\">\n                                            Moderate\n                                        </option>\n\n                                        <option value=\"High\">\n                                            High\n                                        </option>\n\n                                    </select>\n\n                                </div>\n\n                                <div class=\"col-md-6\">\n\n                                    <label>\n                                        Dose Forgiveness Index\n                                        (Missed Dose Safety)\n                                    </label>\n\n                                    <textarea class=\"form-control\" rows=\"4\" formControlName=\"doseForgivenessIndex\">\n                                    </textarea>\n\n                                </div>\n\n                            </div>\n\n                            <!-- FIELD VAR 5 + FIELD VAR 6 -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-6\">\n\n                                    <label>\n                                        PK Safety Summary\n                                    </label>\n\n                                    <textarea class=\"form-control\" rows=\"6\" formControlName=\"pkSafetySummary\">\n                                    </textarea>\n\n                                </div>\n\n                                <div class=\"col-md-6\">\n\n                                    <label>\n                                        Drug MR Summary\n                                    </label>\n\n                                    <textarea class=\"form-control\" rows=\"6\" formControlName=\"mrSummary\">\n                                    </textarea>\n\n                                </div>\n\n                            </div>\n\n                            <!-- EXTRA VARS -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 1</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var1\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 2</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var2\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 3</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var3\">\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </tab>\n\n                <tab heading=\"Requ-Evidnc\" id=\"tab10\">\n\n                    <form [formGroup]=\"regulatoryEvidenceForm\">\n\n                        <div class=\"container-fluid pk-form mt-3\">\n\n                            <!-- TITLE -->\n\n                            <div class=\"row mb-3\">\n\n                                <div class=\"col-md-12\">\n\n                                    <h5 class=\"section-title\">\n\n                                        PK Drugs Regulatory Evidence\n\n                                        <span class=\"section-subtitle\">\n\n                                            - Medical Affairs & Audits\n\n                                        </span>\n\n                                    </h5>\n\n                                </div>\n\n                            </div>\n\n                            <!-- FIELD VAR 1 + 2 + 3 -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>\n                                        Drug Study Type\n                                    </label>\n\n                                    <select class=\"form-control\" formControlName=\"studyType\">\n\n                                        <option value=\"\">\n                                            Select\n                                        </option>\n\n                                        <option value=\"BE\">\n                                            BE\n                                        </option>\n\n                                        <option value=\"BA\">\n                                            BA\n                                        </option>\n\n                                        <option value=\"Phase 1\">\n                                            Phase 1\n                                        </option>\n\n                                    </select>\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>\n                                        Drug Regulatory Approval\n                                    </label>\n\n                                    <select class=\"form-control\" formControlName=\"regulatoryApproval\">\n\n                                        <option value=\"\">\n                                            Select\n                                        </option>\n\n                                        <option value=\"DCGA\">\n                                            DCGA\n                                        </option>\n\n                                        <option value=\"USFDA\">\n                                            USFDA\n                                        </option>\n\n                                        <option value=\"EMA\">\n                                            EMA\n                                        </option>\n\n                                    </select>\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>\n                                        Drug Guidelines Ref.\n                                    </label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"guidelineRef\">\n\n                                </div>\n\n                            </div>\n\n                            <!-- FLAGS + FIELD VAR 4 -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-3\">\n\n                                    <div class=\"form-check mt-4\">\n\n                                        <input class=\"form-check-input\" type=\"checkbox\"\n                                            formControlName=\"publishedEvidence\">\n\n                                        <label class=\"form-check-label\">\n\n                                            Published Evidence Available\n\n                                        </label>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-md-9\">\n\n                                    <div class=\"border rounded p-3\">\n\n                                        <label>\n                                            Evidence Study Attached\n                                        </label>\n\n                                        <textarea class=\"form-control mb-3\" rows=\"5\" formControlName=\"evidenceStudy\">\n                                        </textarea>\n\n                                        <div class=\"mb-3\">\n\n                                            <a href=\"javascript:void(0)\">\n                                                Browse & Attach\n                                            </a>\n\n                                        </div>\n\n                                        <div class=\"form-check\">\n\n                                            <input class=\"form-check-input\" type=\"checkbox\"\n                                                formControlName=\"studyDownloadable\">\n\n                                            <label class=\"form-check-label\">\n\n                                                Study Downloadable\n\n                                            </label>\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <!-- EXTRA VARS -->\n\n                            <div class=\"row mb-4\">\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 1</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var1\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 2</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var2\">\n\n                                </div>\n\n                                <div class=\"col-md-4\">\n\n                                    <label>Var 3</label>\n\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"var3\">\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </tab>\n\n            </tabset>\n\n        </div>\n\n    </div>\n\n</ng-template>", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size th,\r\n.table-font-size td {\r\n  font-size: 13px; /* Change to your desired size */\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon .fa {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus .icon img {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus .btn {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table thead th {\r\n    border: 0;\r\n}\r\n\r\n.toplevel,\r\n.card {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table th {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table td {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn {\r\n    min-width: 100px;\r\n}\r\n\r\n::ng-deep .nav-tabs .nav-link {\r\n  font-size: 11px; /* Adjust as needed */\r\n}\r\n\r\nbutton.btn.custom-btn-white {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend+.invalid-feedback {\r\n    top: 35px;\r\n}\r\n\r\n.card-header {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList thead tr {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList td {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList tr th {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border td {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box img {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details p {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock input {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count input {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex span+span {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box .pro-box img {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links a {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header i {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus td img {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n}\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.table thead th,\r\n.table tbody td {\r\n    padding: 8px;\r\n    text-align: center;\r\n    line-height: normal;\r\n\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.clear {\r\n    display: block;\r\n}\r\n\r\n.save-pdf.btn {\r\n    font-size: 13px;\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row.bank-details {\r\n    margin: 0;\r\n}\r\n\r\n.row.bank-details + .card-body {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.img-preview-box {\r\n  width: 140px;\r\n  height: 140px;\r\n  border: 1px solid #ccc;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #fafafa;\r\n}\r\n\r\n.img-preview-box img {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.transaction-filter {\r\n    background: #f8f9fa;\r\n    border-radius: 6px;\r\n}\r\n\r\n.filter-label {\r\n    font-weight: 500;\r\n    margin-bottom: 5px;\r\n    font-size: 14px;\r\n}\r\n\r\n.show-btn {\r\n    width: 100%;\r\n    height: 38px;\r\n}\r\n\r\n::ng-deep .custom-tabset .nav-tabs .nav-link {\r\n  font-size: 9px !important;\r\n  font-weight: 600;\r\n}\r\n\r\n.pk-form label{\r\nfont-weight:600;\r\nfont-size:13px;\r\n}\r\n\r\n.pk-form .form-control{\r\nheight:36px;\r\nfont-size:13px;\r\n}\r\n\r\n.head-title{\r\nfont-weight:600;\r\nmargin-bottom:10px;\r\n}\r\n\r\n.btn-danger{\r\nbackground:#a10c0c;\r\nborder:none;\r\n}\r\n\r\n.section-title{\r\nfont-weight:600;\r\nborder-bottom:2px solid #ccc;\r\npadding-bottom:5px;\r\nmargin-bottom:15px;\r\n}\r\n\r\n.form-check{\r\nmargin-bottom:8px;\r\n}\r\n\r\ntextarea.form-control{\r\nresize:none;\r\n}\r\n\r\n.section-title{\r\n  font-weight:600;\r\n  border-bottom:2px solid #ccc;\r\n  padding-bottom:6px;\r\n}\r\n\r\n.section-subtitle{\r\n  font-weight:400;\r\n  margin-left:10px;\r\n  color:#555;\r\n}\r\n\r\n.form-check{\r\n  font-size:14px;\r\n}\r\n\r\n.form-check-input{\r\n  margin-right:6px;\r\n}\r\n\r\n.section-title{\r\n  font-weight:600;\r\n  border-bottom:2px solid #ccc;\r\n  padding-bottom:6px;\r\n}\r\n\r\n.section-subtitle{\r\n  font-weight:400;\r\n  margin-left:10px;\r\n  color:#555;\r\n}\r\n\r\n.form-check{\r\n  font-size:14px;\r\n}\r\n\r\n.form-check-input{\r\n  margin-right:6px;\r\n}\r\n\r\n.section-title{\r\n  font-weight:600;\r\n  border-bottom:2px solid #ccc;\r\n  padding-bottom:6px;\r\n}\r\n\r\n.section-subtitle{\r\n  font-weight:400;\r\n  margin-left:10px;\r\n  color:#555;\r\n}\r\n\r\n.form-check{\r\n  font-size:14px;\r\n}\r\n\r\n.form-check-input{\r\n  margin-right:6px;\r\n}\r\n\r\n.section-title{\r\n  font-weight:600;\r\n  border-bottom:2px solid #ccc;\r\n  padding-bottom:6px;\r\n}\r\n\r\n.section-subtitle{\r\n  font-weight:400;\r\n  margin-left:10px;\r\n  color:#555;\r\n}\r\n\r\n.form-check{\r\n  font-size:14px;\r\n}\r\n\r\n.form-check-input{\r\n  margin-right:6px;\r\n}\r\n\r\n.section-title{\r\n  font-weight:600;\r\n  border-bottom:2px solid #ccc;\r\n  padding-bottom:6px;\r\n}\r\n\r\n.section-subtitle{\r\n  font-weight:400;\r\n  margin-left:10px;\r\n  color:#555;\r\n}\r\n\r\n.form-check{\r\n  font-size:14px;\r\n}\r\n\r\n.form-check-input{\r\n  margin-right:6px;\r\n}\r\n\r\n.section-title{\r\n  font-weight:600;\r\n  border-bottom:2px solid #ccc;\r\n  padding-bottom:6px;\r\n}\r\n\r\n.section-subtitle{\r\n  font-weight:400;\r\n  margin-left:10px;\r\n  color:#555;\r\n}\r\n\r\n.form-check{\r\n  font-size:14px;\r\n}\r\n\r\n.form-check-input{\r\n  margin-right:6px;\r\n}\r\n\r\n.kv-container {\r\n  font-size: 13px;\r\n}\r\n\r\n.kv-row {\r\n  display: grid;\r\n  grid-template-columns: 180px 10px 1fr;\r\n  align-items: center;\r\n  padding: 6px 0;\r\n}\r\n\r\n.kv-label {\r\n  font-weight: 600;\r\n  color: #495057;\r\n}\r\n\r\n.kv-separator {\r\n  text-align: center;\r\n  color: #6c757d;\r\n}\r\n\r\n.kv-value {\r\n  color: #212529;\r\n  font-weight: 500;\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.Router }, { type: i5.ToastrService }, { type: i6.NgxSpinnerService }]; }, null); })();
//# sourceMappingURL=drug-management.component.js.map