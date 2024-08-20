## Submission
Name: Junkai Man
Email: junkaiman@outlook.com

## Setup Instructions
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the application

## Assumptions and Limitations
This mockup assumes that the voices are predefined and prefetched from the server as shown in `mockData.ts`. In real scenario, the voices would be fetched from an API and this can be implemented by adding `fetchVoices` function in `api.ts` and calling it in `App.tsx`.

This mockup assumes that the voice list is small and can be displayed in a single page. In real scenario, the voice list could be paginated and this can be implemented by adding pagination logic in `App.tsx`.

## Future Improvements
Due to time limit, the components are hard coded and not elegant enough. I would suggest adopting a UI library like shadcn to make it more professional.

For simplicity, local state management is sufficient for this mockup. However, for large scale applications, I would suggest using the Redux.


Thanks for reading!