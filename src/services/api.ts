interface LoginCredentials {
  id: string;
  password: string;
}

interface StudentData {
  name: string;
  id: string;
  fatherName: string;
  branch: string;
  yearOfPassing: string;
  semester: string;
  attendance: {
    overall: number;
    subjects: Array<{
      name: string;
      attendance: number;
    }>;
  };
  cgpa: number;
  schedule: Array<{
    subject: string;
    time: string;
    room: string;
  }>;
}

class ERPApi {
  private baseUrl: string;
  private token: string | null = null;

  constructor() {
    // Replace with your college ERP API base URL
    this.baseUrl = 'https://your-college-erp-api.com';
  }

  async login(credentials: LoginCredentials): Promise<{ token: string; userData: StudentData }> {
    try {
      const response = await fetch(`${this.baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      this.token = data.token;
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async getStudentData(): Promise<StudentData> {
    if (!this.token) {
      throw new Error('Not authenticated');
    }

    try {
      const response = await fetch(`${this.baseUrl}/student/data`, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch student data');
      }

      return await response.json();
    } catch (error) {
      console.error('Data fetch error:', error);
      throw error;
    }
  }

  async getAttendance(): Promise<StudentData['attendance']> {
    if (!this.token) {
      throw new Error('Not authenticated');
    }

    try {
      const response = await fetch(`${this.baseUrl}/student/attendance`, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch attendance data');
      }

      return await response.json();
    } catch (error) {
      console.error('Attendance fetch error:', error);
      throw error;
    }
  }
}

export const erpApi = new ERPApi();
export type { StudentData, LoginCredentials };