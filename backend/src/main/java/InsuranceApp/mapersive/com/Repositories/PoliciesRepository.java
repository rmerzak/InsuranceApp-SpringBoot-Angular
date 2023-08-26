package InsuranceApp.mapersive.com.Repositories;

import InsuranceApp.mapersive.com.Entities.Policies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface PoliciesRepository extends JpaRepository<Policies, Integer> {
    Policies findByPolicyId(int policyId);

}