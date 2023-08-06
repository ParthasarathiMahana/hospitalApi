# hospitalApi
1. after downloading the project to your local system just do "npm i", and after that you will be good to go.
2. I have used post man to test the api's, you can use the same
3. The routes I have used are alittle bit different than routes given in the question doc:
   1. /api/v1/doctors/register --> to register doctor.
   2. /api/v1/doctors/login --> for login of doctors (a jwt "token" will be given please save it).
   3. /api/v1/patient/register --> for registering a patient using his/her name and phone(unique)[put Authorization Bearer token in header].
   4. /api/v1/patient/list_all_report?id='dfsddf....' --> for getting report of a patient (put id of the patient).
   5. /api/v1/patient/create_report?id='asrfadfg....' --> for creating report of a patient.
   6. /api/v1/patient/report?status='negative' --> for getting reports filtered by their status.
