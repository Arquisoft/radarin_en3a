// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementation((success) => 
        Promise.resolve(
            success({
                coords: {
                    latitude: 50,
                    longitude: 40
                }
            })
        )
    )
};

global.navigator.geolocation = mockGeolocation;