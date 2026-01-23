const express = require("express");
const router = express.Router();

// GET dashboard statistics
router.get("/stats", (req, res) => {
    console.log("?? DASHBOARD STATS CALLED - SIMPLE VERSION");
    
    const response = {
        success: true,
        data: {
            counts: {
                totalUsers: 15,
                totalFaculty: 9,
                totalCourses: 25
            },
            recentActivity: {
                recentUsers: [
                    { name: "Admin User", email: "admin@test.com", role: "admin" },
                    { name: "Faculty User", email: "faculty@test.com", role: "faculty" }
                ],
                recentFaculty: [
                    { name: "Dr. Test Faculty", designation: "Professor", department: "CS" }
                ]
            }
        }
    };
    
    console.log("?? Sending response:", JSON.stringify(response));
    res.json(response);
});

module.exports = router;
