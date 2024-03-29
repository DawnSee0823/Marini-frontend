import {
  LIST_ALL_UNIVERSITIES,
  LIST_ALL_LEADS,
  LIST_ALL_APPLICATIONS,
  LIST_PROGRAMMS,
  LIST_ALL_CURRENCIES,
  LIST_ALL_BRANCHES,
  LIST_ALL_USERS,
  LIST_ALL_ACTIVITIES,
  LIST_ALL_PROERTIES,
  // EDIT_UNIVERSITIE,
  VIEW_UNIVERSITY_DETAILS,
  VIEW_LEAD_DETAILS,
  VIEW_PROGRAMME_DETAILS,
  APPLICATION_DETAILS,
  VIEW_CURRENCY_DETAILS,
  LIST_ALL_BACKUPS,
  VIEW_ALL_BRANCH,
  VIEW_ALL_USERS,
  DELETE_BACKUP_FILE,
  DOWNLOAD_BACKUP_FILE,
  RESTORE_BACKUP_FILE,
  // Anasite - Edits: adding properties
  VIEW_PROGRAM_LEVEL,
  LIST_ALL_PROGRAM_LEVELS,
  //
  VIEW_PROGRAM_CATEGORY,
  LIST_ALL_PROGRAM_CATEGORYS,
  //
  VIEW_QUALIFICATION_TYPE,
  LIST_ALL_QUALIFICATION_TYPES,
  //
  VIEW_UNIVERSITY_TYPE,
  LIST_ALL_UNIVERSITY_TYPES,
  //
  VIEW_LEAD_GROUP,
  LIST_ALL_LEAD_GROUPS,
  //
  VIEW_INTERESTED_PROGRAM,
  LIST_ALL_INTERESTED_PROGRAMS,
  //
  // Status
  LIST_ALL_APPLICATION_MODULE_STATUSS,
  VIEW_APPLICATION_MODULE_STATUS,
  //
  LIST_ALL_LEADS_MANAGMENT_MODULE_STATUS,
  VIEW_LEADS_MANAGMENT_MODULE_STATUS,
  //
  LIST_ALL_INVOICE_MODULE_STATUSS,
  VIEW_INVOICE_MODULE_STATUS,
  //
  // Module: Invoice (1)
  LIST_ALL_COMMISSION_INVOICES,
  VIEW_COMMISSION_INVOICE,
  // END
} from "../actions/actionType";

const initialState = {
  universities: [],
  programms: [],
  leads: [],
  applications: [],
  currency: [],
  backups: [],
  branch: [null],
  users: [],
  activities: [],
  properties: [],
  //
  viewsUniversity: [null],
  viewLeads: [null],
  viewProgramme: [null],
  viewApplications: [null],
  viewCurrency: [null],
  viewBranch: [null],
  viewUser: [null],
  //
  deleteBackupFile: [null],
  downloadBackupFile: [null],
  restoreBackupFile: [null],
  // Anasite - Edits: properties
  programLevels: [null],
  viewProgramLevel: [null],
  //
  programCategorys: [null],
  viewProgramCategory: [null],
  //
  qualificationTypes: [null],
  viewQualificationType: [null],
  //
  universityTypes: [null],
  viewUniversityType: [null],
  //
  leadGroups: [null],
  viewLeadGroup: [null],
  //
  interestedPrograms: [null],
  viewInterestedGroup: [null],
  //
  // Status
  applicationModuleStatuss: [null],
  viewApplicationModuleStatus: [null],
  //
  leadsManagmentModuleStatuss: [null],
  viewLeadsManagmentModuleStatus: [null],
  //
  invoiceModuleStatuss: [null],
  viewInvoiceModuleStatus: [null],
  //
  // Module: Invoice (1)
  commissionInvoices: [null],
  viewCommissionInvoice: [null],
  //
  // END
};
const universitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    // Anasite - Edits: properties

    case LIST_ALL_PROGRAM_LEVELS:
      return {
        ...state,
        programLevels: action.payload,
      };
    case VIEW_PROGRAM_LEVEL:
      return {
        ...state,
        viewProgramLevel: action.payload,
      };
    //
    case LIST_ALL_PROGRAM_CATEGORYS:
      return {
        ...state,
        programCategorys: action.payload,
      };
    case VIEW_PROGRAM_CATEGORY:
      return {
        ...state,
        viewProgramCategory: action.payload,
      };
    //
    case LIST_ALL_QUALIFICATION_TYPES:
      return {
        ...state,
        qualificationTypes: action.payload,
      };
    case VIEW_QUALIFICATION_TYPE:
      return {
        ...state,
        viewQualificationType: action.payload,
      };
    //
    case LIST_ALL_UNIVERSITY_TYPES:
      return {
        ...state,
        universityTypes: action.payload,
      };
    case VIEW_UNIVERSITY_TYPE:
      return {
        ...state,
        viewUniversityType: action.payload,
      };
    //
    case LIST_ALL_LEAD_GROUPS:
      return {
        ...state,
        leadGroups: action.payload,
      };
    case VIEW_LEAD_GROUP:
      return {
        ...state,
        viewLeadGroup: action.payload,
      };
    //
    case LIST_ALL_INTERESTED_PROGRAMS:
      return {
        ...state,
        interestedPrograms: action.payload,
      };
    case VIEW_INTERESTED_PROGRAM:
      return {
        ...state,
        viewInterestedProgram: action.payload,
      };
    //
    // Status
    case LIST_ALL_APPLICATION_MODULE_STATUSS:
      return {
        ...state,
        applicationModuleStatuss: action.payload,
      };
    case VIEW_APPLICATION_MODULE_STATUS:
      return {
        ...state,
        viewApplicationModuleStatus: action.payload,
      };
    //
    case LIST_ALL_LEADS_MANAGMENT_MODULE_STATUS:
      return {
        ...state,
        leadsManagmentModuleStatuss: action.payload,
      };
    case VIEW_LEADS_MANAGMENT_MODULE_STATUS:
      return {
        ...state,
        viewLeadsManagmentModuleStatus: action.payload,
      };
    //
    case LIST_ALL_INVOICE_MODULE_STATUSS:
      return {
        ...state,
        invoiceModuleStatuss: action.payload,
      };
    case VIEW_INVOICE_MODULE_STATUS:
      return {
        ...state,
        viewInvoiceModuleStatus: action.payload,
      };
    //
    // Module: Invoice (1)
    case LIST_ALL_COMMISSION_INVOICES:
      return {
        ...state,
        commissionInvoices: action.payload,
      };
    case VIEW_COMMISSION_INVOICE:
      return {
        ...state,
        viewCommissionInvoice: action.payload,
      };
    //
    // END
    case LIST_ALL_UNIVERSITIES:
      return {
        ...state,
        universities: action.payload,
      };
    case LIST_ALL_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
    case LIST_ALL_APPLICATIONS:
      return {
        ...state,
        applications: action.payload,
      };
    case LIST_ALL_CURRENCIES:
      return {
        ...state,
        currency: action.payload,
      };
    case LIST_PROGRAMMS:
      return {
        ...state,
        programms: action.payload,
      };
    case LIST_ALL_BACKUPS:
      return {
        ...state,
        backups: action.payload,
      };
    case LIST_ALL_BRANCHES:
      return {
        ...state,
        branch: action.payload,
      };
    case LIST_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case LIST_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case LIST_ALL_PROERTIES:
      return {
        ...state,
        properties: action.payload,
      };

    //
    case VIEW_UNIVERSITY_DETAILS:
      return {
        ...state,
        viewsUniversity: action.payload,
      };
    case VIEW_LEAD_DETAILS:
      return {
        ...state,
        viewLeads: action.payload,
      };
    case VIEW_PROGRAMME_DETAILS:
      return {
        ...state,
        viewProgramme: action.payload,
      };
    case APPLICATION_DETAILS:
      return {
        ...state,
        viewApplications: action.payload,
      };
    case VIEW_CURRENCY_DETAILS:
      return {
        ...state,
        viewCurrency: action.payload,
      };
    case VIEW_ALL_BRANCH:
      return {
        ...state,
        viewBranch: action.payload,
      };
    case DELETE_BACKUP_FILE:
      return {
        ...state,
        deleteBackupFile: action.payload,
      };
    case DOWNLOAD_BACKUP_FILE:
      return {
        ...state,
        downloadBackupFile: action.payload,
      };
    case RESTORE_BACKUP_FILE:
      return {
        ...state,
        restoreBackupFile: action.payload,
      };
    case VIEW_ALL_USERS:
      return {
        ...state,
        viewUser: action.payload,
      };
    default:
      return state;
  }
};
export default universitiesReducer;
