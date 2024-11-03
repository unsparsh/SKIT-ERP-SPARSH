// In your components
import { erpApi } from '../services/api';

// Login
const { token, userData } = await erpApi.login(credentials);

// Get student data
const studentData = await erpApi.getStudentData();
