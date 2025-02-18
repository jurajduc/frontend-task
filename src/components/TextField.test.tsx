import React from 'react';
import { render, screen } from '@testing-library/react';
import TextField from './TextField';

describe('TextField Component', () => {
    
    const defaultProps = {
        id: 'test-id',
        label: 'TextField label',
        value: '',
        onChange: jest.fn(),
        placeholder: 'Enter value',
        required: false,
    };


    test('displays the correct label', () => {
        render(<TextField {...defaultProps} />);
        expect(screen.getByText('TextField label')).toBeInTheDocument();
    });

    test('displays the required Optional label when NOT required', () => {
        render(<TextField {...defaultProps} />);
        expect(screen.getByText('Optional')).toBeInTheDocument();
    });

    test('displays the error message', () => {
        render(<TextField {...defaultProps} error="This is an error message" />);
        expect(screen.getByText('This is an error message')).toBeInTheDocument();
        
    });
});

// THESE ARE VERY BASIC TESTS.