// Utility: Constants

export const APP_CONFIG = {
  APP_NAME: 'GDIS',
  VERSION: '1.0.0',
  DEFAULT_MAP_CENTER: [-98.5795, 39.8283],
  DEFAULT_MAP_ZOOM: 4,
  DEFAULT_BASEMAP: 'topo-vector',
};

export const FILE_TYPES = {
  CPT: ['.cpt'],
  AGS: ['.ags'],
  PDF: ['.pdf'],
  MODEL_3D: ['.obj', '.fbx', '.gltf', '.glb'],
  GENERIC: ['.csv', '.xlsx', '.txt', '.json'],
};

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  VIEWER: 'viewer',
};

export const API_ENDPOINTS = {
  AUTH: '/auth',
  USERS: '/users',
  DATA: '/data',
  BOREHOLES: '/boreholes',
  REPORTS: '/reports',
  DATABASE: '/database',
};

export const MAP_LAYERS = {
  BOREHOLES: 'boreholes-layer',
  CROSS_SECTIONS: 'cross-sections-layer',
  PDF_POINTS: 'pdf-points-layer',
};
