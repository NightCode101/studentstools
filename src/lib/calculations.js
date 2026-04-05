// GPA Calculator
export const calculateGPA = (subjects) => {
  if (!subjects || subjects.length === 0) return 0;

  const totalPoints = subjects.reduce((sum, s) => {
    const grade = parseFloat(s.grade) || 0;
    const credits = parseFloat(s.credits) || 0;
    return sum + grade * credits;
  }, 0);

  const totalCredits = subjects.reduce((sum, s) => sum + (parseFloat(s.credits) || 0), 0);

  if (totalCredits === 0) return 0;
  return (totalPoints / totalCredits).toFixed(2);
};

// Loan Calculator
export const calculateLoan = (principal, annualRate, months) => {
  principal = parseFloat(principal) || 0;
  annualRate = parseFloat(annualRate) || 0;
  months = parseInt(months) || 0;

  if (!principal || !annualRate || !months) {
    return {
      monthlyPayment: 0,
      totalPayment: 0,
      totalInterest: 0,
      schedule: [],
    };
  }

  const monthlyRate = annualRate / 100 / 12;
  let monthlyPayment = 0;

  if (monthlyRate === 0) {
    monthlyPayment = principal / months;
  } else {
    monthlyPayment = (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
      (Math.pow(1 + monthlyRate, months) - 1);
  }

  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - principal;

  // Generate amortization schedule
  const schedule = [];
  let balance = principal;

  for (let i = 1; i <= months; i++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    balance -= principalPayment;

    schedule.push({
      month: i,
      payment: monthlyPayment.toFixed(2),
      principal: Math.max(0, principalPayment).toFixed(2),
      interest: interestPayment.toFixed(2),
      balance: Math.max(0, balance).toFixed(2),
    });
  }

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
    schedule,
  };
};

// Weighted Grade Calculator
export const calculateWeightedGrade = (grades) => {
  if (!grades || grades.length === 0) return 0;

  const validGrades = grades.filter(g => g.grade && g.weight);
  if (validGrades.length === 0) return 0;

  const totalWeight = validGrades.reduce((sum, g) => sum + (parseFloat(g.weight) || 0), 0);
  if (totalWeight === 0) return 0;

  const weightedSum = validGrades.reduce((sum, g) => {
    return sum + (parseFloat(g.grade) || 0) * (parseFloat(g.weight) || 0);
  }, 0);

  return (weightedSum / totalWeight).toFixed(2);
};

// Philippine Grade Conversion
export const convertPhilippineGrade = (grade, fromScale = '5', toScale = '4') => {
  grade = parseFloat(grade);

  if (fromScale === '5' && toScale === '4') {
    // 1-5 scale to 4.0 scale
    if (grade === 1) return 4.0;
    if (grade === 1.25) return 3.75;
    if (grade === 1.5) return 3.5;
    if (grade === 1.75) return 3.25;
    if (grade === 2) return 3.0;
    if (grade === 2.25) return 2.75;
    if (grade === 2.5) return 2.5;
    if (grade === 2.75) return 2.25;
    if (grade === 3) return 2.0;
    if (grade === 3.5) return 1.0;
    if (grade >= 4) return 0;
  }

  if (fromScale === '4' && toScale === '5') {
    // 4.0 scale to 1-5 scale
    if (grade >= 3.75) return 1.0;
    if (grade >= 3.5) return 1.25;
    if (grade >= 3.25) return 1.5;
    if (grade >= 3.0) return 1.75;
    if (grade >= 2.75) return 2.0;
    if (grade >= 2.5) return 2.25;
    if (grade >= 2.25) return 2.5;
    if (grade >= 2.0) return 2.75;
    if (grade >= 1.0) return 3.0;
    return 5.0;
  }

  return grade;
};

// Validation helpers
export const validateGrant = (value, min = 0, max = 100) => {
  const num = parseFloat(value);
  return !isNaN(num) && num >= min && num <= max;
};

export const formatCurrency = (value, currency =  '₱') => {
  return `${currency}${parseFloat(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
